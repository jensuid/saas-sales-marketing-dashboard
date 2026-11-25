/* =========================================================================
   F5 dashboard — app.js (Halaman 1 Exec, 2 Funnel, 3 Web)
   Semua angka berasal dari window.METRICS_DATA — file payload yang SAMA
   dengan prototipe beku F4b (design/prototype/data.js), hasil
   scripts/export_dashboard_data.py → package metrics/ (F4).
   Tidak ada angka literal di file ini kecuali label & tata letak.
   Logika halaman 1–3 disalin dari design/prototype/app.js (kontrak beku);
   perbedaan perilaku = bug implementasi.
   ========================================================================= */
(function () {
  "use strict";

  const PAYLOAD = window.METRICS_DATA;
  if (!PAYLOAD) {
    document.body.innerHTML =
      '<p style="padding:2rem;font-family:monospace">data.js belum ada — jalankan: PYTHONPATH=. .venv/bin/python scripts/export_dashboard_data.py</p>';
    return;
  }
  const DATA = PAYLOAD.data;
  const META = PAYLOAD.meta;
  const NS = "http://www.w3.org/2000/svg";

  /* ----------------------------- format ---------------------------------- */
  const nf = (v, dp = 0) =>
    v == null || Number.isNaN(v)
      ? "—"
      : v.toLocaleString("id-ID", { minimumFractionDigits: dp, maximumFractionDigits: dp });
  const pct = (v, dp = 1) => (v == null ? "—" : nf(v * 100, dp) + "%");
  const jt = (v, dp = 1) => (v == null ? "—" : "Rp " + nf(v / 1e6, dp) + " jt");
  const rp = (v) => (v == null ? "—" : Math.abs(v) >= 1e6 ? jt(v) : "Rp " + nf(v / 1e3, 0) + " rb");
  const num = (v) => (v == null ? "—" : nf(v, 0));
  const signed = (v, dp = 1) => (v == null ? "—" : (v >= 0 ? "▲ " : "▼ ") + nf(Math.abs(v) * 100, dp) + "%");
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const mlabel = (iso) => (iso ? MONTHS[+iso.slice(5, 7) - 1] + " " + iso.slice(2, 4) : "—");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mon = (iso) => (iso ? MONTHS[+iso.slice(5, 7) - 1] : "—");
  const days = (v) => (v == null ? "—" : nf(Math.round(v), 0) + " hari");
  const qlabel = (iso) => (iso ? "Q" + (Math.floor((+iso.slice(5, 7) - 1) / 3) + 1) + " " + iso.slice(2, 4) : "—");
  const byKey = (a, f) => a.reduce((m, r) => ((m[f(r)] = m[f(r)] || []).push(r), m), {});
  const srcLabel = (s) => (s === "Refferal" ? "Referral" : s);
  const pretty = (s) => String(s || "").replace(/^\/form\//, "form ").replace(/^\//, "");
  const SOURCE_ORDER = ["CPC", "Refferal", "Direct", "Organic Search", "Organic Social"];
  const srcColor = (s) => SERIES_COLORS[Math.max(0, SOURCE_ORDER.indexOf(s)) % 5];
  const STAGE_SHORT = {
    leads_registered: "Leads registered",
    leads_qualification: "Qualified",
    initial_communication_success: "Comm. success",
    approach_success: "Approach success",
    discussion_success: "Discussion success",
    offer_sent: "Offer sent",
    quotation_recieved: "Quotation received",
    deal_won: "Deal won",
  };
  const stageShort = (s) => STAGE_SHORT[s] || String(s || "").replace(/_/g, " ");

  /* ----------------------------- state ----------------------------------- */
  const state = { page: "p1", year: "all", focus: "" };
  const focus = () => {
    if (!state.focus) return null;
    const i = state.focus.indexOf(":");
    return { dim: state.focus.slice(0, i), value: state.focus.slice(i + 1) };
  };
  const isFocus = (dim, value) => {
    const f = focus();
    return !!f && f.dim === dim && f.value === value;
  };
  const focusActive = (dim) => !!focus() && focus().dim === dim;

  /* ----------------------------- data helpers ---------------------------- */
  const rows = (id) => (DATA[id] ? DATA[id].rows : []);
  const sum = (a, f) => a.reduce((s, r) => s + (f(r) || 0), 0);
  const inYear = (r, key = "month") => state.year === "all" || (r[key] || "").startsWith(state.year);
  const pick = (id, key = "month") => rows(id).filter((r) => inYear(r, key));

  /** Agregat jendela waktu dari seri bulanan — selalu dari baris metrik. */
  function agg(year) {
    const y = year === undefined ? state.year : year;
    const ok = (r) => y === "all" || (r.month || "").startsWith(y);
    const g = rows("gmv_monthly").filter(ok);
    const c = rows("contracts_monthly").filter(ok);
    const w = rows("win_rate_by_source").filter(ok);
    const reg = sum(w, (r) => r.registered);
    const won = sum(w, (r) => r.won);
    return {
      year: y,
      gmv: sum(g, (r) => r.gmv),
      newGmv: sum(g, (r) => r.new_gmv),
      renewalGmv: sum(g, (r) => r.renewal_gmv),
      contracts: sum(c, (r) => r.contracts),
      newContracts: sum(c, (r) => r.new_contracts),
      renewalContracts: sum(c, (r) => r.renewal_contracts),
      registered: reg,
      won: won,
      winRate: reg ? won / reg : null,
    };
  }
  function prevAgg() {
    if (state.year === "all") return null;
    return agg(String(+state.year - 1));
  }

  /** Renewal rate: all-time dari metrik, atau kohort pada tahun terpilih. */
  function renewalKpi(year) {
    const y = year === undefined ? state.year : year;
    if (y === "all") {
      const r = rows("renewal_rate")[0] || {};
      return { rate: r.renewal_rate, renewed: r.renewed, leads: r.leads_with_contract, label: "all-time" };
    }
    const rs = rows("renewal_by_cohort").filter((r) => (r.cohort_month || "").startsWith(y));
    const leads = sum(rs, (r) => r.leads), renewed = sum(rs, (r) => r.renewed);
    return { rate: leads ? renewed / leads : null, renewed, leads, label: "kohort " + y };
  }

  /* ----------------------------- SVG helpers ----------------------------- */
  function el(svg, tag, attrs, text) {
    const n = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    svg.appendChild(n);
    return n;
  }
  function chart(mount, h, draw) {
    if (!mount) return;
    const w = Math.max(280, mount.clientWidth || mount.parentElement.clientWidth || 560);
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", h);
    svg.setAttribute("class", "chart");
    svg.setAttribute("role", "img");
    mount.appendChild(svg);
    draw(svg, w, h);
    return svg;
  }
  const tip = (n, text) => {
    if (text) el(n, "title", null, text);
    return n;
  };
  function niceMax(v) {
    if (!v) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    const f = v / p;
    return (f <= 1 ? 1 : f <= 1.2 ? 1.2 : f <= 1.5 ? 1.5 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 3 ? 3 : f <= 4 ? 4 : f <= 5 ? 5 : f <= 6 ? 6 : f <= 7.5 ? 7.5 : 10) * p;
  }
  /** Label sumbu-x yang tidak bertumpuk: tick terakhir selalu menang. */
  function spreadTicks(list, minGap) {
    const out = [];
    const last = list[list.length - 1];
    list.forEach((t) => {
      if (t === last) return;
      if (last.pos - t.pos < minGap) return;
      if (out.length && t.pos - out[out.length - 1].pos < minGap * 0.8) return;
      out.push(t);
    });
    out.push(last);
    return out;
  }
  const SERIES_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

  /* ----------------------------- charts ---------------------------------- */

  /** Bar bulanan bertumpuk (2–5 seri). */
  function stackedBars(mount, o) {
    const rs = o.rows;
    if (!rs.length) return;
    chart(mount, o.height || 216, (svg, w, h) => {
      const m = { t: 10, r: 10, b: 20, l: 46 };
      const pw = w - m.l - m.r, ph = h - m.t - m.b;
      const totals = rs.map((r) => sum(o.series, (s) => r[s.key]));
      const max = niceMax(Math.max(...totals));
      const bw = pw / rs.length;
      const tickCand = [];
      [0, 0.5, 1].forEach((f) => {
        const y = m.t + ph - f * ph;
        el(svg, "line", { x1: m.l, x2: w - m.r, y1: y, y2: y, class: f === 0 ? "axis" : "gridline" });
        el(svg, "text", { x: m.l - 6, y: y + 3, "text-anchor": "end" }, o.yFmt(max * f));
      });
      rs.forEach((r, i) => {
        const x = m.l + i * bw + bw * 0.18;
        const bwid = Math.max(1.5, bw * 0.64);
        let acc = 0;        o.series.forEach((s) => {
          const v = r[s.key] || 0;
          if (v <= 0) return;
          const y0 = m.t + ph - ((acc + v) / max) * ph;
          const y1 = m.t + ph - (acc / max) * ph;
          const rect = el(svg, "rect", {
            x: x, y: y0, width: bwid, height: Math.max(0.6, y1 - y0),
            fill: s.color, class: "mark", opacity: s.dim ? 0.25 : 1,
          });
          tip(rect, o.label(r) + "\n" + s.label + ": " + (s.fmt || o.yFmt)(v));
          acc += v;
        });
        if (i % Math.ceil(rs.length / 8) === 0 || i === rs.length - 1)
          tickCand.push({ pos: x + bwid / 2, label: o.xLabel(r) });
      });
      spreadTicks(tickCand, 42).forEach((t) =>
        el(svg, "text", { x: t.pos, y: h - 6, "text-anchor": "middle" }, t.label));
      if (o.cutoffIndex != null && o.cutoffIndex >= 0 && o.cutoffIndex < rs.length) {
        const cx = m.l + o.cutoffIndex * bw;
        el(svg, "line", {
          x1: cx, x2: cx, y1: m.t, y2: m.t + ph,
          stroke: "var(--ink-3)", "stroke-width": 1, "stroke-dasharray": "3 3",
        });
        el(svg, "text", { x: cx - 4, y: m.t + 8, "text-anchor": "end", fill: "var(--ink-3)" }, o.cutoffLabel || "cutoff");
      }
    });
  }

  /** Bar horizontal berperingkat. */
  function hbar(mount, o) {
    const rs = o.rows;
    if (!rs.length) return;
    const rowH = o.rowH || 26;
    chart(mount, rs.length * rowH + 14, (svg, w, h) => {
      const labelW = o.labelW || 132;
      const valW = o.valW || 78;
      const max = o.max || Math.max(...rs.map((r) => o.value(r))) || 1;
      const bw = w - labelW - valW;
      rs.forEach((r, i) => {
        const y = i * rowH + 4;
        const v = o.value(r);
        const dim = o.dimWhen && o.dimWhen(r);
        const col = o.color ? o.color(r) : "var(--accent)";
        el(svg, "text", { x: 0, y: y + rowH / 2 + 3, class: "lab", opacity: dim ? 0.4 : 1 },
          o.label(r).length > 22 ? o.label(r).slice(0, 21) + "…" : o.label(r));
        const rect = el(svg, "rect", {
          x: labelW, y: y + rowH * 0.26, width: Math.max(1, (v / max) * bw),
          height: rowH * 0.46, fill: col, class: "mark", opacity: dim ? 0.22 : 1,
        });
        tip(rect, o.label(r) + "\n" + (o.fmt || ((x) => num(x)))(v) + (o.extra ? "\n" + o.extra(r) : ""));
        el(svg, "text", { x: w, y: y + rowH / 2 + 3, "text-anchor": "end", class: "val" },
          (o.fmt || ((x) => num(x)))(v));
      });
    });
  }

  /** Donut ≤ 5 irisan. */
  function donut(mount, o) {
    const rs = o.rows;
    chart(mount, 196, (svg, w, h) => {
      const total = sum(rs, o.value) || 1;
      const cx = w / 2, cy = h / 2, rOut = 66, rIn = 48;
      let a0 = -Math.PI / 2;
      rs.forEach((r, i) => {
        const frac = o.value(r) / total;
        const a1 = a0 + frac * Math.PI * 2;
        const large = a1 - a0 > Math.PI ? 1 : 0;
        const p = (rad, a) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
        const [x0, y0] = p(rOut, a0), [x1, y1] = p(rOut, a1);
        const [x2, y2] = p(rIn, a1), [x3, y3] = p(rIn, a0);
        const dim = o.dimWhen && o.dimWhen(r);
        const path = el(svg, "path", {
          d: `M${x0} ${y0} A${rOut} ${rOut} 0 ${large} 1 ${x1} ${y1} L${x2} ${y2} A${rIn} ${rIn} 0 ${large} 0 ${x3} ${y3} Z`,
          fill: SERIES_COLORS[i % 5], class: "mark", opacity: dim ? 0.22 : 1,
        });
        tip(path, o.label(r) + "\n" + o.fmt(o.value(r)) + " · " + pct(frac, 1));
        a0 = a1;
      });
      el(svg, "text", { x: cx, y: cy - 3, "text-anchor": "middle", class: "val-strong", "font-size": 12.5 }, o.centerTop || "");
      el(svg, "text", { x: cx, y: cy + 10, "text-anchor": "middle", "font-size": 9.5 }, o.centerSub || "");
    });
  }

  /** Line chart multi-seri dengan titik + tooltip. */
  function lineChart(mount, o) {
    const rs = o.rows;
    if (!rs.length) return;
    chart(mount, o.height || 200, (svg, w, h) => {
      const m = { t: 10, r: 8, b: 20, l: 46 };
      const pw = w - m.l - m.r, ph = h - m.t - m.b;
      const allVals = [];
      rs.forEach((r) => o.series.forEach((s) => allVals.push(r[s.key] || 0)));
      const max = niceMax(Math.max(...allVals, o.minMax || 0));
      [0, 0.5, 1].forEach((f) => {
        const y = m.t + ph - f * ph;
        el(svg, "line", { x1: m.l, x2: w - m.r, y1: y, y2: y, class: f === 0 ? "axis" : "gridline" });
        el(svg, "text", { x: m.l - 6, y: y + 3, "text-anchor": "end" }, o.yFmt(max * f));
      });
      const xf = (i) => m.l + (rs.length === 1 ? pw / 2 : (i / (rs.length - 1)) * pw);
      o.series.forEach((s, si) => {
        const pts = rs.map((r, i) => [xf(i), m.t + ph - ((r[s.key] || 0) / max) * ph]);
        const color = s.color || SERIES_COLORS[si % 5];
        el(svg, "path", {
          d: pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" "),
          fill: "none", stroke: color, "stroke-width": s.width || 1.7,
          "stroke-dasharray": s.dash || null, class: "mark", opacity: s.dim ? 0.25 : 1,
        });
        rs.forEach((r, i) => {
          const c = el(svg, "circle", {
            cx: pts[i][0], cy: pts[i][1], r: rs.length > 26 ? 1.6 : 2.6,
            fill: color, class: "mark", opacity: s.dim ? 0.25 : 1,
          });
          tip(c, o.xLabel(r) + "\n" + s.label + ": " + o.yFmt(r[s.key] || 0));
        });
      });
      const tickPos = rs.map((r, i) => ({ pos: xf(i), label: o.xLabel(r) }));
      spreadTicks(tickPos, 46).forEach((t) =>
        el(svg, "text", { x: t.pos, y: h - 6, "text-anchor": "middle" }, t.label));
    });
  }

  /** Bar vertikal sederhana (satu seri) dengan label nilai. */
  function colBars(mount, o) {
    const rs = o.rows;
    if (!rs.length) return;
    chart(mount, o.height || 200, (svg, w, h) => {
      const m = { t: 18, r: 6, b: 34, l: 46 };
      const pw = w - m.l - m.r, ph = h - m.t - m.b;
      const max = niceMax(Math.max(...rs.map((r) => o.value(r))));
      [0, 0.5, 1].forEach((f) => {
        const y = m.t + ph - f * ph;
        el(svg, "line", { x1: m.l, x2: w - m.r, y1: y, y2: y, class: f === 0 ? "axis" : "gridline" });
        el(svg, "text", { x: m.l - 6, y: y + 3, "text-anchor": "end" }, o.yFmt(max * f));
      });
      const bw = pw / rs.length;
      rs.forEach((r, i) => {
        const v = o.value(r);
        const x = m.l + i * bw + bw * 0.2;
        const bwid = Math.max(6, bw * 0.6);
        const y = m.t + ph - (v / max) * ph;
        const dim = o.dimWhen && o.dimWhen(r);
        const rect = el(svg, "rect", {
          x: x, y: y, width: bwid, height: ph - (m.t + ph - y) + (m.t + ph - y) - 0,
          height: Math.max(1, m.t + ph - y), fill: o.color || "var(--chart-1)", class: "mark", opacity: dim ? 0.22 : 1,
        });
        rect.setAttribute("height", Math.max(1, m.t + ph - y));
        tip(rect, o.label(r) + "\n" + o.fmt(v) + (o.extra ? "\n" + o.extra(r) : ""));
        el(svg, "text", { x: x + bwid / 2, y: y - 5, "text-anchor": "middle", class: "val" }, o.fmt(v));
        el(svg, "text", { x: x + bwid / 2, y: h - 18, "text-anchor": "middle", class: "lab" }, o.label(r));
        if (o.sub) el(svg, "text", { x: x + bwid / 2, y: h - 6, "text-anchor": "middle" }, o.sub(r));
      });
    });
  }

  function bubble(mount, o) {
    const rs = o.rows;
    chart(mount, o.height || 250, (svg, w, h) => {
      const m = { t: 16, r: 16, b: 34, l: 44 };
      const pw = w - m.l - m.r, ph = h - m.t - m.b;
      const xs = rs.map(o.x), ys = rs.map(o.y);
      const xMax = niceMax(Math.max(...xs) * 1.12), yMax = Math.max(...ys) * 1.25;
      const X = (v) => m.l + (v / xMax) * pw;
      const Y = (v) => m.t + ph - ((v - (o.yMin || 0)) / (yMax - (o.yMin || 0))) * ph;
      const rMax = Math.max(...rs.map(o.size)) || 1;
      const labels = [];
      [0, 0.5, 1].forEach((f) => {
        const yv = (o.yMin || 0) + f * (yMax - (o.yMin || 0));
        el(svg, "line", { x1: m.l, x2: w - m.r, y1: Y(yv), y2: Y(yv), class: f === 0 ? "axis" : "gridline" });
        el(svg, "text", { x: m.l - 6, y: Y(yv) + 3, "text-anchor": "end" }, pct(yv, 0));
      });
      [0, 0.5, 1].forEach((f) =>
        el(svg, "text", { x: X(xMax * f), y: h - 16, "text-anchor": "middle" }, num(xMax * f)));
      el(svg, "text", { x: w - m.r, y: h - 4, "text-anchor": "end" }, o.xLabel || "");
      const avgX = sum(rs, o.x) / rs.length, avgY = sum(rs, o.y) / rs.length;
      el(svg, "line", { x1: X(avgX), x2: X(avgX), y1: m.t, y2: m.t + ph, class: "gridline", "stroke-dasharray": "3 3" });
      el(svg, "line", { x1: m.l, x2: w - m.r, y1: Y(avgY), y2: Y(avgY), class: "gridline", "stroke-dasharray": "3 3" });
      rs.forEach((r, i) => {
        const dim = o.dimWhen && o.dimWhen(r);
        const rad = 5 + 13 * Math.sqrt(o.size(r) / rMax);
        const c = el(svg, "circle", {
          cx: X(o.x(r)), cy: Y(o.y(r)), r: rad, fill: o.color ? o.color(r) : "var(--accent)",
          opacity: dim ? 0.18 : 0.55, stroke: "var(--accent)", "stroke-width": 1.2, class: "mark",
        });
        tip(c, o.label(r) + "\n" + o.tip(r));
        labels.push({ x: X(o.x(r)), y: Y(o.y(r)) - rad - 5, text: o.label(r), dim: dim });
      });
      /* hindari label bertumpuk: geser vertikal bila terlalu rapat */
      labels.forEach((a, i) => {
        for (let j = 0; j < i; j++) {
          const b = labels[j];
          if (Math.abs(a.x - b.x) < 74 && Math.abs(a.y - b.y) < 13) a.y = b.y - 14;
        }
      });
      labels.forEach((a) =>
        el(svg, "text", { x: a.x, y: a.y, "text-anchor": "middle", class: "lab", opacity: a.dim ? 0.35 : 1 }, a.text));
    });
  }

  /** Waterfall new → renewal → total. */
  function waterfall(mount, o) {
    chart(mount, 210, (svg, w, h) => {
      const m = { t: 24, r: 8, b: 28, l: 46 };
      const pw = w - m.l - m.r, ph = h - m.t - m.b;
      const max = niceMax(o.newGmv + o.renewalGmv);
      const Y = (v) => m.t + ph - (v / max) * ph;
      [0, 0.5, 1].forEach((f) => {
        el(svg, "line", { x1: m.l, x2: w - m.r, y1: Y(max * f), y2: Y(max * f), class: f === 0 ? "axis" : "gridline" });
        el(svg, "text", { x: m.l - 6, y: Y(max * f) + 3, "text-anchor": "end" }, jt(max * f));
      });
      const bw = pw / 3.6, gap = (pw - bw * 3) / 2;
      const xFor = (i) => m.l + i * (bw + gap);
      const b1 = el(svg, "rect", { x: xFor(0), y: Y(o.newGmv), width: bw, height: Y(0) - Y(o.newGmv), fill: "var(--chart-1)", class: "mark" });
      tip(b1, "New business\n" + jt(o.newGmv));
      const b2 = el(svg, "rect", { x: xFor(1), y: Y(o.newGmv + o.renewalGmv), width: bw, height: Y(o.newGmv) - Y(o.newGmv + o.renewalGmv), fill: "var(--chart-2)", class: "mark" });
      tip(b2, "Renewal\n" + jt(o.renewalGmv));
      const b3 = el(svg, "rect", { x: xFor(2), y: Y(o.newGmv + o.renewalGmv), width: bw, height: Y(0) - Y(o.newGmv + o.renewalGmv), fill: "var(--ink)", class: "mark", opacity: 0.86 });
      tip(b3, "Total GMV\n" + jt(o.newGmv + o.renewalGmv));
      [["New", o.newGmv], ["Renewal", o.renewalGmv], ["Total", o.newGmv + o.renewalGmv]].forEach(([lb, v], i) => {
        const y = i === 2 ? Y(v) - 6 : Y(i === 0 ? v : o.newGmv + v) - 6;
        el(svg, "text", { x: xFor(i) + bw / 2, y: Math.max(11, y), "text-anchor": "middle", class: "val-strong" }, jt(v));
        el(svg, "text", { x: xFor(i) + bw / 2, y: h - 8, "text-anchor": "middle", class: "lab" }, lb);
      });
    });
  }

  /** Funnel horizontal: reach + step + cumulative (label angka selalu di luar bar). */
  function funnel(mount, o) {
    /* jaga urutan walau metrik mengembalikan baris tak berurut */
    const rs = o.rows.slice().sort((a, b) => b.reach - a.reach);
    const rowH = o.rowH || 34;
    const top = 16;
    chart(mount, rs.length * rowH + top + 6, (svg, w, h) => {
      const labelW = 146;          /* nama stage */
      const numW = 52;             /* angka reach */
      const stepW = 60;            /* konversi per langkah */
      const cumW = 74;             /* kumulatif */
      const plotW = Math.max(40, w - labelW - numW - stepW - cumW);
      const max = rs[0].reach || 1;
      const anchorR = (x) => ({ x: x, "text-anchor": "end" });
      const head = { class: "lab", opacity: 0.75 };

      /* kepala kolom */
      el(svg, "text", Object.assign({ x: labelW, y: 8 }, head), "reach");
      el(svg, "text", Object.assign(anchorR(labelW + plotW + numW - 6), { y: 8 }, head), "leads");
      el(svg, "text", Object.assign(anchorR(labelW + plotW + numW + stepW - 6), { y: 8 }, head), "step");
      el(svg, "text", Object.assign(anchorR(w), { y: 8 }, head), "cumulative");

      rs.forEach((r, i) => {
        const y = top + i * rowH;
        const step = r.step_conv != null ? r.step_conv : r.step;
        const cum = r.cum_conv != null ? r.cum_conv : r.cum;
        el(svg, "text", { x: 0, y: y + rowH / 2 + 2, class: "lab" }, stageShort(o.label(r)));

        const bw = Math.max(2, (r.reach / max) * plotW);
        const rect = el(svg, "rect", {
          x: labelW, y: y + 3, width: bw, height: rowH - 16,
          fill: i === rs.length - 1 ? "var(--accent-deep)" : "var(--accent)", class: "mark",
        });
        tip(rect, String(o.label(r)).replace(/_/g, " ") + "\n" + num(r.reach) + " leads");

        /* angka reach: selalu di luar bar, tinta penuh -> tidak pernah hilang di bar gelap */
        el(svg, "text", Object.assign(
          anchorR(labelW + plotW + numW - 6), { y: y + rowH / 2 + 2, class: "val-strong" }), num(r.reach));
        el(svg, "text", Object.assign(
          anchorR(labelW + plotW + numW + stepW - 6), { y: y + rowH / 2 + 2, class: "val" }),
          step == null ? "—" : pct(step, 1));
        el(svg, "text", Object.assign(
          anchorR(w), { y: y + rowH / 2 + 2, class: "val" }), pct(cum, 1));
      });
    });
  }

  /** Heatmap stage × kohort bulan. */
  function heat(mount, o) {
    const xs = o.xs, ys = o.ys;
    const cw = Math.max(16, Math.min(34, 640 / xs.length));
    const rowH = o.rowH || 26;
    const labelW = o.labelW || 168;
    chart(mount, ys.length * rowH + 34, (svg, w, h) => {
      const pw = Math.min(w - labelW - 4, xs.length * cw);
      const cellW = pw / xs.length;
      ys.forEach((s, j) => {
        el(svg, "text", { x: 0, y: j * rowH + 20, class: "lab", opacity: 0.85 }, stageShort(s));
        xs.forEach((x, i) => {
          const cell = o.get(x, s);
          const x0 = labelW + i * cellW;
          const y0 = j * rowH + 6;
          if (!cell || cell.n === 0) {
            el(svg, "rect", { x: x0, y: y0, width: Math.max(1, cellW - 2), height: rowH - 8, fill: "var(--paper-sunk)" });
            return;
          }
          let color = cell.mature ? (o.color ? o.color(cell.value) : "var(--accent)") : "var(--paper-sunk)";
          const rect = el(svg, "rect", {
            x: x0, y: y0, width: Math.max(1, cellW - 2), height: rowH - 8,
            fill: color, class: "mark",
            "fill-opacity": cell.mature ? (0.08 + 0.85 * Math.max(0, Math.min(1, cell.value))) : null,
            stroke: cell.mature ? null : "var(--rule)",
            "stroke-dasharray": cell.mature ? null : "2 2",
          });
          if (!cell.mature)
            el(svg, "text", { x: x0 + cellW / 2 - 1, y: y0 + rowH / 2 + 1, "text-anchor": "middle", fill: "var(--ink-3)" }, "·");
          tip(rect, o.xLabel(x) + " · " + stageShort(s) + "\n" + pct(cell.value, 1) +
            " (" + num(cell.from) + " → " + num(cell.to) + ")" + (cell.mature ? "" : "\nbelum matang (<6 minggu)"));
        });
      });
      const step = Math.max(1, Math.ceil(xs.length / 8));
      xs.forEach((x, i) => {
        if (i % step) return;
        el(svg, "text", { x: labelW + i * cellW + cellW / 2, y: h - 6, "text-anchor": "middle" }, o.xLabel(x, true));
      });
    });
  }

  /** Box plot dari statistik metrik (p25, median, p75, maks). */
  function boxplot(mount, o) {
    chart(mount, 130, (svg, w, h) => {
      const m = { t: 34, r: 18, b: 44, l: 18 };
      const x0 = m.l, x1 = w - m.r, y = m.t + 16;
      const lo = Math.max(0, o.p25 - 8), hi = o.max + 2;
      const X = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
      const mid = (o.p25 + o.p75) / 2;
      el(svg, "line", { x1: X(lo), x2: X(hi), y1: y, y2: y, class: "gridline" });
      el(svg, "line", { x1: X(o.p25), x2: X(o.max), y1: y, y2: y, stroke: "var(--rule)" });
      el(svg, "rect", {
        x: X(o.p25), y: y - 13, width: Math.max(2, X(o.p75) - X(o.p25)), height: 26,
        fill: "var(--accent)", opacity: 0.14, stroke: "var(--accent)", class: "mark",
      });
      tip(el(svg, "line", { x1: X(o.p25), x2: X(o.p25), y1: y - 9, y2: y + 9, stroke: "var(--accent)" }), "p25 " + days(o.p25));
      tip(el(svg, "line", { x1: X(o.p75), x2: X(o.p75), y1: y - 9, y2: y + 9, stroke: "var(--accent)" }), "p75 " + days(o.p75));
      el(svg, "line", { x1: X(o.max), x2: X(o.max), y1: y - 7, y2: y + 7, stroke: "var(--rule)" });
      el(svg, "line", { x1: X(o.median), x2: X(o.median), y1: y - 18, y2: y + 18, stroke: "var(--accent)", "stroke-width": 2 });
      el(svg, "text", { x: X(o.median), y: y - 26, "text-anchor": "middle", class: "val-strong" }, "median " + days(o.median));
      el(svg, "text", { x: X(mid), y: y + 34, "text-anchor": "middle" }, "p25 " + days(o.p25) + " · p75 " + days(o.p75));
      el(svg, "text", { x: X(o.max), y: y + 34, "text-anchor": "end" }, "maks " + days(o.max));
      el(svg, "text", { x: x0, y: y + 34 }, "rentang " + days(lo) + "–" + days(hi));
      el(svg, "text", { x: x0, y: 12 }, o.note || "");
    });
  }

  /* ----------------------------- komponen -------------------------------- */
  const chip = (t, cls) => '<span class="tag ' + (cls || "") + '">' + esc(t) + "</span>";
  const scopeChip = (t, on) => '<span class="scope-chip ' + (on ? "on" : "") + '">' + esc(t) + "</span>";

  function kpiHTML(o) {
    return (
      '<div class="kpi' + (o.locked ? " is-locked" : "") + '">' +
      '<div class="klab"><span class="name">' + esc(o.name) + "</span>" +
      (o.locked ? chip("all-time", "tag--lock") : "") + "</div>" +
      '<span class="kval">' + (o.prefix ? '<span class="u">' + esc(o.prefix) + "</span> " : "") + esc(o.value) +
      (o.unit ? '<span class="u"> ' + esc(o.unit) + "</span>" : "") + "</span>" +
      '<div class="kdelta">' + (o.delta || "") + "</div>" +
      '<div class="kfoot"><span class="m">' + esc(o.metric) + "</span>" + chip(o.jenis) + "</div></div>"
    );
  }

  function cardHTML(o) {
    return (
      '<section class="card">' +
      '<div class="chead"><span class="mref">' + esc(o.refs) + "</span>" +
      '<div class="chipset">' + (o.chips || []).map((c) => chip(c)).join("") + "</div></div>" +
      "<h3>" + esc(o.title) + "</h3>" +
      (o.sub ? '<p class="csub">' + o.sub + "</p>" : "") +
      (o.body || "") +
      (o.note ? '<p class="cnote">' + o.note + "</p>" : "") +
      "</section>"
    );
  }

  const mountDiv = (id, h) => '<div id="' + id + '" style="min-height:' + (h || 0) + 'px"></div>';
  const deltas = (cur, prev, kind) => {
    if (prev == null || cur == null) return '<span style="color:var(--ink-3)">tanpa pembanding</span>';
    if (kind === "pp") {
      const d = (cur - prev) * 100;
      return '<span class="' + (d >= 0 ? "up" : "down") + '">' + (d >= 0 ? "▲ " : "▼ ") + nf(Math.abs(d), 1) + " pp</span> vs tahun sebelumnya";
    }
    const d = prev === 0 ? null : cur / prev - 1;
    if (d == null) return "—";
    return '<span class="' + (d >= 0 ? "up" : "down") + '">' + signed(d, 1) + "</span> vs tahun sebelumnya";
  };
  const cutoffIndex = (rs) => rs.findIndex((r) => (r.month || "").startsWith("2022-12"));

  /** Tabel data generik (markup). */
  function htmlTable(cols, rs, opts) {
    opts = opts || {};
    const head = cols.map((c) => '<th class="' + (c.num ? "num" : "") + '">' + esc(c.label) + "</th>").join("");
    const body = rs.map((r) => {
      const focusRow = opts.focusKey && isFocus(opts.focusDim, opts.focusKey(r));
      const tds = cols.map((c) => {
        const v = c.value ? c.value(r) : r[c.key] != null ? r[c.key] : "";
        return '<td class="' + (c.num ? "num" : "") + '">' + (c.raw ? v : esc(v)) + "</td>";
      }).join("");
      return '<tr class="' + (focusRow ? "focusrow" : "") + '">' + tds + "</tr>";
    }).join("");
    return '<table class="data"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table>";
  }

  /* ============================== HALAMAN 1 ============================== */
  /* Disalin identik dari design/prototype/app.js (kontrak beku F4b). */
  function page1() {
    const a = agg(), p = prevAgg();
    const rr = renewalKpi();
    const all = agg("all");
    const arpaAll = (rows("revenue_kpis")[0] || {}).arpa;
    const tier = rows("price_tier_mix");
    const ind = rows("gmv_by_industry");
    const years = ["2021", "2022", "2023"].map((y) => ({ y: y, a: agg(y), r: renewalKpi(y) }));
    const kpis =
      kpiHTML({
        name: "GMV total", value: nf(a.gmv / 1e6, 1), prefix: "Rp", unit: "jt", metric: "revenue_kpis", jenis: "period",
        delta: a.gmv ? deltas(a.gmv, p && p.gmv) : "",
      }) +
      kpiHTML({
        name: "Kontrak", value: num(a.contracts), metric: "contracts_monthly", jenis: "period",
        delta: deltas(a.contracts, p && p.contracts),
      }) +
      kpiHTML({
        name: "Win rate", value: nf(a.winRate * 100, 1), unit: "%", metric: "win_rate_by_source", jenis: "dual",
        delta: p && p.winRate != null ? deltas(a.winRate, p.winRate, "pp") : "won ÷ registered periode ini",
      }) +
      kpiHTML({
        name: "Renewal rate", value: nf(rr.rate * 100, 1), unit: "%", metric: "renewal_by_cohort", jenis: "cohort",
        delta: '<span style="color:var(--ink-3)">' + esc(rr.label) + " · " + num(rr.renewed) + "/" + num(rr.leads) + " akun</span>",
      }) +
      kpiHTML({
        name: "ARPA", value: nf(arpaAll / 1e6, 1), prefix: "Rp", unit: "jt",
        metric: "revenue_kpis", jenis: "period", locked: !!p,
        delta: p ? '<span style="color:var(--ink-3)">tidak tersedia per tahun — metrik all-time</span>' : "GMV all-time ÷ akun berkontrak",
      });

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 1 · Executive overview</p>' +
      '<h1>Bagaimana kinerja penjualan kita, dan dari mana pertumbuhannya datang?</h1>' +
      '<p class="sub">Lima angka untuk membaca bisnis dalam &lt;60 detik, lalu buktinya: tren GMV new vs renewal, mix tier dan industri, serta ringkasan per tahun. ' +
      "Semua nilai dapat ditelusuri ke kode metrik di setiap kartu.</p></div>" +
      '<div class="annot"><b>Anotasi tetap</b><span>Aktivitas lead berhenti 30 Des 2022 → 2023 renewal-only. Angka rupiah dalam juta, persentase 1 desimal, tanggal UTC.</span></div>' +
      '<div class="kpistrip">' + kpis + "</div>" +
      '<div class="grid g3">' +
      cardHTML({
        id: "p1-trend", title: "Kapan pertumbuhan datang dari new business, kapan dari renewal?",
        refs: "metric: gmv_monthly · new vs renewal", chips: ["period", "stacked"],
        sub: "Batang = GMV per bulan kontrak; dua seri dipisah karena 2023 hanya berisi renewal.",
        body: mountDiv("p1-trend", 216) +
          '<div class="legend"><span><i style="background:var(--chart-1)"></i>New business</span><span><i style="background:var(--chart-2)"></i>Renewal</span><span><i style="background:var(--ink-3)"></i>Cutoff data</span></div>',
        note: "Klik tidak mengubah angka: nilai bulanan berasal langsung dari metrik, bukan hasil hitung ulang di browser.",
      }) +
      cardHTML({
        id: "p1-tier", title: "Tier mana yang menyumbang GMV?", refs: "metric: price_tier_mix", chips: ["all-time", "donut ≤5"],
        sub: "Porsi GMV all-time per subscription_type; harga efektif per seat ada di halaman 5.",
        body: mountDiv("p1-tier", 196) +
          '<div class="legend">' + tier.map((t, i) => '<span><i style="background:' + SERIES_COLORS[i % 5] + '"></i>' + esc(t.subscription_type) + " · " + pct(t.gmv / all.gmv, 1) + "</span>").join("") + "</div>",
      }) +
      "</div>" +
      '<div class="grid g23">' +
      cardHTML({
        id: "p1-industry", title: "Industri mana yang paling bernilai?", refs: "metric: gmv_by_dimension(dim='industry')", chips: ["period", "all-time"],
        sub: "GMV sepanjang data per industri; nilai ditulis di ujung bar, bukan hanya warna.",
        body: mountDiv("p1-industry", 180),
        note: "Irisan industri bersifat all-time — metrik gmv_by_dimension belum menerima filter periode.",
      }) +
      cardHTML({
        id: "p1-years", title: "Apa yang berubah antar tahun?", refs: "metrics: gmv_monthly · contracts_monthly · win_rate_by_source", chips: ["period"],
        sub: "Ringkasan yang bisa diuji ulang: GMV, kontrak, win rate, dan ukuran deal rata-rata.",
        body: htmlTable(
          [
            { label: "Tahun", key: "y" },
            { label: "GMV", num: true, value: (r) => jt(r.a.gmv) },
            { label: "Kontrak", num: true, value: (r) => num(r.a.contracts) },
            { label: "Win rate", num: true, value: (r) => pct(r.a.winRate, 1) },
            { label: "Deal rata-rata", num: true, value: (r) => jt(r.a.contracts ? r.a.gmv / r.a.contracts : null) },
          ],
          years,
        ),
        note: "2023: hanya renewal, tanpa leads baru — win rate 2023 tidak bermakna bisnis baru.",
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: semua chart & KPI kecuali ARPA", true) + scopeChip("fokus irisan: menyorot tier/industri", true) + scopeChip("fokus source: tidak berlaku di halaman ini", false) + "</div>" +
      '<footer class="pagefoot"><span>Sumber: package metrics/ (F4) — ' + num(META.catalog_used) + "/" + num(META.catalog_size) + ' metrik katalog dipakai.</span><span>F5 · implementasi · data cutoff ' + esc(META.data_cutoff) + "</span></footer>";

    return {
      html: html,
      draws: {
        "p1-trend": (m) => {
          const rs = pick("gmv_monthly");
          stackedBars(m, {
            rows: rs, series: [
              { key: "new_gmv", label: "New business", color: "var(--chart-1)" },
              { key: "renewal_gmv", label: "Renewal", color: "var(--chart-2)" },
            ],
            yFmt: (v) => nf(v / 1e6, 0), label: (r) => mlabel(r.month), xLabel: (r) => mlabel(r.month),
            cutoffIndex: cutoffIndex(rs), cutoffLabel: "cutoff", height: 236,
          });
        },
        "p1-tier": (m) => donut(m, {
          rows: tier, value: (r) => r.gmv, label: (r) => r.subscription_type,
          fmt: (v) => jt(v), centerTop: jt(all.gmv), centerSub: "GMV all-time",
          dimWhen: (r) => focusActive("subscription_type") && !isFocus("subscription_type", r.subscription_type),
        }),
        "p1-industry": (m) => hbar(m, {
          rows: ind.slice().sort((x, y) => y.gmv - x.gmv), label: (r) => r.industry, value: (r) => r.gmv,
          fmt: (v) => jt(v), max: Math.max.apply(null, ind.map((r) => r.gmv)), rowH: 24, labelW: 150, valW: 96,
          extra: (r) => num(r.contracts) + " kontrak",
          dimWhen: (r) => focusActive("industry") && !isFocus("industry", r.industry),
        }),
      },
    };
  }

  /* ============================== HALAMAN 2 ==============================
     Disalin identik dari design/prototype/app.js (kontrak beku F4b);
     hanya label fase di footer yang disesuaikan (F5 · implementasi). */
  function page2() {
    const a = agg();
    const reach = rows("stage_reach");
    const conv = rows("step_conversion");
    const ttd = rows("time_to_deal")[0];
    const stuck = rows("stuck_per_stage")[0] || {};
    const open = rows("open_pipeline")[0] || {};
    const staleCut = rows("stale_open_pipeline")[0] || {};
    const ab = rows("abandoned_at_entry_rate");
    const abOverall = ab.find((r) => !r.month) || {};
    const abMonthly = ab.filter((r) => r.month && inYear(r));
    const stale = pick("stale_series", "period_end");
    const wr = rows("win_rate_by_source");
    const srcSum = byKey(wr, (r) => r.source);
    const leadsSrc = rows("leads_by_source");
    const gmvSrc = rows("gmv_by_source");
    const srcRows = leadsSrc.map((l) => {
      const rs = srcSum[l.source] || [];
      const won = sum(rs, (r) => r.won), reg = sum(rs, (r) => r.registered);
      const g = gmvSrc.find((x) => x.source === l.source) || {};
      return { source: l.source, leads: l.leads, won: won, reg: reg, rate: reg ? won / reg : null, gmv: g.gmv };
    }).sort((x, y) => y.gmv - x.gmv);

    const smc = rows("stage_month_conversion");
    const stages = reach.map((r) => r.stage_name);
    const key = (m, s) => m + "|" + s;
    const cellMap = {};
    smc.forEach((r) => {
      if (state.year !== "all" && !(r.cohort_month || "").startsWith(state.year)) return;
      const k = key(r.cohort_month, r.from_stage);
      const c = cellMap[k] || (cellMap[k] = { from: 0, to: 0, mature: true });
      c.from += r.reached_from; c.to += r.reached_to; c.mature = c.mature && !!r.mature;
    });
    const cohorts = Array.from(new Set(smc.map((r) => r.cohort_month))).filter((m) => state.year === "all" || m.startsWith(state.year)).sort();

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 2 · Funnel &amp; conversion</p>' +
      '<h1>Di mana pipeline bocor, dan kenapa?</h1>' +
      '<p class="sub">Funnel delapan stage dengan konversi antar-step dan kumulatif berdampingan; alasan berhenti, kecepatan deal, dan pipeline yang menggantung di akhir data.</p></div>' +
      '<div class="kpistrip">' +
      kpiHTML({ name: "Leads", value: num(a.registered), metric: "leads_registered", jenis: "period", delta: "terdaftar pada periode terpilih" }) +
      kpiHTML({ name: "Deal won", value: num(a.won), metric: "stage_reach", jenis: "cohort", delta: "leads dengan event deal_won" }) +
      kpiHTML({ name: "Win rate", value: nf(a.winRate * 100, 1), unit: "%", metric: "win_rate_by_source", jenis: "dual", delta: "won ÷ registered periode" }) +
      kpiHTML({ name: "Median time-to-deal", value: num(Math.round(ttd.median_days)), unit: "hari", metric: "time_to_deal", jenis: "period", locked: true, delta: "p25–p75 " + num(Math.round(ttd.p25)) + "–" + num(Math.round(ttd.p75)) + " hari · n " + num(ttd.n_won) }) +
      kpiHTML({ name: "Open pipeline", value: num(open.open_leads), metric: "open_pipeline", jenis: "snapshot", locked: true, delta: "idle &gt;30d " + num(staleCut.idle_gt_30d) + " · &gt;90d " + num(staleCut.idle_gt_90d) }) +
      "</div>" +
      '<div class="grid g3">' +
      cardHTML({
        id: "p2-funnel", title: "Berapa yang sampai tiap stage, dan berapa yang hilang per langkah?", refs: "metrics: step_conversion · stage_reach", chips: ["cohort", "all-time"],
        sub: "Urutan memakai stage_id, bukan nama. Angka di dalam batang = leads; kanan = step % dan cumulative %.",
        body: mountDiv("p2-funnel", 280),
        note: "reached(S) = distinct leads yang pernah mencapai S. Funnel all-time; filter periode tidak dipecah per stage.",
      }) +
      cardHTML({
        id: "p2-stale", title: "Berapa pipeline yang menggantung, dan sejak kapan?", refs: "metric: stale_open_pipeline_series", chips: ["snapshot", "quarterly"],
        sub: "Lead tidak-won yang idle lebih dari 30 dan 90 hari penuh, dihitung di akhir tiap kuartal.",
        body: mountDiv("p2-stale", 240),
        note: "Snapshot retrospektif: nilai kuartal lama memakai pengetahuan penuh. Deret berhenti di Q4 2022 karena aktivitas berhenti.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p2-reason", title: "Kenapa mereka berhenti di stage itu?", refs: "metric: dropoff_reason_mix", chips: ["cohort"],
        sub: "Alasan hanya tercatat pada lead yang gagal — 506 lead berhenti tanpa alasan (lihat catatan).",
        body: htmlTable([
          { label: "Stage terakhir", key: "stage_name" },
          { label: "Alasan", key: "reason" },
          { label: "Leads", num: true, value: (r) => num(r.n) },
          { label: "Porsi stage", num: true, value: (r) => pct(r.share, 1) },
        ], rows("dropoff_reason_mix"), { focusDim: null }),
        note: "Stuck tanpa alasan: " + num(stuck.stuck) + " lead (semuanya di " + esc(String(stuck.stage_name || "—").replace(/_/g, " ")) + "). Abandoned-at-entry overall " + pct(abOverall.rate, 1) + " dari " + num(abOverall.leads) + " lead; tren bulanan ada di kartu bawah.",
      }) +
      cardHTML({
        id: "p2-ttd", title: "Berapa lama dari daftar sampai menang?", refs: "metric: time_to_deal", chips: ["period", "lock"],
        sub: "Kotak = p25–p75, garis aksen = median, titik kanan = maksimum. Bukan rata-rata yang menyesatkan.",
        body: mountDiv("p2-ttd", 108) +
          '<p class="csub" style="margin-top:var(--s4)">Rata-rata ' + nf(ttd.mean_days, 1) + " hari — dipakai hanya sebagai pembanding median.</p>",
        note: "Metrik all-time: time_to_deal tidak menerima parameter periode, jadi tidak ikut filter tahun.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p2-heat", title: "Kohort mana yang konversinya lemah — dan mana yang belum matang?", refs: "metric: stage_month_conversion", chips: ["cohort", "heatmap"],
        sub: "Konversi antar-stage per bulan registrasi. Sel bergaris putus = kohort belum matang (&lt;6 minggu sebelum cutoff).",
        body: mountDiv("p2-heat", 260),
        note: "Warna lebih pekat = konversi lebih tinggi. Kohort akhir 2022 belum matang; jangan dibaca sebagai penurunan.",
      }) +
      cardHTML({
        id: "p2-src", title: "Source mana yang benar-benar menghasilkan deal?", refs: "metrics: leads_by_dimension · win_rate_by_source · gmv_by_dimension", chips: ["dual"],
        sub: "Win rate memakai atribusi kohort registrasi; porsi GMV memakai semua kontrak source tersebut.",
        body: htmlTable([
          { label: "Source", value: (r) => srcLabel(r.source) }, { label: "Leads", num: true, value: (r) => num(r.leads) },
          { label: "Won", num: true, value: (r) => num(r.won) },
          { label: "Win rate", num: true, raw: true, value: (r) => (r.reg < 30 ? "n kecil" : pct(r.rate, 1)) },
          { label: "Porsi GMV", num: true, value: (r) => pct(r.gmv / sum(srcRows, (x) => x.gmv), 1) },
        ], srcRows, { focusDim: "source", focusKey: (r) => r.source }),
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p2-abandon", title: "Apakah kualitas masuknya lead membaik?", refs: "metric: abandoned_at_entry_rate", chips: ["cohort"],
        sub: "Porsi lead terdaftar yang tidak pernah qualified dan tanpa alasan — indikator top-of-funnel.",
        body: mountDiv("p2-abandon", 150),
        note: "Overall " + pct(abOverall.rate, 1) + " (" + num(abOverall.abandoned) + " dari " + num(abOverall.leads) + " lead). Nilai bulanan dihitung per kohort registrasi.",
      }) +
      cardHTML({
        id: "p2-leads", title: "Bagaimana volume lead bergerak sebelum aktivitas berhenti?", refs: "metric: leads_registered", chips: ["period"],
        sub: "Leads terdaftar per bulan — konteks untuk membaca win rate dan stale pipeline.",
        body: mountDiv("p2-leads", 150),
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: leads, win rate, heatmap, stale", true) + scopeChip("funnel & time-to-deal: all-time", false) + scopeChip("fokus source: menyorot baris tabel", true) + "</div>" +
      '<footer class="pagefoot"><span>Sumber: metrics/ F4 · funnel &amp; pipeline</span><span>F5 · implementasi</span></footer>';

    return {
      html: html,
      draws: {
        "p2-funnel": (m) => funnel(m, { rows: conv, label: (r) => r.stage_name }),
        "p2-stale": (m) => lineChart(m, {
          rows: stale,
          series: [
            { key: "idle_gt_30d", label: "idle >30 hari", color: "var(--chart-3)" },
            { key: "idle_gt_90d", label: "idle >90 hari", color: "var(--chart-1)" },
          ],
          yFmt: (v) => num(v), xLabel: (r) => qlabel(r.period_end), height: 210,
        }),
        "p2-ttd": (m) => boxplot(m, { p25: ttd.p25, median: ttd.median_days, p75: ttd.p75, max: ttd.max_days, note: "n " + num(ttd.n_won) + " deal" }),
        "p2-heat": (m) => heat(m, {
          xs: cohorts, ys: stages, rowH: 24, labelW: 178,
          xLabel: (x, short) => (short ? mon(x) : mlabel(x)),
          get: (x, s) => { const c = cellMap[key(x, s)]; return c && c.from ? { value: c.to / c.from, from: c.from, to: c.to, mature: c.mature, n: c.from } : null; },
        }),
        "p2-abandon": (m) => lineChart(m, {
          rows: abMonthly, series: [{ key: "rate", label: "abandoned-at-entry", color: "var(--chart-3)" }],
          yFmt: (v) => pct(v, 0), xLabel: (r) => mlabel(r.month), height: 150, minMax: 0.3,
        }),
        "p2-leads": (m) => lineChart(m, {
          rows: pick("leads_registered"), series: [{ key: "leads", label: "Leads", color: "var(--chart-2)" }],
          yFmt: (v) => num(v), xLabel: (r) => mlabel(r.month), height: 150,
        }),
      },
    };
  }

  /* ============================== HALAMAN 3 ==============================
     Disalin identik dari design/prototype/app.js (kontrak beku F4b);
     hanya label fase di footer yang disesuaikan (F5 · implementasi). */
  function page3() {
    const a = agg();
    const pv = pick("pageviews");
    const totals = byKey(pv, (r) => r.page_name);
    const pageTot = Object.keys(totals).map((p) => ({ page: p, views: sum(totals[p], (r) => r.pageviews) })).sort((x, y) => y.views - x.views);
    const topPages = pageTot.slice(0, 5);
    const months = Array.from(new Set(pv.map((r) => r.month))).sort();
    const lineRows = months.map((m) => {
      const o = { month: m };
      topPages.forEach((p) => (o[p.page] = sum(pv.filter((r) => r.month === m && r.page_name === p.page), (r) => r.pageviews)));
      return o;
    });
    const ff = rows("form_funnel");
    const ft = rows("first_touch_page");
    const best = ft.slice().sort((x, y) => y.win_rate - x.win_rate)[0] || {};
    const depth = rows("engagement_depth");
    const wonMix = rows("won_vs_notwon_page_mix");
    const cov = rows("visit_to_lead_rate")[0] || {};
    const ppl = rows("pages_per_lead")[0] || {};
    const totalViews = sum(pv, (r) => r.pageviews);

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 4 · Marketing — web engagement</p>' +
      '<h1>Bagaimana prospek menjelajahi situs sebelum jadi lead — dan halaman apa yang menemani deal menang?</h1>' +
      '<p class="sub">100% lead punya pageview sebelum registrasi, jadi web adalah top-of-funnel sesungguhnya. Halaman ini membaca intent dari halaman, bukan dari atribusi klik.</p></div>' +
      '<div class="kpistrip">' +
      kpiHTML({ name: "Pageviews", value: num(totalViews), metric: "pageviews", jenis: "period", delta: num(months.length) + " bulan · " + num(pageTot.length) + " halaman" }) +
      kpiHTML({ name: "Leads", value: num(a.registered), metric: "leads_registered", jenis: "period", delta: "terdaftar pada periode terpilih" }) +
      kpiHTML({ name: "Form terkuat", value: nf((ff[0] || {}).share * 100, 1), unit: "%", metric: "form_funnel", jenis: "period", delta: pretty((ff[0] || {}).page_name) + " dari " + num((ff[0] || {}).leads) + " lead" }) +
      kpiHTML({ name: "First-touch terbaik", value: nf(best.win_rate * 100, 1), unit: "%", metric: "first_touch_page", jenis: "cohort", delta: pretty(best.first_page) + " · " + num(best.leads) + " lead" }) +
      kpiHTML({ name: "Cakupan pageview", value: nf(cov.coverage * 100, 1), unit: "%", metric: "visit_to_lead_rate", jenis: "snapshot", locked: true, delta: "coverage GA, bukan konversi" }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p3-ft", title: "Halaman pertama mana yang paling sering berujung menang?", refs: "metric: first_touch_page", chips: ["cohort"],
        sub: "Win rate lead yang first-touch-nya halaman tersebut; jumlah lead ditulis sebagai konteks.",
        body: mountDiv("p3-ft", 210),
        note: "First-touch = pageview paling awal per lead. Slice &lt;30 lead tidak diberi kesimpulan.",
      }) +
      cardHTML({
        id: "p3-depth", title: "Apakah makin banyak halaman dilihat makin besar peluang menang?", refs: "metric: engagement_depth", chips: ["cohort"],
        sub: "Batang = jumlah lead per bucket pageview pra-registrasi; angka di atas batang = win rate bucket.",
        body: mountDiv("p3-depth", 200),
        note: "Hubungannya tidak monoton: depth tinggi tidak otomatis win rate tinggi — ini insight, bukan bug data.",
      }) +
      "</div>" +
      cardHTML({
        id: "p3-traffic", title: "Halaman mana yang naik, mana yang mati?", refs: "metric: pageviews (month × page)", chips: ["period"],
        sub: "Lima halaman dengan pageview terbanyak pada periode terpilih; skala sama agar bisa dibandingkan.",
        body: mountDiv("p3-traffic", 220) +
          '<div class="legend">' + topPages.map((p, i) => '<span><i style="background:' + SERIES_COLORS[i % 5] + '"></i>' + esc(pretty(p.page)) + " · " + num(p.views) + "</span>").join("") + "</div>",
        note: "Sembilan halaman tersedia; lima teratas dipilih otomatis dari total pageview periode.",
      }) +
      '<div class="grid g2">' +
      cardHTML({
        id: "p3-form", title: "Form mana yang benar-benar dipakai?", refs: "metric: form_funnel", chips: ["period"],
        sub: "Distinct lead yang mengunjungi halaman /form/* ÷ seluruh lead — proxy intent, bukan konversi.",
        body: mountDiv("p3-form", 130),
      }) +
      cardHTML({
        id: "p3-wonmix", title: "Halaman mana yang lebih sering muncul pada lead yang menang?", refs: "metric: won_vs_notwon_page_mix", chips: ["cohort"],
        sub: "Rata-rata status won pada pageview tiap halaman. Bukan sebab-akibat — hanya sinyal konten.",
        body: mountDiv("p3-wonmix", 250),
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: pageviews, leads, tren halaman", true) + scopeChip("first-touch & kedalaman: all-time", false) + scopeChip("fokus source: tidak tersedia (GA tanpa source per pageview)", false) + "</div>" +
      '<footer class="pagefoot"><span>Pages per lead rata-rata ' + nf(ppl.pages_per_lead, 1) + " (all-time, " + num(ppl.leads) + " lead)</span><span>F5 · implementasi</span></footer>";

    return {
      html: html,
      draws: {
        "p3-ft": (m) => hbar(m, {
          rows: ft.slice().sort((x, y) => y.win_rate - x.win_rate), label: (r) => pretty(r.first_page),
          value: (r) => r.win_rate, fmt: (v) => pct(v, 1), rowH: 24, labelW: 150, valW: 60,
          extra: (r) => num(r.leads) + " lead",
        }),
        "p3-depth": (m) => colBars(m, {
          rows: depth, value: (r) => r.leads, label: (r) => r.depth_bucket + " halaman",
          yFmt: (v) => num(v), fmt: (v) => num(v), height: 200,
          sub: (r) => pct(r.win_rate, 1) + " win",
        }),
        "p3-traffic": (m) => lineChart(m, {
          rows: lineRows, series: topPages.map((p, i) => ({ key: p.page, label: pretty(p.page), color: SERIES_COLORS[i % 5] })),
          yFmt: (v) => num(v), xLabel: (r) => mlabel(r.month), height: 220,
        }),
        "p3-form": (m) => hbar(m, {
          rows: ff, label: (r) => pretty(r.page_name), value: (r) => r.share, fmt: (v) => pct(v, 1),
          rowH: 25, labelW: 140, valW: 54, extra: (r) => num(r.leads) + " lead",
        }),
        "p3-wonmix": (m) => hbar(m, {
          rows: wonMix.slice().sort((x, y) => y.won_share - x.won_share), label: (r) => pretty(r.page_name),
          value: (r) => r.won_share, fmt: (v) => pct(v, 1), rowH: 24, labelW: 150, valW: 58,
          extra: (r) => num(r.pageviews) + " pageview", color: () => "var(--chart-2)",
        }),
      },
    };
  }

  /* ===================== HALAMAN 4 & 5 (F5-3) ============================ */
  /* Disalin identik dari design/prototype/app.js (kontrak beku F4b);
     hanya label fase di footer yang disesuaikan (F5 · implementasi).
     Halaman 6 masih stub, menyusul di sesi F5-4. */
  /* ============================== HALAMAN 4 ============================== */
  function page4() {
    const spend = pick("spend_by_channel_month");
    const channels = SOURCE_ORDER.filter((s) => spend.some((r) => r.source === s));
    const cplAll = pick("cpl").filter((r) => r.source === "(all)");
    const totalSpend = sum(spend, (r) => r.spend);
    const totalLeads = sum(cplAll, (r) => r.leads);
    const avgCpl = totalLeads ? totalSpend / totalLeads : null;
    const wr = pick("win_rate_by_source");
    const wrAll = rows("win_rate_by_source");
    const perSrc = (rs) => {
      const out = {};
      SOURCE_ORDER.forEach((s) => {
        const x = rs.filter((r) => r.source === s);
        const reg = sum(x, (r) => r.registered), won = sum(x, (r) => r.won);
        out[s] = { source: s, reg: reg, won: won, rate: reg ? won / reg : null };
      });
      return out;
    };
    const cur = perSrc(wr), all = perSrc(wrAll);
    const ranked = SOURCE_ORDER.map((s) => cur[s]).filter((x) => x.reg >= 30).sort((x, y) => y.rate - x.rate);
    const best = ranked[0] || {}, worst = ranked[ranked.length - 1] || {};
    const cac = pick("cac_proxy", "quarter");
    const cacRows = SOURCE_ORDER.map((s) => {
      const x = cac.filter((r) => r.source === s);
      const sp = sum(x, (r) => r.spend), dw = sum(x, (r) => r.deals_won);
      return { source: s, spend: sp, deals: dw, cac: dw ? sp / dw : null };
    }).filter((r) => r.deals > 0);
    const leadsSrc = rows("leads_by_source");
    const gmvSrc = rows("gmv_by_source");
    const bubbleRows = leadsSrc.map((l) => ({
      source: l.source, leads: l.leads, rate: all[l.source].rate,
      gmv: (gmvSrc.find((g) => g.source === l.source) || {}).gmv || 0,
    }));
    const ind = rows("leads_by_industry");
    const months = Array.from(new Set(wr.map((r) => r.month))).filter((m) => state.year === "all" || m.startsWith(state.year)).sort();
    const spendMonths = Array.from(new Set(spend.map((r) => r.month))).sort();
    const spendRows = spendMonths.map((m) => {
      const o = { month: m };
      channels.forEach((s) => (o["c_" + s] = sum(spend.filter((r) => r.month === m && r.source === s), (r) => r.spend)));
      return o;
    });
    const leadLines = months.map((m) => {
      const o = { month: m };
      SOURCE_ORDER.forEach((s) => (o[s] = sum(wr.filter((r) => r.month === m && r.source === s), (r) => r.registered)));
      return o;
    });

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 4 · Marketing — acquisition &amp; channel efficiency</p>' +
      '<h1>Channel mana yang paling produktif — dan berapa biayanya?</h1>' +
      '<p class="sub">Volume, kualitas, dan biaya dibaca bersamaan. CAC selalu berlabel proxy karena atribusi memakai bulan deal, bukan bulan klik.</p></div>' +
      '<div class="kpistrip">' +
      kpiHTML({ name: "Total spend", value: nf(totalSpend / 1e6, 1), prefix: "Rp", unit: "jt", metric: "spend_by_channel_month", jenis: "period", delta: num(spendMonths.length) + " bulan spend · " + num(channels.length) + " channel" }) +
      kpiHTML({ name: "Avg CPL", value: nf((avgCpl || 0) / 1e3, 0), prefix: "Rp", unit: "rb", metric: "cpl", jenis: "period", delta: num(totalLeads) + " lead dari semua channel" }) +
      kpiHTML({ name: "Channel terbaik", value: nf((best.rate || 0) * 100, 1), unit: "%", metric: "win_rate_by_source", jenis: "dual", delta: esc(srcLabel(best.source) || "—") + " · " + num(best.won) + "/" + num(best.reg) }) +
      kpiHTML({ name: "Channel terlemah", value: nf((worst.rate || 0) * 100, 1), unit: "%", metric: "win_rate_by_source", jenis: "dual", delta: esc(srcLabel(worst.source) || "—") + " · " + num(worst.won) + "/" + num(worst.reg) }) +
      kpiHTML({ name: "CAC proxy", value: nf((sum(cacRows, (r) => r.spend) / Math.max(1, sum(cacRows, (r) => r.deals))) / 1e3, 0), prefix: "Rp", unit: "rb", metric: "cac_proxy", jenis: "period", locked: true, delta: "spend ÷ deal won, kuartal" }) +
      "</div>" +
      '<div class="grid g3">' +
      cardHTML({
        id: "p4-bubble", title: "Channel mana yang banyak lead-nya dan juga banyak menang?", refs: "metrics: leads_by_dimension · win_rate_by_source · gmv_by_dimension", chips: ["dual", "all-time"],
        sub: "X = leads, Y = win rate, ukuran gelembung = GMV. Garis putus = rata-rata; kuadran kanan-atas = volume + kualitas.",
        body: mountDiv("p4-bubble", 260),
        note: "Angka all-time per channel: metrik per-source tidak menerima filter periode untuk irisan ini.",
      }) +
      cardHTML({
        id: "p4-spend", title: "Spend naik — apakah CPL ikut turun?", refs: "metrics: spend_by_channel_month · cpl", chips: ["period"],
        sub: "Batang bertumpuk = spend per channel per bulan (Rp jt).",
        body: mountDiv("p4-spend", 200) +
          '<div class="legend">' + channels.map((s) => '<span><i style="background:' + srcColor(s) + '"></i>' + esc(srcLabel(s)) + "</span>").join("") + "</div>",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p4-cpl", title: "Kapan biaya per lead memuncak?", refs: "metric: cpl (source = all)", chips: ["period"],
        sub: "CPL agregat bulanan = total spend ÷ total lead bulan itu.",
        body: mountDiv("p4-cpl", 170),
        note: "CPL bulanan berisik pada slice kecil; kesimpulan channel memakai agregat periode/kuartal.",
      }) +
      cardHTML({
        id: "p4-cac", title: "Berapa biaya untuk satu deal menang per channel?", refs: "metric: cac_proxy", chips: ["proxy", "quarterly"],
        sub: "Spend ÷ deal won pada periode terpilih (kuartal dijumlahkan). Label proxy wajib.",
        body: mountDiv("p4-cac", 150),
        note: "Proxy: won diatribusikan ke bulan deal, bukan bulan klik. Angka tidak boleh dibaca sebagai CAC akuntansi.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p4-industry", title: "Industri mana yang banyak lead tapi sedikit menang?", refs: "metric: leads_by_dimension(dim='industry')", chips: ["all-time"],
        sub: "Batang = jumlah lead; angka di bawah = win rate industri tersebut.",
        body: mountDiv("p4-industry", 190),
      }) +
      cardHTML({
        id: "p4-leads", title: "Channel mana yang volume-nya mengering?", refs: "metric: win_rate_by_source (registered per bulan)", chips: ["period"],
        sub: "Lead terdaftar per channel per bulan — sebelum aktivitas berhenti Des 2022.",
        body: mountDiv("p4-leads", 190) +
          '<div class="legend">' + channels.map((s) => '<span><i style="background:' + srcColor(s) + '"></i>' + esc(srcLabel(s)) + "</span>").join("") + "</div>",
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: spend, CPL, CAC, tren lead", true) + scopeChip("fokus source: menyorot bubble & tabel", true) + scopeChip("bubble: all-time per channel", false) + "</div>" +
      '<footer class="pagefoot"><span>Sumber biaya: fact_marketing_spends via metrics/cpl &amp; cac_proxy</span><span>F5 · implementasi</span></footer>';

    return {
      html: html,
      draws: {
        "p4-bubble": (m) => bubble(m, {
          rows: bubbleRows, x: (r) => r.leads, y: (r) => r.rate, size: (r) => r.gmv, label: (r) => srcLabel(r.source),
          tip: (r) => num(r.leads) + " leads · " + pct(r.rate, 1) + " win\nGMV " + jt(r.gmv),
          dimWhen: (r) => focusActive("source") && !isFocus("source", r.source), xLabel: "leads", height: 260,
        }),
        "p4-spend": (m) => stackedBars(m, {
          rows: spendRows, series: channels.map((s) => ({ key: "c_" + s, label: s, color: srcColor(s), fmt: rp })),
          yFmt: (v) => nf(v / 1e6, 0), label: (r) => mlabel(r.month), xLabel: (r) => mlabel(r.month), height: 200,
        }),
        "p4-cpl": (m) => lineChart(m, {
          rows: cplAll, series: [{ key: "cpl", label: "CPL", color: "var(--chart-3)" }],
          yFmt: (v) => nf(v / 1e3, 0), xLabel: (r) => mlabel(r.month), height: 170,
        }),
        "p4-cac": (m) => hbar(m, {
          rows: cacRows.slice().sort((x, y) => x.cac - y.cac), label: (r) => srcLabel(r.source), value: (r) => r.cac,
          fmt: (v) => rp(v), rowH: 24, labelW: 140, valW: 84, extra: (r) => num(r.deals) + " deal",
          color: () => "var(--chart-2)",
          dimWhen: (r) => focusActive("source") && !isFocus("source", r.source),
        }),
        "p4-industry": (m) => colBars(m, {
          rows: ind, value: (r) => r.leads, label: (r) => String(r.industry),
          yFmt: (v) => num(v), fmt: (v) => num(v), height: 190,
          sub: (r) => pct(r.win_rate, 1) + " win",
          dimWhen: (r) => focusActive("industry") && !isFocus("industry", r.industry),
        }),
        "p4-leads": (m) => lineChart(m, {
          rows: leadLines, series: SOURCE_ORDER.map((s) => ({ key: s, label: s, color: srcColor(s) })),
          yFmt: (v) => num(v), xLabel: (r) => mlabel(r.month), height: 190,
        }),
      },
    };
  }


  /* ============================== HALAMAN 5 ============================== */
  function page5() {
    const a = agg(), p = prevAgg();
    const rr = renewalKpi();
    const disc = pick("discounted_deal_share");
    const discC = sum(disc, (r) => r.contracts), discD = sum(disc, (r) => r.discounted);
    const giveup = sum(pick("revenue_giveup"), (r) => r.revenue_giveup);
    const gap = rows("renewal_gap")[0] || {};
    const cohort = rows("renewal_by_cohort").filter((r) => state.year === "all" || (r.cohort_month || "").startsWith(state.year));
    const nrr = rows("net_gmv_retention").filter((r) => r.cohort_month && (state.year === "all" || r.cohort_month.startsWith(state.year)));
    const discRate = rows("avg_discount_rate");
    const tier = rows("price_tier_mix");
    const renShare = a.gmv ? a.renewalGmv / a.gmv : null;

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 5 · Revenue, retention &amp; pricing</p>' +
      '<h1>Seberapa sehat pendapatan berulang dan pricing kita?</h1>' +
      '<p class="sub">Ketergantungan pada renewal, retensi per kohort, dan biaya program diskon. Semua angka memakai definisi yang sama dengan halaman 1.</p></div>' +
      '<div class="annot"><b>Perhatian</b><span>Renewal rate mengikuti tahun kohort kontrak pertama, bukan tahun pembayaran. Kohort terakhir belum matang.</span></div>' +
      '<div class="kpistrip">' +
      kpiHTML({ name: "Renewal rate", value: nf(rr.rate * 100, 1), unit: "%", metric: "renewal_by_cohort", jenis: "cohort", delta: num(rr.renewed) + "/" + num(rr.leads) + " akun · " + rr.label }) +
      kpiHTML({ name: "Porsi GMV renewal", value: nf(renShare * 100, 1), unit: "%", metric: "gmv_monthly", jenis: "period", delta: jt(a.renewalGmv) + " dari " + jt(a.gmv) }) +
      kpiHTML({ name: "Kontrak berdiskon", value: nf((discC ? discD / discC : 0) * 100, 1), unit: "%", metric: "discounted_deal_share", jenis: "period", delta: num(discD) + " dari " + num(discC) + " kontrak" }) +
      kpiHTML({ name: "Revenue give-up", value: nf(giveup / 1e6, 1), prefix: "Rp", unit: "jt", metric: "revenue_giveup", jenis: "period", delta: "Σ (list − effective) × seats" }) +
      kpiHTML({ name: "Jarak renewal", value: num(Math.round(gap.median_gap_days)), unit: "hari", metric: "renewal_gap", jenis: "cohort", locked: true, delta: "median kontrak-2 − kontrak-1" }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p5-wf", title: "New atau renewal yang menopang pendapatan periode ini?", refs: "metrics: gmv_monthly · revenue_kpis", chips: ["period"],
        sub: "Jembatan GMV: new business, renewal, lalu total. Nilai dari baris metrik bulanan pada periode terpilih.",
        body: mountDiv("p5-wf", 210),
        note: "2023 tidak punya new business — tanpa renewal, GMV 2023 nol.",
      }) +
      cardHTML({
        id: "p5-cohort", title: "Kohort mana yang bertahan, dan apakah nilai renewal naik?", refs: "metrics: renewal_by_cohort · net_gmv_retention", chips: ["cohort"],
        sub: "Batang = renewal rate per bulan kontrak pertama; garis = net GMV retention kohort yang sama.",
        body: mountDiv("p5-cohort", 230) +
          '<div class="legend"><span><i style="background:var(--chart-1)"></i>Renewal rate (kiri)</span><span><i style="background:var(--chart-3)"></i>NRR (kanan)</span></div>',
        note: "NRR = GMV renewal ÷ GMV kontrak pertama kohort. Kohort 2023 belum punya siklus penuh.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p5-disc", title: "Berapa harga efektif vs list, dan siapa yang menanggung diskon?", refs: "metric: avg_discount_rate", chips: ["period"],
        sub: "Program diskon bersifat flat per tahun (D1 10%, D2 20%), bukan negosiasi per deal.",
        body: mountDiv("p5-disc", 90) +
          '<p class="csub" style="margin-top:var(--s3)">Dipakai pada ' + num(sum(discRate, (r) => r.contracts)) + " kontrak dari " + num(rows("revenue_kpis")[0].contracts) + " total.</p>",
        note: "D1 = program diskon kuartal 2021, D2 = 2022; garis = rata-rata per program.",
      }) +
      cardHTML({
        id: "p5-tier", title: "Tier mana yang paling efisien per seat?", refs: "metric: price_tier_mix", chips: ["period"],
        sub: "Harga efektif per seat per subscription_type — Enterprise termurah per seat (temuan F-6).",
        body: mountDiv("p5-tier", 110) +
          htmlTable([
            { label: "Tier", key: "subscription_type" }, { label: "Kontrak", num: true, value: (r) => num(r.contracts) },
            { label: "GMV", num: true, value: (r) => jt(r.gmv) },
            { label: "Rp/seat", num: true, value: (r) => nf(r.price_per_seat / 1e3, 1) + " rb" },
          ], tier),
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: waterfall, porsi renewal, diskon, give-up", true) + scopeChip("renewal rate: tahun kohort", true) + scopeChip("jarak renewal: all-time", false) + "</div>" +
      '<footer class="pagefoot"><span>Sumber: metrics/revenue.py · retensi &amp; pricing</span><span>F5 · implementasi</span></footer>';

    return {
      html: html,
      draws: {
        "p5-wf": (m) => waterfall(m, { newGmv: a.newGmv, renewalGmv: a.renewalGmv }),
        "p5-cohort": (m) => {
          chart(m, 230, (svg, w, h) => {
            const mm = { t: 16, r: 42, b: 26, l: 46 };
            const pw = w - mm.l - mm.r, ph = h - mm.t - mm.b;
            const n = cohort.length || 1;
            const bw = pw / n;
            [0, 0.5, 1].forEach((f) => {
              const y = mm.t + ph - f * ph;
              el(svg, "line", { x1: mm.l, x2: w - mm.r, y1: y, y2: y, class: f === 0 ? "axis" : "gridline" });
              el(svg, "text", { x: mm.l - 6, y: y + 3, "text-anchor": "end" }, pct(f, 0));
            });
            const nrMax = Math.max(1.4, Math.max.apply(null, nrr.map((r) => r.nrr || 0)) * 1.1);
            const Y2 = (v) => mm.t + ph - (v / nrMax) * ph;
            cohort.forEach((r, i) => {
              const x = mm.l + i * bw + bw * 0.18;
              const y = mm.t + ph - (r.renewal_rate / 1) * ph;
              const rect = el(svg, "rect", {
                x: x, y: y, width: Math.max(2, bw * 0.64), height: mm.t + ph - y,
                fill: "var(--chart-1)", class: "mark", "fill-opacity": 0.82,
              });
              tip(rect, mlabel(r.cohort_month) + "\nrenewal " + pct(r.renewal_rate, 1) + " (" + num(r.renewed) + "/" + num(r.leads) + ")");
              if (i % Math.ceil(n / 8) === 0)
                el(svg, "text", { x: x + bw * 0.32, y: h - 8, "text-anchor": "middle" }, mon(r.cohort_month) + " " + r.cohort_month.slice(2, 4));
            });
            const pts = nrr.map((r, i) => [mm.l + i * bw + bw * 0.5, Y2(r.nrr)]);
            el(svg, "path", {
              d: pts.map((q, i) => (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1)).join(" "),
              fill: "none", stroke: "var(--chart-3)", "stroke-width": 1.6,
            });
            nrr.forEach((r, i) => {
              const c = el(svg, "circle", { cx: pts[i][0], cy: pts[i][1], r: 2.4, fill: "var(--chart-3)", class: "mark" });
              tip(c, mlabel(r.cohort_month) + "\nNRR " + pct(r.nrr, 1) + " · " + num(r.accounts) + " akun");
            });
            [1, 1.1, 1.2, 1.3].forEach((v) => {
              if (v > nrMax) return;
              el(svg, "line", { x1: w - mm.r, x2: w - mm.r + 4, y1: Y2(v), y2: Y2(v), stroke: "var(--rule)" });
              el(svg, "text", { x: w - mm.r + 6, y: Y2(v) + 3 }, nf(v, 1) + "×");
            });
            el(svg, "text", { x: w - mm.r + 6, y: 9 }, "NRR");
          });
        },
        "p5-disc": (m) => hbar(m, {
          rows: discRate, label: (r) => r.discount_code + " · " + String(r.discount_type).slice(0, 4),
          value: (r) => r.avg_discount_rate, fmt: (v) => pct(v, 1), max: 0.25, rowH: 26,
          labelW: 128, valW: 52, extra: (r) => num(r.contracts) + " kontrak",
        }),
        "p5-tier": (m) => hbar(m, {
          rows: tier.slice().sort((x, y) => x.price_per_seat - y.price_per_seat), label: (r) => r.subscription_type,
          value: (r) => r.price_per_seat, fmt: (v) => nf(v / 1e3, 1) + " rb", rowH: 28,
          labelW: 112, valW: 62, extra: (r) => num(r.contracts) + " kontrak", color: () => "var(--chart-2)",
        }),
      },
    };
  }


  /* ============================== HALAMAN 6 ============================== */
  function page6() {
    const nps = rows("nps")[0] || {};
    const csat = rows("csat").slice().sort((a, b) => a.csat - b.csat);
    const dims = [
      { key: "nps_by_source", label: "Channel", field: "source" },
      { key: "nps_by_industry", label: "Industri", field: "industry" },
      { key: "nps_by_tier", label: "Tier", field: "subscription_type" },
    ];
    const worst = csat[0] || {};
    const prettyDim = (d) => String(d).replace(/^csat_/, "").replace(/_/g, " ");
    const npsFmt = (v) => (v >= 0 ? "+" : "−") + nf(Math.abs(v) * 100, 1);

    const html =
      '<div class="phead"><p class="eyebrow">Halaman 6 · Customer experience</p>' +
      '<h1>Apa kata pelanggan tentang proses sales kami?</h1>' +
      '<p class="sub">Survey hanya mencakup lead yang deal (n = ' + num(nps.n) + '), dan tidak punya timestamp sendiri — atribusi memakai tanggal deal.</p></div>' +
      '<div class="kpistrip">' +
      kpiHTML({ name: "NPS", value: npsFmt(nps.nps), unit: "", metric: "nps", jenis: "period", delta: "promoter − detractor · n " + num(nps.n) }) +
      kpiHTML({ name: "Promoter", value: nf(nps.promoter_share * 100, 1), unit: "%", metric: "nps", jenis: "period", delta: "skor 9–10" }) +
      kpiHTML({ name: "Pasif", value: nf(nps.passive_share * 100, 1), unit: "%", metric: "nps", jenis: "period", delta: "skor 7–8" }) +
      kpiHTML({ name: "Detractor", value: nf(nps.detractor_share * 100, 1), unit: "%", metric: "nps", jenis: "period", delta: "skor ≤6" }) +
      kpiHTML({ name: "Dimensi terlemah", value: nf(worst.csat, 2), unit: "/ 5", metric: "csat", jenis: "period", delta: prettyDim(worst.dimension) + " · skala 1–5" }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p6-csat", title: "Bagian proses mana yang paling lemah?", refs: "metric: csat", chips: ["period", "skala 1–5"],
        sub: "Rata-rata CSAT per dimensi. Respon Time paling rendah — titik perbaikan pertama.",
        body: mountDiv("p6-csat", 130),
        note: "Skor 1–5, bukan persentase. Bandingkan antar dimensi, bukan terhadap NPS.",
      }) +
      cardHTML({
        id: "p6-nps", title: "Apakah kepuasan berbeda antar channel, industri, dan tier?", refs: "metric: nps_by_dimension", chips: ["period", "n kecil"],
        sub: "NPS per irisan, urut dari terendah. Label n wajib; irisan <30 diberi tanda “kecil”.",
        body: '<div id="p6-nps-a"></div><div id="p6-nps-b"></div><div id="p6-nps-c"></div>',
        note: "NPS memakai definisi standar (9–10 / 7–8 / ≤6); skala yang benar-benar terpakai 6–10.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p6-ttd", title: "Apakah deal yang lebih cepat lebih puas?", refs: "metric: nps_vs_time_to_deal", chips: ["all-time", "bucket durasi"],
        sub: "NPS per bucket lama deal (registrasi → won). Semakin lama deal, semakin rendah NPS-nya.",
        body: mountDiv("p6-ttd", 130),
        note: "Bucket mengikuti sebaran time-to-deal (median 31 hari); atribusi tanggal deal, bukan tanggal survey.",
      }) +
      cardHTML({
        id: "p6-monthly", title: "Bagaimana NPS bergerak antar bulan deal?", refs: "metric: nps_monthly", chips: ["all-time", "n kecil"],
        sub: "NPS per bulan won_at (kohort deal). Bulan dengan n <30 ditandai di tooltip.",
        body: mountDiv("p6-monthly", 200),
        note: "Metrik all-time (keputusan Q3 di 07) — tidak ikut filter periode; bulan n kecil dibaca dengan hati-hati.",
      }) +
      "</div>" +
      '<div class="grid g2">' +
      cardHTML({
        id: "p6-note1", title: "Kenapa NPS tidak ikut filter periode?", refs: "keputusan Q3 di 07", chips: ["all-time"],
        sub: "Survey tidak punya timestamp sendiri — atribusi memakai tanggal deal, dan metrik NPS belum menerima parameter tahun.",
        body: '<p class="csub" style="margin:0">Keputusan Q3 di <code>07</code>: NPS tampil all-time dengan chip ALL-TIME. Parameterisasi tahun tetap backlog perubahan registry, bukan dihitung ulang di front-end.</p>',
      }) +
      cardHTML({
        id: "p6-note2", title: "Apa yang tidak boleh disimpulkan dari halaman ini?", refs: "aturan pelaporan 04", chips: ["aturan"],
        sub: "Survey hanya dari pelanggan yang menang — bukan suara seluruh pasar, dan bukan penyebab kemenangan.",
        body: '<p class="csub" style="margin:0">Tidak ada data untuk lead yang gagal, sehingga NPS tinggi tidak berarti funnel sehat. Gunakan bersama halaman 2 (kebocoran) dan 4 (biaya).</p>',
      }) +
      "</div>" +
      '<div class="scope-row">' + scopeChip("filter periode: metrik NPS all-time (keputusan Q3 di 07)", false) + scopeChip("fokus irisan: menyorot bar NPS", true) + "</div>" +
      '<footer class="pagefoot"><span>Sumber: metrics/cx.py · survey 901 deal</span><span>F5 · implementasi</span></footer>';

    return {
      html: html,
      draws: {
        "p6-csat": (m) => hbar(m, {
          rows: csat, label: (r) => prettyDim(r.dimension), value: (r) => r.csat,
          fmt: (v) => nf(v, 2), max: 5, rowH: 26, labelW: 150, valW: 44,
          extra: (r) => "n " + num(r.n),
          color: (r) => (r === worst ? "var(--warn)" : "var(--chart-2)"),
        }),
        "p6-nps-a": (m) => npsBlock(m, dims[0]),
        "p6-nps-b": (m) => npsBlock(m, dims[1]),
        "p6-nps-c": (m) => npsBlock(m, dims[2]),
        "p6-ttd": (m) => npsBars(m, rows("nps_vs_time_to_deal"), (r) => r.bucket, null, (r) => "median " + days(r.median_days)),
        "p6-monthly": (m) => npsTrend(m, rows("nps_monthly")),
      },
    };

    function npsBlock(mount, dim) {
      const rs = rows(dim.key);
      const wrap = document.createElement("div");
      wrap.style.marginBottom = "var(--s5)";
      wrap.innerHTML = '<div class="mref" style="margin-bottom:6px">' + esc(dim.label) + "</div>";
      mount.appendChild(wrap);
      const box = document.createElement("div");
      wrap.appendChild(box);
      npsBars(box, rs.slice().sort((a, b) => a.nps - b.nps),
        (r) => (dim.field === "source" ? srcLabel(r[dim.field]) : String(r[dim.field])), dim.field);
    }

    /* Bar NPS divergen di sekitar nol — dipakai blok irisan & bucket time-to-deal. */
    function npsBars(mount, rs, labelFn, dimField, extraTip) {
      if (!rs.length) return;
      const lo = Math.min.apply(null, rs.map((r) => r.nps)), hi = Math.max.apply(null, rs.map((r) => r.nps));
      chart(mount, rs.length * 24 + 6, (svg, w, h) => {
        const labelW = 138, valW = 96;
        const span = Math.max(0.1, hi * 1.2 - Math.min(0, lo * 1.2));
        const X = (v) => labelW + ((v - Math.min(0, lo * 1.2)) / span) * (w - labelW - valW);
        rs.forEach((r, i) => {
          const y = 4 + i * 24;
          const dimmed = dimField && focusActive(dimField) && !isFocus(dimField, r[dimField]);
          const sliceLabel = labelFn(r);
          el(svg, "text", { x: 0, y: y + 14, class: "lab", opacity: dimmed ? 0.4 : 1 }, sliceLabel.slice(0, 20));
          const x0 = X(Math.min(0, r.nps)), x1 = X(Math.max(0, r.nps));
          const rect = el(svg, "rect", {
            x: x0, y: y + 4, width: Math.max(1, x1 - x0), height: 12,
            fill: r.nps >= 0 ? "var(--chart-1)" : "var(--warn)", class: "mark", opacity: dimmed ? 0.2 : 0.9,
          });
          tip(rect, sliceLabel + "\nNPS " + npsFmt(r.nps) + " · " + (r.n < 30 ? "n kecil " : "n ") + num(r.n) +
            (extraTip ? "\n" + extraTip(r) : ""));
          el(svg, "text", { x: w, y: y + 14, "text-anchor": "end", class: "val" }, npsFmt(r.nps));
          el(svg, "text", { x: w - 62, y: y + 14, "text-anchor": "end" }, (r.n < 30 ? "n kecil " : "n ") + num(r.n));
        });
        el(svg, "line", { x1: X(0), x2: X(0), y1: 0, y2: h, stroke: "var(--rule)" });
      });
    }

    /* Garis NPS bulanan dengan baseline nol — nilai bulanan bisa negatif. */
    function npsTrend(mount, rs) {
      if (!rs.length) return;
      chart(mount, 200, (svg, w, h) => {
        const mm = { t: 10, r: 8, b: 20, l: 46 };
        const pw = w - mm.l - mm.r, ph = h - mm.t - mm.b;
        const lo = Math.min(0, Math.min.apply(null, rs.map((r) => r.nps)) * 1.2);
        const hi = Math.max.apply(null, rs.map((r) => r.nps)) * 1.15;
        const Y = (v) => mm.t + ph - ((v - lo) / (hi - lo)) * ph;
        [hi, 0, lo].forEach((v) => {
          el(svg, "line", { x1: mm.l, x2: w - mm.r, y1: Y(v), y2: Y(v), class: v === 0 ? "axis" : "gridline" });
          el(svg, "text", { x: mm.l - 6, y: Y(v) + 3, "text-anchor": "end" }, (v >= 0 ? "+" : "−") + nf(Math.abs(v) * 100, 0) + "%");
        });
        const X = (i) => mm.l + (rs.length === 1 ? pw / 2 : (i / (rs.length - 1)) * pw);
        const pts = rs.map((r, i) => [X(i), Y(r.nps)]);
        el(svg, "path", {
          d: pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" "),
          fill: "none", stroke: "var(--chart-1)", "stroke-width": 1.7, class: "mark",
        });
        rs.forEach((r, i) => {
          const c = el(svg, "circle", { cx: pts[i][0], cy: pts[i][1], r: 2.4, fill: "var(--chart-1)", class: "mark" });
          tip(c, mlabel(r.month) + "\nNPS " + npsFmt(r.nps) + " · " + (r.n < 30 ? "n kecil " : "n ") + num(r.n));
        });
        spreadTicks(rs.map((r, i) => ({ pos: X(i), label: mlabel(r.month) })), 46).forEach((t) =>
          el(svg, "text", { x: t.pos, y: h - 6, "text-anchor": "middle" }, t.label));
      });
    }
  }
/* ------------------------------ shell --------------------------------- */
  const PAGES = [
    { id: "p1", n: "01", label: "Exec", build: page1 },
    { id: "p2", n: "02", label: "Funnel", build: page2 },
    { id: "p3", n: "03", label: "Web", build: page3 },
    { id: "p4", n: "04", label: "Channel", build: page4 },
    { id: "p5", n: "05", label: "Revenue", build: page5 },
    { id: "p6", n: "06", label: "CX", build: page6 },
  ];
  const qs = new URLSearchParams(location.search);
  if (["2021", "2022", "2023"].includes(qs.get("year"))) state.year = qs.get("year");
  if (qs.get("focus")) state.focus = qs.get("focus");
  const syncQuery = () => {
    const p = new URLSearchParams();
    if (state.year !== "all") p.set("year", state.year);
    if (state.focus) p.set("focus", state.focus);
    const q = p.toString();
    history.replaceState(null, "", (q ? "?" + q : location.pathname) + "#" + state.page);
  };
  const view = document.getElementById("view");
  const tabs = document.getElementById("tabs");
  const seg = document.getElementById("yearseg");
  const focusSel = document.getElementById("focus");
  const drawer = document.getElementById("audit");
  const scrim = document.getElementById("scrim");
  let built = null;

  function chrome() {
    tabs.innerHTML = PAGES.map((p) =>
      '<a href="#' + p.id + '" data-page="' + p.id + '"' + (p.id === state.page ? ' aria-current="page"' : "") +
      '><span class="n">' + p.n + "</span>" + p.label + "</a>").join("");
    seg.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.year === state.year)));
    focusSel.value = state.focus;
  }

  function redraw() {
    if (!built) return;
    Object.keys(built.draws).forEach((id) => {
      const m = document.getElementById(id);
      if (!m) return;
      m.innerHTML = "";
      built.draws[id](m);
    });
  }

  function render(scroll) {
    const def = PAGES.find((p) => p.id === state.page) || PAGES[0];
    built = def.build();
    view.innerHTML = built.html;
    redraw();
    chrome();
    if (scroll !== false) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function setPage(id, push) {
    if (!PAGES.some((p) => p.id === id)) id = "p1";
    state.page = id;
    if (push !== false) syncQuery();
    render();
  }

  tabs.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-page]");
    if (!a) return;
    e.preventDefault();
    setPage(a.dataset.page);
  });
  seg.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-year]");
    if (!b) return;
    state.year = b.dataset.year;
    syncQuery();
    render(false);
  });
  focusSel.addEventListener("change", () => { state.focus = focusSel.value; syncQuery(); render(false); });

  /* drawer audit — bukti satu sumber angka */
  function auditHTML() {
    const ids = Object.keys(DATA).sort();
    const list = ids.map((id) => {
      const d = DATA[id];
      const cat = (PAYLOAD.catalog || []).find((c) => c.name === d.metric) || {};
      return '<div><code>' + esc(id) + "</code><span>" + esc(d.metric) +
        (Object.keys(d.call || {}).length ? "(" + esc(JSON.stringify(d.call)) + ")" : "()") +
        "</span><span>" + esc(cat.jenis || "—") + " · " + esc(cat.atribusi || "—") + " · " + d.rows.length + " baris</span></div>";
    }).join("");
    return (
      '<header><h2>Sumber angka</h2><button class="btn" id="audit-close">Tutup</button></header><div class="body">' +
      '<p>Setiap angka di dashboard berasal dari satu pemanggilan metrik di package <code>metrics/</code> (F4). ' +
      "Data di-export oleh <code>" + esc(META.script) + "</code> pada " + esc(META.generated_at) + ".</p>" +
      '<div class="datalist" style="margin-bottom:var(--s5)"><div><code>basis data</code><span>' + esc(META.db) + "</span></div>" +
      "<div><code>metrik katalog</code><span>" + num(META.catalog_used) + "/" + num(META.catalog_size) + " dipakai dashboard</span></div>" +
      "<div><code>cutoff data</code><span>" + esc(META.data_cutoff) + "</span></div></div>" +
      '<p class="metric-ref" style="margin-bottom:8px">' + ids.length + " kumpulan data</p>" +
      '<div class="datalist">' + list + "</div>" +
      "<p style='margin-top:16px'>Regenerasi: <code>PYTHONPATH=. .venv/bin/python scripts/export_dashboard_data.py</code></p></div>"
    );
  }
  function openAudit(open) {
    drawer.innerHTML = open ? auditHTML() : "";
    drawer.classList.toggle("open", open);
    scrim.classList.toggle("on", open);
    if (open) drawer.querySelector("#audit-close").addEventListener("click", () => openAudit(false));
  }
  document.getElementById("audit-open").addEventListener("click", () => openAudit(true));
  scrim.addEventListener("click", () => openAudit(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") openAudit(false); });
  document.getElementById("print-btn").addEventListener("click", () => window.print());

  /* tooltip global untuk semua chart */
  const tipEl = document.getElementById("tip");
  document.addEventListener("mousemove", (e) => {
    const t = e.target.closest && e.target.closest(".chart .mark, .chart title");
    if (!t) { tipEl.classList.remove("on"); return; }
    const svgTitle = t.tagName === "title" ? t : t.querySelector("title");
    if (!svgTitle) { tipEl.classList.remove("on"); return; }
    tipEl.textContent = svgTitle.textContent;
    tipEl.classList.add("on");
    const x = Math.min(window.innerWidth - 270, e.clientX + 14);
    tipEl.style.left = x + "px";
    tipEl.style.top = Math.min(window.innerHeight - 70, e.clientY + 16) + "px";
  });

  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(redraw, 160);
  });
  window.addEventListener("hashchange", () => setPage((location.hash || "#p1").slice(1), false));

  /* boot */
  document.getElementById("meta-line").textContent =
    "export: " + META.generated_at.slice(0, 10) + " · " + META.catalog_used + "/" + META.catalog_size + " metrik · cutoff " + META.data_cutoff;
  document.querySelectorAll('#focus option[value^="source:"]').forEach((o) => {
    o.textContent = o.value.slice(7) === "Refferal" ? "Referral" : o.value.slice(7);
  });
  setPage((location.hash || "#p1").slice(1), false);
})();
