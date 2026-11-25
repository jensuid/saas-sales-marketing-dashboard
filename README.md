# SaaS Sales & Marketing Dashboard — static deploy

Dashboard statis 6 halaman (Exec · Funnel · Web · Channel · Revenue · CX) untuk
analitik sales & marketing SaaS. Repo ini **hanya berisi bundle build** —
`dist/` yang dihasilkan pipeline DuckDB + metrics layer di repo kerja lokal.

- Live: https://jensuid.github.io/saas-sales-marketing-dashboard/
- Isi: `index.html`, `app.js`, `dashboard.css`, `tokens.css`, `data.js` (payload
  angka), `build-info.json` (sha256 tiap aset per build).

## Cara membangun ulang

Bundle tidak diedit di sini. Di repo kerja:

```bash
.venv/bin/python scripts/build_warehouse.py          # sumber mentah → DuckDB
PYTHONPATH=. .venv/bin/python scripts/export_dashboard_data.py
.venv/bin/python scripts/build_dist.py --verify      # dist/ + verifikasi
# lalu salin isi dist/ ke root repo ini dan push
```

## Angka & keterbatasan

- Semua angka berasal dari satu metrics layer (registry metrik), bukan dihitung
  di browser. `data.js` adalah agregat bulanan/cohort/snapshot yang sudah jadi.
- Aktivitas lead berhenti Des 2022 → 2023 **renewal-only**.
- **CAC = proxy** (spend ÷ deal won per bulan deal), bukan cost accounting.
- Win rate tidak dihitung pada irisan <30 lead (ditandai "n kecil").
- Snapshot tidak pernah digabung ke sumbu waktu; survey hanya dari pelanggan yang deal.
- Tidak ada data per-lead/kontrak dan tidak ada kredensial di repo ini — hanya agregat.
