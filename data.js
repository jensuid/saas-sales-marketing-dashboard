/* AUTO-GENERATED oleh scripts/export_dashboard_data.py — jangan diedit.
   Sumber angka: package metrics/ (F4). */
window.METRICS_DATA = {
  "catalog": [
    {
      "atribusi": "leads_registered",
      "catatan": "KPI kesehatan top-of-funnel; stabil ±14%/bulan di dataset ini",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "cohort",
      "katalog": "Funnel & Pipeline / `09`",
      "name": "abandoned_at_entry_rate"
    },
    {
      "atribusi": "bulan deal_won (contract_date)",
      "catatan": "D1=10%, D2=20% flat (F-5) — program tahunan, bukan per-deal",
      "dipakai_dashboard": true,
      "grain": "per tipe diskon",
      "jenis": "period",
      "katalog": "Pricing & Discount",
      "name": "avg_discount_rate"
    },
    {
      "atribusi": "bulan spend ÷ won bulan sama (quarterly disarankan)",
      "catatan": "PROXY — bulanan terlalu berisik (deal/bulan sedikit)",
      "dipakai_dashboard": true,
      "grain": "quarterly × channel",
      "jenis": "period",
      "katalog": "Marketing Efficiency",
      "name": "cac_proxy"
    },
    {
      "atribusi": "contract_date",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Revenue",
      "name": "contracts_monthly"
    },
    {
      "atribusi": "bulan spend (join leads bulan sama)",
      "catatan": "semua channel punya leads tiap bulan → CPL bisa dihitung penuh",
      "dipakai_dashboard": true,
      "grain": "bulanan × channel",
      "jenis": "period",
      "katalog": "Marketing Efficiency",
      "name": "cpl"
    },
    {
      "atribusi": "won_at (tanggal deal)",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "per dimensi (1-5)",
      "jenis": "period",
      "katalog": "Customer Experience",
      "name": "csat"
    },
    {
      "atribusi": "bulan deal_won (contract_date)",
      "catatan": "D1 (10%) 2021 vs D2 (20%) 2022 terlihat langsung",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Pricing & Discount",
      "name": "discounted_deal_share"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "per step",
      "jenis": "cohort",
      "katalog": "Funnel & Pipeline",
      "name": "dropoff_leads"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "per stage",
      "jenis": "cohort",
      "katalog": "Funnel & Pipeline",
      "name": "dropoff_reason_mix"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "win rate TIDAK monoton terhadap depth — insight, bukan bug",
      "dipakai_dashboard": true,
      "grain": "per bucket pageview",
      "jenis": "cohort",
      "katalog": "Web Engagement",
      "name": "engagement_depth"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "first-touch = min Page_timestamp per lead",
      "dipakai_dashboard": true,
      "grain": "per halaman first-touch",
      "jenis": "cohort",
      "katalog": "Web Engagement",
      "name": "first_touch_page"
    },
    {
      "atribusi": "Page_timestamp",
      "catatan": "proxy intent; juga dipakai sebagai Form Conversion Signal (04)",
      "dipakai_dashboard": true,
      "grain": "per halaman /form/*",
      "jenis": "period",
      "katalog": "Acquisition & Web Engagement",
      "name": "form_funnel"
    },
    {
      "atribusi": "contract_date × dim lead",
      "catatan": "kanvas channel; typo 'Refferal' diperbaiki di layer presentasi",
      "dipakai_dashboard": true,
      "grain": "bulanan / per dimensi",
      "jenis": "period",
      "katalog": "Revenue",
      "name": "gmv_by_dimension"
    },
    {
      "atribusi": "contract_date",
      "catatan": "new vs renewal = 2 seri terpisah; 2023 renewal-only (F-7)",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "North Star / Revenue",
      "name": "gmv_monthly"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "CPC volume terbesar",
      "dipakai_dashboard": true,
      "grain": "per dimensi",
      "jenis": "period",
      "katalog": "Acquisition & Engagement",
      "name": "leads_by_dimension"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Funnel & Pipeline",
      "name": "leads_registered"
    },
    {
      "atribusi": "bulan kontrak pertama",
      "catatan": "GMV renewal ÷ GMV kontrak-pertama kohort sama",
      "dipakai_dashboard": true,
      "grain": "per kohort (censused)",
      "jenis": "cohort",
      "katalog": "Retensi",
      "name": "net_gmv_retention"
    },
    {
      "atribusi": "won_at (tanggal deal)",
      "catatan": "skala efektif 6-10 → catatan di tooltip (aturan #7 di 04)",
      "dipakai_dashboard": true,
      "grain": "bulanan / all-time",
      "jenis": "period",
      "katalog": "Customer Experience",
      "name": "nps"
    },
    {
      "atribusi": "won_at × slice",
      "catatan": "korelasi channel × kepuasan; tier via kontrak pertama",
      "dipakai_dashboard": true,
      "grain": "per slice (quarterly untuk slice kecil)",
      "jenis": "period",
      "katalog": "Customer Experience",
      "name": "nps_by_dimension"
    },
    {
      "atribusi": "won_at (tanggal deal)",
      "catatan": "n <30 diberi tanda 'n kecil' di UI (aturan #5 di 04)",
      "dipakai_dashboard": true,
      "grain": "bulanan (kohort deal)",
      "jenis": "period",
      "katalog": "Customer Experience",
      "name": "nps_monthly"
    },
    {
      "atribusi": "won_at (tanggal deal)",
      "catatan": "bucket dipilih mengikuti sebaran days_to_deal (median 31 hari); backlog F5 dari docs/06 — change log docs/11",
      "dipakai_dashboard": true,
      "grain": "per bucket durasi (all-time)",
      "jenis": "period",
      "katalog": "Customer Experience",
      "name": "nps_vs_time_to_deal"
    },
    {
      "atribusi": "data cutoff",
      "catatan": "snapshot tidak pernah digabung ke chart time-series (aturan #5 di 08)",
      "dipakai_dashboard": true,
      "grain": "satu angka",
      "jenis": "snapshot",
      "katalog": "Funnel & Pipeline",
      "name": "open_pipeline"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "all-time",
      "jenis": "period",
      "katalog": "Acquisition & Engagement",
      "name": "pages_per_lead"
    },
    {
      "atribusi": "Page_timestamp",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "bulanan / per halaman",
      "jenis": "period",
      "katalog": "Web Engagement",
      "name": "pageviews"
    },
    {
      "atribusi": "contract_date",
      "catatan": "Enterprise termurah per seat (F-6)",
      "dipakai_dashboard": true,
      "grain": "per subscription_type",
      "jenis": "period",
      "katalog": "Pricing & Discount",
      "name": "price_tier_mix"
    },
    {
      "atribusi": "bulan kontrak pertama",
      "catatan": "kohort 2023 belum matang — beri catatan (04)",
      "dipakai_dashboard": true,
      "grain": "heatmap kohort",
      "jenis": "cohort",
      "katalog": "Retensi",
      "name": "renewal_by_cohort"
    },
    {
      "atribusi": "bulan kontrak pertama",
      "catatan": "median 365 hari = validasi siklus kontrak tahunan",
      "dipakai_dashboard": true,
      "grain": "per kohort",
      "jenis": "cohort",
      "katalog": "Retensi",
      "name": "renewal_gap"
    },
    {
      "atribusi": "bulan kontrak pertama (censused)",
      "catatan": "cohort <12 bulan belum matang → anotasi wajib (aturan #3 di 08)",
      "dipakai_dashboard": true,
      "grain": "all-time",
      "jenis": "cohort",
      "katalog": "Retensi",
      "name": "renewal_rate"
    },
    {
      "atribusi": "bulan deal_won (contract_date)",
      "catatan": "biaya program diskon: Σ (list − effective) × seats",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Pricing & Discount",
      "name": "revenue_giveup"
    },
    {
      "atribusi": "contract_date",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "all-time (big number)",
      "jenis": "period",
      "katalog": "North Star / Revenue",
      "name": "revenue_kpis"
    },
    {
      "atribusi": "contract_date",
      "catatan": "proxy volume",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Revenue",
      "name": "seats_sold"
    },
    {
      "atribusi": "bulan spend (native)",
      "catatan": "",
      "dipakai_dashboard": true,
      "grain": "bulanan × channel",
      "jenis": "period",
      "katalog": "Marketing Efficiency",
      "name": "spend_by_channel_month"
    },
    {
      "atribusi": "bulan spend ÷ GMV kontrak periode sama (quarterly)",
      "catatan": "efisiensi kasar per channel",
      "dipakai_dashboard": true,
      "grain": "quarterly × channel",
      "jenis": "period",
      "katalog": "Marketing Efficiency",
      "name": "spend_per_won_gmv"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "kohort butuh ±6 minggu (max time-to-deal 42 hari) sebelum matang",
      "dipakai_dashboard": true,
      "grain": "stage × bulan (heatmap)",
      "jenis": "cohort",
      "katalog": "`09` Q1",
      "name": "stage_month_conversion"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "reach(S) = distinct leads yang pernah mencapai stage S",
      "dipakai_dashboard": true,
      "grain": "all-time per stage",
      "jenis": "cohort",
      "katalog": "Funnel & Pipeline",
      "name": "stage_reach"
    },
    {
      "atribusi": "akhir bulan M (retrospektif)",
      "catatan": "threshold 30/90 hari (configurable); idle >= threshold+1 hari penuh sejak event terakhir — kalibrasi ke angka `09`",
      "dipakai_dashboard": true,
      "grain": "snapshot series",
      "jenis": "snapshot",
      "katalog": "Funnel & Pipeline / `09`",
      "name": "stale_open_pipeline"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "laporkan step & cumulative berdampingan (aturan #3 di 04)",
      "dipakai_dashboard": true,
      "grain": "per step (all-time)",
      "jenis": "cohort",
      "katalog": "Funnel & Pipeline",
      "name": "step_conversion"
    },
    {
      "atribusi": "akhir bulan M (retrospektif)",
      "catatan": "reached S, never reached S+1, dan tanpa reason (knowledge penuh)",
      "dipakai_dashboard": true,
      "grain": "per stage",
      "jenis": "snapshot",
      "katalog": "Funnel & Pipeline / `09`",
      "name": "stuck_per_stage"
    },
    {
      "atribusi": "won_at (+ cohort registered_at)",
      "catatan": "laporkan median & p25-p75, bukan hanya mean",
      "dipakai_dashboard": true,
      "grain": "bulanan",
      "jenis": "period",
      "katalog": "Funnel & Pipeline",
      "name": "time_to_deal"
    },
    {
      "atribusi": "data cutoff",
      "catatan": "baseline 100% — laporkan sebagai coverage, bukan konversi (04)",
      "dipakai_dashboard": true,
      "grain": "satu angka",
      "jenis": "snapshot",
      "katalog": "Web Engagement",
      "name": "visit_to_lead_rate"
    },
    {
      "atribusi": "Page_timestamp",
      "catatan": "visitor = lead yang browsing (GA hanya merekam lead)",
      "dipakai_dashboard": false,
      "grain": "bulanan / per halaman",
      "jenis": "period",
      "katalog": "Web Engagement",
      "name": "visitors"
    },
    {
      "atribusi": "cohort leads_registered ATAU bulan deal_won (deal_won_at)",
      "catatan": "dual attribution — label wajib (aturan #2 di 08)",
      "dipakai_dashboard": true,
      "grain": "bulanan / quarterly untuk slice kecil",
      "jenis": "dual",
      "katalog": "Acquisition & Engagement",
      "name": "win_rate_by_source"
    },
    {
      "atribusi": "leads_registered",
      "catatan": "sinyal konten yang berkorelasi win — bukan time-series utama",
      "dipakai_dashboard": true,
      "grain": "per halaman",
      "jenis": "cohort",
      "katalog": "Acquisition & Engagement / Web",
      "name": "won_vs_notwon_page_mix"
    }
  ],
  "data": {
    "abandoned_at_entry_rate": {
      "call": {},
      "metric": "abandoned_at_entry_rate",
      "rows": [
        {
          "abandoned": 0,
          "leads": 10,
          "month": "2020-11-01",
          "rate": 0.0
        },
        {
          "abandoned": 16,
          "leads": 111,
          "month": "2020-12-01",
          "rate": 0.14414414414414414
        },
        {
          "abandoned": 19,
          "leads": 108,
          "month": "2021-01-01",
          "rate": 0.17592592592592593
        },
        {
          "abandoned": 12,
          "leads": 79,
          "month": "2021-02-01",
          "rate": 0.1518987341772152
        },
        {
          "abandoned": 20,
          "leads": 122,
          "month": "2021-03-01",
          "rate": 0.16393442622950818
        },
        {
          "abandoned": 13,
          "leads": 120,
          "month": "2021-04-01",
          "rate": 0.10833333333333334
        },
        {
          "abandoned": 17,
          "leads": 95,
          "month": "2021-05-01",
          "rate": 0.17894736842105263
        },
        {
          "abandoned": 18,
          "leads": 121,
          "month": "2021-06-01",
          "rate": 0.1487603305785124
        },
        {
          "abandoned": 16,
          "leads": 106,
          "month": "2021-07-01",
          "rate": 0.1509433962264151
        },
        {
          "abandoned": 18,
          "leads": 115,
          "month": "2021-08-01",
          "rate": 0.1565217391304348
        },
        {
          "abandoned": 22,
          "leads": 135,
          "month": "2021-09-01",
          "rate": 0.16296296296296298
        },
        {
          "abandoned": 12,
          "leads": 89,
          "month": "2021-10-01",
          "rate": 0.1348314606741573
        },
        {
          "abandoned": 17,
          "leads": 117,
          "month": "2021-11-01",
          "rate": 0.1452991452991453
        },
        {
          "abandoned": 33,
          "leads": 216,
          "month": "2021-12-01",
          "rate": 0.1527777777777778
        },
        {
          "abandoned": 18,
          "leads": 119,
          "month": "2022-01-01",
          "rate": 0.15126050420168066
        },
        {
          "abandoned": 14,
          "leads": 100,
          "month": "2022-02-01",
          "rate": 0.14
        },
        {
          "abandoned": 33,
          "leads": 220,
          "month": "2022-03-01",
          "rate": 0.15
        },
        {
          "abandoned": 15,
          "leads": 116,
          "month": "2022-04-01",
          "rate": 0.12931034482758622
        },
        {
          "abandoned": 26,
          "leads": 153,
          "month": "2022-05-01",
          "rate": 0.16993464052287582
        },
        {
          "abandoned": 33,
          "leads": 248,
          "month": "2022-06-01",
          "rate": 0.13306451612903225
        },
        {
          "abandoned": 21,
          "leads": 122,
          "month": "2022-07-01",
          "rate": 0.1721311475409836
        },
        {
          "abandoned": 25,
          "leads": 166,
          "month": "2022-08-01",
          "rate": 0.15060240963855423
        },
        {
          "abandoned": 47,
          "leads": 318,
          "month": "2022-09-01",
          "rate": 0.14779874213836477
        },
        {
          "abandoned": 23,
          "leads": 165,
          "month": "2022-10-01",
          "rate": 0.1393939393939394
        },
        {
          "abandoned": 17,
          "leads": 118,
          "month": "2022-11-01",
          "rate": 0.1440677966101695
        },
        {
          "abandoned": 1,
          "leads": 8,
          "month": "2022-12-01",
          "rate": 0.125
        },
        {
          "abandoned": 506,
          "leads": 3397,
          "month": null,
          "rate": 0.1489549602590521
        }
      ]
    },
    "avg_discount_rate": {
      "call": {},
      "metric": "avg_discount_rate",
      "rows": [
        {
          "avg_discount_rate": 0.09999999999999976,
          "contracts": 144,
          "discount_code": "D1",
          "discount_type": "2021_quarter_discount"
        },
        {
          "avg_discount_rate": 0.20000000000000104,
          "contracts": 298,
          "discount_code": "D2",
          "discount_type": "2022_quarter_discount"
        }
      ]
    },
    "cac_proxy": {
      "call": {},
      "metric": "cac_proxy",
      "rows": [
        {
          "cac_proxy": 500000.0,
          "deals_won": 28,
          "quarter": "2021-01-01",
          "source": "CPC",
          "spend": 14000000.0
        },
        {
          "cac_proxy": 837500.0,
          "deals_won": 16,
          "quarter": "2021-01-01",
          "source": "Direct",
          "spend": 13400000.0
        },
        {
          "cac_proxy": 1383333.3333333333,
          "deals_won": 6,
          "quarter": "2021-01-01",
          "source": "Organic Search",
          "spend": 8300000.0
        },
        {
          "cac_proxy": 958333.3333333334,
          "deals_won": 12,
          "quarter": "2021-01-01",
          "source": "Organic Social",
          "spend": 11500000.0
        },
        {
          "cac_proxy": 1705882.3529411764,
          "deals_won": 17,
          "quarter": "2021-01-01",
          "source": "Refferal",
          "spend": 29000000.0
        },
        {
          "cac_proxy": 448275.8620689655,
          "deals_won": 29,
          "quarter": "2021-04-01",
          "source": "CPC",
          "spend": 13000000.0
        },
        {
          "cac_proxy": 1042857.1428571428,
          "deals_won": 14,
          "quarter": "2021-04-01",
          "source": "Direct",
          "spend": 14600000.0
        },
        {
          "cac_proxy": 1250000.0,
          "deals_won": 8,
          "quarter": "2021-04-01",
          "source": "Organic Search",
          "spend": 10000000.0
        },
        {
          "cac_proxy": 1007692.3076923077,
          "deals_won": 13,
          "quarter": "2021-04-01",
          "source": "Organic Social",
          "spend": 13100000.0
        },
        {
          "cac_proxy": 1568181.8181818181,
          "deals_won": 22,
          "quarter": "2021-04-01",
          "source": "Refferal",
          "spend": 34500000.0
        },
        {
          "cac_proxy": 520000.0,
          "deals_won": 25,
          "quarter": "2021-07-01",
          "source": "CPC",
          "spend": 13000000.0
        },
        {
          "cac_proxy": 825000.0,
          "deals_won": 20,
          "quarter": "2021-07-01",
          "source": "Direct",
          "spend": 16500000.0
        },
        {
          "cac_proxy": 1533333.3333333333,
          "deals_won": 9,
          "quarter": "2021-07-01",
          "source": "Organic Search",
          "spend": 13800000.0
        },
        {
          "cac_proxy": 930769.2307692308,
          "deals_won": 13,
          "quarter": "2021-07-01",
          "source": "Organic Social",
          "spend": 12100000.0
        },
        {
          "cac_proxy": 1750000.0,
          "deals_won": 22,
          "quarter": "2021-07-01",
          "source": "Refferal",
          "spend": 38500000.0
        },
        {
          "cac_proxy": 538461.5384615385,
          "deals_won": 26,
          "quarter": "2021-10-01",
          "source": "CPC",
          "spend": 14000000.0
        },
        {
          "cac_proxy": 1015789.4736842106,
          "deals_won": 19,
          "quarter": "2021-10-01",
          "source": "Direct",
          "spend": 19300000.0
        },
        {
          "cac_proxy": 975000.0,
          "deals_won": 16,
          "quarter": "2021-10-01",
          "source": "Organic Search",
          "spend": 15600000.0
        },
        {
          "cac_proxy": 1510000.0,
          "deals_won": 10,
          "quarter": "2021-10-01",
          "source": "Organic Social",
          "spend": 15100000.0
        },
        {
          "cac_proxy": 2181818.1818181816,
          "deals_won": 22,
          "quarter": "2021-10-01",
          "source": "Refferal",
          "spend": 48000000.0
        },
        {
          "cac_proxy": 437500.0,
          "deals_won": 32,
          "quarter": "2022-01-01",
          "source": "CPC",
          "spend": 14000000.0
        },
        {
          "cac_proxy": 1417647.0588235294,
          "deals_won": 17,
          "quarter": "2022-01-01",
          "source": "Direct",
          "spend": 24100000.0
        },
        {
          "cac_proxy": 840000.0,
          "deals_won": 15,
          "quarter": "2022-01-01",
          "source": "Organic Search",
          "spend": 12600000.0
        },
        {
          "cac_proxy": 1084615.3846153845,
          "deals_won": 13,
          "quarter": "2022-01-01",
          "source": "Organic Social",
          "spend": 14100000.0
        },
        {
          "cac_proxy": 1733333.3333333333,
          "deals_won": 30,
          "quarter": "2022-01-01",
          "source": "Refferal",
          "spend": 52000000.0
        },
        {
          "cac_proxy": 377777.77777777775,
          "deals_won": 45,
          "quarter": "2022-04-01",
          "source": "CPC",
          "spend": 17000000.0
        },
        {
          "cac_proxy": 1015000.0,
          "deals_won": 20,
          "quarter": "2022-04-01",
          "source": "Direct",
          "spend": 20300000.0
        },
        {
          "cac_proxy": 2177777.777777778,
          "deals_won": 9,
          "quarter": "2022-04-01",
          "source": "Organic Search",
          "spend": 19600000.0
        },
        {
          "cac_proxy": 1161538.4615384615,
          "deals_won": 13,
          "quarter": "2022-04-01",
          "source": "Organic Social",
          "spend": 15100000.0
        },
        {
          "cac_proxy": 1828947.3684210526,
          "deals_won": 38,
          "quarter": "2022-04-01",
          "source": "Refferal",
          "spend": 69500000.0
        },
        {
          "cac_proxy": 500000.0,
          "deals_won": 40,
          "quarter": "2022-07-01",
          "source": "CPC",
          "spend": 20000000.0
        },
        {
          "cac_proxy": 825000.0,
          "deals_won": 28,
          "quarter": "2022-07-01",
          "source": "Direct",
          "spend": 23100000.0
        },
        {
          "cac_proxy": 1686666.6666666667,
          "deals_won": 15,
          "quarter": "2022-07-01",
          "source": "Organic Search",
          "spend": 25300000.0
        },
        {
          "cac_proxy": 1156250.0,
          "deals_won": 16,
          "quarter": "2022-07-01",
          "source": "Organic Social",
          "spend": 18500000.0
        },
        {
          "cac_proxy": 1659574.4680851065,
          "deals_won": 47,
          "quarter": "2022-07-01",
          "source": "Refferal",
          "spend": 78000000.0
        },
        {
          "cac_proxy": 250000.0,
          "deals_won": 40,
          "quarter": "2022-10-01",
          "source": "CPC",
          "spend": 10000000.0
        },
        {
          "cac_proxy": 376470.5882352941,
          "deals_won": 34,
          "quarter": "2022-10-01",
          "source": "Direct",
          "spend": 12800000.0
        },
        {
          "cac_proxy": 453846.1538461539,
          "deals_won": 26,
          "quarter": "2022-10-01",
          "source": "Organic Search",
          "spend": 11800000.0
        },
        {
          "cac_proxy": 585714.2857142857,
          "deals_won": 21,
          "quarter": "2022-10-01",
          "source": "Organic Social",
          "spend": 12300000.0
        },
        {
          "cac_proxy": 554545.4545454546,
          "deals_won": 55,
          "quarter": "2022-10-01",
          "source": "Refferal",
          "spend": 30500000.0
        }
      ]
    },
    "contracts_monthly": {
      "call": {},
      "metric": "contracts_monthly",
      "rows": [
        {
          "contracts": 33,
          "month": "2021-01-01",
          "new_contracts": 33,
          "renewal_contracts": 0
        },
        {
          "contracts": 24,
          "month": "2021-02-01",
          "new_contracts": 24,
          "renewal_contracts": 0
        },
        {
          "contracts": 22,
          "month": "2021-03-01",
          "new_contracts": 22,
          "renewal_contracts": 0
        },
        {
          "contracts": 36,
          "month": "2021-04-01",
          "new_contracts": 36,
          "renewal_contracts": 0
        },
        {
          "contracts": 26,
          "month": "2021-05-01",
          "new_contracts": 26,
          "renewal_contracts": 0
        },
        {
          "contracts": 24,
          "month": "2021-06-01",
          "new_contracts": 24,
          "renewal_contracts": 0
        },
        {
          "contracts": 36,
          "month": "2021-07-01",
          "new_contracts": 36,
          "renewal_contracts": 0
        },
        {
          "contracts": 27,
          "month": "2021-08-01",
          "new_contracts": 27,
          "renewal_contracts": 0
        },
        {
          "contracts": 26,
          "month": "2021-09-01",
          "new_contracts": 26,
          "renewal_contracts": 0
        },
        {
          "contracts": 39,
          "month": "2021-10-01",
          "new_contracts": 39,
          "renewal_contracts": 0
        },
        {
          "contracts": 28,
          "month": "2021-11-01",
          "new_contracts": 28,
          "renewal_contracts": 0
        },
        {
          "contracts": 26,
          "month": "2021-12-01",
          "new_contracts": 26,
          "renewal_contracts": 0
        },
        {
          "contracts": 88,
          "month": "2022-01-01",
          "new_contracts": 56,
          "renewal_contracts": 32
        },
        {
          "contracts": 51,
          "month": "2022-02-01",
          "new_contracts": 29,
          "renewal_contracts": 22
        },
        {
          "contracts": 43,
          "month": "2022-03-01",
          "new_contracts": 22,
          "renewal_contracts": 21
        },
        {
          "contracts": 98,
          "month": "2022-04-01",
          "new_contracts": 67,
          "renewal_contracts": 31
        },
        {
          "contracts": 57,
          "month": "2022-05-01",
          "new_contracts": 31,
          "renewal_contracts": 26
        },
        {
          "contracts": 50,
          "month": "2022-06-01",
          "new_contracts": 27,
          "renewal_contracts": 23
        },
        {
          "contracts": 115,
          "month": "2022-07-01",
          "new_contracts": 79,
          "renewal_contracts": 36
        },
        {
          "contracts": 63,
          "month": "2022-08-01",
          "new_contracts": 37,
          "renewal_contracts": 26
        },
        {
          "contracts": 53,
          "month": "2022-09-01",
          "new_contracts": 30,
          "renewal_contracts": 23
        },
        {
          "contracts": 131,
          "month": "2022-10-01",
          "new_contracts": 96,
          "renewal_contracts": 35
        },
        {
          "contracts": 73,
          "month": "2022-11-01",
          "new_contracts": 46,
          "renewal_contracts": 27
        },
        {
          "contracts": 57,
          "month": "2022-12-01",
          "new_contracts": 34,
          "renewal_contracts": 23
        },
        {
          "contracts": 55,
          "month": "2023-01-01",
          "new_contracts": 0,
          "renewal_contracts": 55
        },
        {
          "contracts": 27,
          "month": "2023-02-01",
          "new_contracts": 0,
          "renewal_contracts": 27
        },
        {
          "contracts": 21,
          "month": "2023-03-01",
          "new_contracts": 0,
          "renewal_contracts": 21
        },
        {
          "contracts": 64,
          "month": "2023-04-01",
          "new_contracts": 0,
          "renewal_contracts": 64
        },
        {
          "contracts": 31,
          "month": "2023-05-01",
          "new_contracts": 0,
          "renewal_contracts": 31
        },
        {
          "contracts": 26,
          "month": "2023-06-01",
          "new_contracts": 0,
          "renewal_contracts": 26
        },
        {
          "contracts": 75,
          "month": "2023-07-01",
          "new_contracts": 0,
          "renewal_contracts": 75
        },
        {
          "contracts": 34,
          "month": "2023-08-01",
          "new_contracts": 0,
          "renewal_contracts": 34
        },
        {
          "contracts": 29,
          "month": "2023-09-01",
          "new_contracts": 0,
          "renewal_contracts": 29
        },
        {
          "contracts": 90,
          "month": "2023-10-01",
          "new_contracts": 0,
          "renewal_contracts": 90
        },
        {
          "contracts": 45,
          "month": "2023-11-01",
          "new_contracts": 0,
          "renewal_contracts": 45
        },
        {
          "contracts": 31,
          "month": "2023-12-01",
          "new_contracts": 0,
          "renewal_contracts": 31
        }
      ]
    },
    "cpl": {
      "call": {},
      "metric": "cpl",
      "rows": [
        {
          "cpl": 360000.0,
          "leads": 10.0,
          "month": "2020-11-01",
          "source": "(all)",
          "spend": 3600000.0
        },
        {
          "cpl": 500000.0,
          "leads": 2.0,
          "month": "2020-11-01",
          "source": "CPC",
          "spend": 1000000.0
        },
        {
          "cpl": 266666.6666666667,
          "leads": 3.0,
          "month": "2020-11-01",
          "source": "Direct",
          "spend": 800000.0
        },
        {
          "cpl": 300000.0,
          "leads": 1.0,
          "month": "2020-11-01",
          "source": "Organic Search",
          "spend": 300000.0
        },
        {
          "cpl": 250000.0,
          "leads": 2.0,
          "month": "2020-11-01",
          "source": "Organic Social",
          "spend": 500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 2.0,
          "month": "2020-11-01",
          "source": "Refferal",
          "spend": 1000000.0
        },
        {
          "cpl": 280180.1801801802,
          "leads": 111.0,
          "month": "2020-12-01",
          "source": "(all)",
          "spend": 31100000.0
        },
        {
          "cpl": 129032.25806451614,
          "leads": 31.0,
          "month": "2020-12-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 252380.95238095237,
          "leads": 21.0,
          "month": "2020-12-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2020-12-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 16.0,
          "month": "2020-12-01",
          "source": "Organic Social",
          "spend": 4000000.0
        },
        {
          "cpl": 500000.0,
          "leads": 28.0,
          "month": "2020-12-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "cpl": 238888.88888888888,
          "leads": 108.0,
          "month": "2021-01-01",
          "source": "(all)",
          "spend": 25800000.0
        },
        {
          "cpl": 116279.06976744186,
          "leads": 43.0,
          "month": "2021-01-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2021-01-01",
          "source": "Direct",
          "spend": 3800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 10.0,
          "month": "2021-01-01",
          "source": "Organic Search",
          "spend": 2500000.0
        },
        {
          "cpl": 250000.0,
          "leads": 22.0,
          "month": "2021-01-01",
          "source": "Organic Social",
          "spend": 5500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 18.0,
          "month": "2021-01-01",
          "source": "Refferal",
          "spend": 9000000.0
        },
        {
          "cpl": 256962.0253164557,
          "leads": 79.0,
          "month": "2021-02-01",
          "source": "(all)",
          "spend": 20300000.0
        },
        {
          "cpl": 129032.25806451614,
          "leads": 31.0,
          "month": "2021-02-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 252941.17647058822,
          "leads": 17.0,
          "month": "2021-02-01",
          "source": "Direct",
          "spend": 4300000.0
        },
        {
          "cpl": 250000.0,
          "leads": 4.0,
          "month": "2021-02-01",
          "source": "Organic Search",
          "spend": 1000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 10.0,
          "month": "2021-02-01",
          "source": "Organic Social",
          "spend": 2500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 17.0,
          "month": "2021-02-01",
          "source": "Refferal",
          "spend": 8500000.0
        },
        {
          "cpl": 246721.31147540984,
          "leads": 122.0,
          "month": "2021-03-01",
          "source": "(all)",
          "spend": 30100000.0
        },
        {
          "cpl": 111111.11111111111,
          "leads": 45.0,
          "month": "2021-03-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 252380.95238095237,
          "leads": 21.0,
          "month": "2021-03-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "cpl": 252631.57894736843,
          "leads": 19.0,
          "month": "2021-03-01",
          "source": "Organic Search",
          "spend": 4800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 14.0,
          "month": "2021-03-01",
          "source": "Organic Social",
          "spend": 3500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 23.0,
          "month": "2021-03-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "cpl": 256666.66666666666,
          "leads": 120.0,
          "month": "2021-04-01",
          "source": "(all)",
          "spend": 30800000.0
        },
        {
          "cpl": 119047.61904761905,
          "leads": 42.0,
          "month": "2021-04-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 252631.57894736843,
          "leads": 19.0,
          "month": "2021-04-01",
          "source": "Direct",
          "spend": 4800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 12.0,
          "month": "2021-04-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 22.0,
          "month": "2021-04-01",
          "source": "Organic Social",
          "spend": 5500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 25.0,
          "month": "2021-04-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "cpl": 253684.2105263158,
          "leads": 95.0,
          "month": "2021-05-01",
          "source": "(all)",
          "spend": 24100000.0
        },
        {
          "cpl": 100000.0,
          "leads": 30.0,
          "month": "2021-05-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "cpl": 252631.57894736843,
          "leads": 19.0,
          "month": "2021-05-01",
          "source": "Direct",
          "spend": 4800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 12.0,
          "month": "2021-05-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2021-05-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 19.0,
          "month": "2021-05-01",
          "source": "Refferal",
          "spend": 9500000.0
        },
        {
          "cpl": 250413.22314049586,
          "leads": 121.0,
          "month": "2021-06-01",
          "source": "(all)",
          "spend": 30300000.0
        },
        {
          "cpl": 111111.11111111111,
          "leads": 45.0,
          "month": "2021-06-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 20.0,
          "month": "2021-06-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 16.0,
          "month": "2021-06-01",
          "source": "Organic Search",
          "spend": 4000000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2021-06-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 25.0,
          "month": "2021-06-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "cpl": 281132.07547169813,
          "leads": 106.0,
          "month": "2021-07-01",
          "source": "(all)",
          "spend": 29800000.0
        },
        {
          "cpl": 129032.25806451614,
          "leads": 31.0,
          "month": "2021-07-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 20.0,
          "month": "2021-07-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 12.0,
          "month": "2021-07-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2021-07-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 28.0,
          "month": "2021-07-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "cpl": 259130.4347826087,
          "leads": 115.0,
          "month": "2021-08-01",
          "source": "(all)",
          "spend": 29800000.0
        },
        {
          "cpl": 114285.71428571429,
          "leads": 35.0,
          "month": "2021-08-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 22.0,
          "month": "2021-08-01",
          "source": "Direct",
          "spend": 5500000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2021-08-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 20.0,
          "month": "2021-08-01",
          "source": "Organic Social",
          "spend": 5000000.0
        },
        {
          "cpl": 500000.0,
          "leads": 23.0,
          "month": "2021-08-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "cpl": 254074.07407407407,
          "leads": 135.0,
          "month": "2021-09-01",
          "source": "(all)",
          "spend": 34300000.0
        },
        {
          "cpl": 113636.36363636363,
          "leads": 44.0,
          "month": "2021-09-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 24.0,
          "month": "2021-09-01",
          "source": "Direct",
          "spend": 6000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 28.0,
          "month": "2021-09-01",
          "source": "Organic Search",
          "spend": 7000000.0
        },
        {
          "cpl": 253846.15384615384,
          "leads": 13.0,
          "month": "2021-09-01",
          "source": "Organic Social",
          "spend": 3300000.0
        },
        {
          "cpl": 500000.0,
          "leads": 26.0,
          "month": "2021-09-01",
          "source": "Refferal",
          "spend": 13000000.0
        },
        {
          "cpl": 284269.6629213483,
          "leads": 89.0,
          "month": "2021-10-01",
          "source": "(all)",
          "spend": 25300000.0
        },
        {
          "cpl": 130434.78260869565,
          "leads": 23.0,
          "month": "2021-10-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 16.0,
          "month": "2021-10-01",
          "source": "Direct",
          "spend": 4000000.0
        },
        {
          "cpl": 254545.45454545456,
          "leads": 11.0,
          "month": "2021-10-01",
          "source": "Organic Search",
          "spend": 2800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 16.0,
          "month": "2021-10-01",
          "source": "Organic Social",
          "spend": 4000000.0
        },
        {
          "cpl": 500000.0,
          "leads": 23.0,
          "month": "2021-10-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "cpl": 259829.05982905984,
          "leads": 117.0,
          "month": "2021-11-01",
          "source": "(all)",
          "spend": 30400000.0
        },
        {
          "cpl": 108108.1081081081,
          "leads": 37.0,
          "month": "2021-11-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 251724.1379310345,
          "leads": 29.0,
          "month": "2021-11-01",
          "source": "Direct",
          "spend": 7300000.0
        },
        {
          "cpl": 253846.15384615384,
          "leads": 13.0,
          "month": "2021-11-01",
          "source": "Organic Search",
          "spend": 3300000.0
        },
        {
          "cpl": 253846.15384615384,
          "leads": 13.0,
          "month": "2021-11-01",
          "source": "Organic Social",
          "spend": 3300000.0
        },
        {
          "cpl": 500000.0,
          "leads": 25.0,
          "month": "2021-11-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "cpl": 260648.14814814815,
          "leads": 216.0,
          "month": "2021-12-01",
          "source": "(all)",
          "spend": 56300000.0
        },
        {
          "cpl": 104477.6119402985,
          "leads": 67.0,
          "month": "2021-12-01",
          "source": "CPC",
          "spend": 7000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 32.0,
          "month": "2021-12-01",
          "source": "Direct",
          "spend": 8000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 38.0,
          "month": "2021-12-01",
          "source": "Organic Search",
          "spend": 9500000.0
        },
        {
          "cpl": 251612.90322580645,
          "leads": 31.0,
          "month": "2021-12-01",
          "source": "Organic Social",
          "spend": 7800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 48.0,
          "month": "2021-12-01",
          "source": "Refferal",
          "spend": 24000000.0
        },
        {
          "cpl": 258823.5294117647,
          "leads": 119.0,
          "month": "2022-01-01",
          "source": "(all)",
          "spend": 30800000.0
        },
        {
          "cpl": 111111.11111111111,
          "leads": 36.0,
          "month": "2022-01-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 26.0,
          "month": "2022-01-01",
          "source": "Direct",
          "spend": 6500000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2022-01-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 18.0,
          "month": "2022-01-01",
          "source": "Organic Social",
          "spend": 4500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 24.0,
          "month": "2022-01-01",
          "source": "Refferal",
          "spend": 12000000.0
        },
        {
          "cpl": 269000.0,
          "leads": 100.0,
          "month": "2022-02-01",
          "source": "(all)",
          "spend": 26900000.0
        },
        {
          "cpl": 107142.85714285714,
          "leads": 28.0,
          "month": "2022-02-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "cpl": 252000.0,
          "leads": 25.0,
          "month": "2022-02-01",
          "source": "Direct",
          "spend": 6300000.0
        },
        {
          "cpl": 253846.15384615384,
          "leads": 13.0,
          "month": "2022-02-01",
          "source": "Organic Search",
          "spend": 3300000.0
        },
        {
          "cpl": 254545.45454545456,
          "leads": 11.0,
          "month": "2022-02-01",
          "source": "Organic Social",
          "spend": 2800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 23.0,
          "month": "2022-02-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "cpl": 268636.36363636365,
          "leads": 220.0,
          "month": "2022-03-01",
          "source": "(all)",
          "spend": 59100000.0
        },
        {
          "cpl": 101449.27536231885,
          "leads": 69.0,
          "month": "2022-03-01",
          "source": "CPC",
          "spend": 7000000.0
        },
        {
          "cpl": 251111.11111111112,
          "leads": 45.0,
          "month": "2022-03-01",
          "source": "Direct",
          "spend": 11300000.0
        },
        {
          "cpl": 250000.0,
          "leads": 22.0,
          "month": "2022-03-01",
          "source": "Organic Search",
          "spend": 5500000.0
        },
        {
          "cpl": 251851.85185185185,
          "leads": 27.0,
          "month": "2022-03-01",
          "source": "Organic Social",
          "spend": 6800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 57.0,
          "month": "2022-03-01",
          "source": "Refferal",
          "spend": 28500000.0
        },
        {
          "cpl": 258620.6896551724,
          "leads": 116.0,
          "month": "2022-04-01",
          "source": "(all)",
          "spend": 30000000.0
        },
        {
          "cpl": 113636.36363636363,
          "leads": 44.0,
          "month": "2022-04-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 18.0,
          "month": "2022-04-01",
          "source": "Direct",
          "spend": 4500000.0
        },
        {
          "cpl": 250000.0,
          "leads": 14.0,
          "month": "2022-04-01",
          "source": "Organic Search",
          "spend": 3500000.0
        },
        {
          "cpl": 250000.0,
          "leads": 12.0,
          "month": "2022-04-01",
          "source": "Organic Social",
          "spend": 3000000.0
        },
        {
          "cpl": 500000.0,
          "leads": 28.0,
          "month": "2022-04-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "cpl": 290196.07843137253,
          "leads": 153.0,
          "month": "2022-05-01",
          "source": "(all)",
          "spend": 44400000.0
        },
        {
          "cpl": 108108.1081081081,
          "leads": 37.0,
          "month": "2022-05-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 252380.95238095237,
          "leads": 21.0,
          "month": "2022-05-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "cpl": 251515.15151515152,
          "leads": 33.0,
          "month": "2022-05-01",
          "source": "Organic Search",
          "spend": 8300000.0
        },
        {
          "cpl": 252941.17647058822,
          "leads": 17.0,
          "month": "2022-05-01",
          "source": "Organic Social",
          "spend": 4300000.0
        },
        {
          "cpl": 500000.0,
          "leads": 45.0,
          "month": "2022-05-01",
          "source": "Refferal",
          "spend": 22500000.0
        },
        {
          "cpl": 270564.51612903224,
          "leads": 248.0,
          "month": "2022-06-01",
          "source": "(all)",
          "spend": 67100000.0
        },
        {
          "cpl": 102564.10256410256,
          "leads": 78.0,
          "month": "2022-06-01",
          "source": "CPC",
          "spend": 8000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 42.0,
          "month": "2022-06-01",
          "source": "Direct",
          "spend": 10500000.0
        },
        {
          "cpl": 251612.90322580645,
          "leads": 31.0,
          "month": "2022-06-01",
          "source": "Organic Search",
          "spend": 7800000.0
        },
        {
          "cpl": 251612.90322580645,
          "leads": 31.0,
          "month": "2022-06-01",
          "source": "Organic Social",
          "spend": 7800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 66.0,
          "month": "2022-06-01",
          "source": "Refferal",
          "spend": 33000000.0
        },
        {
          "cpl": 282786.88524590165,
          "leads": 122.0,
          "month": "2022-07-01",
          "source": "(all)",
          "spend": 34500000.0
        },
        {
          "cpl": 129032.25806451614,
          "leads": 31.0,
          "month": "2022-07-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 14.0,
          "month": "2022-07-01",
          "source": "Direct",
          "spend": 3500000.0
        },
        {
          "cpl": 250000.0,
          "leads": 20.0,
          "month": "2022-07-01",
          "source": "Organic Search",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 26.0,
          "month": "2022-07-01",
          "source": "Organic Social",
          "spend": 6500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 31.0,
          "month": "2022-07-01",
          "source": "Refferal",
          "spend": 15500000.0
        },
        {
          "cpl": 265662.6506024096,
          "leads": 166.0,
          "month": "2022-08-01",
          "source": "(all)",
          "spend": 44100000.0
        },
        {
          "cpl": 105263.15789473684,
          "leads": 57.0,
          "month": "2022-08-01",
          "source": "CPC",
          "spend": 6000000.0
        },
        {
          "cpl": 251851.85185185185,
          "leads": 27.0,
          "month": "2022-08-01",
          "source": "Direct",
          "spend": 6800000.0
        },
        {
          "cpl": 252000.0,
          "leads": 25.0,
          "month": "2022-08-01",
          "source": "Organic Search",
          "spend": 6300000.0
        },
        {
          "cpl": 250000.0,
          "leads": 14.0,
          "month": "2022-08-01",
          "source": "Organic Social",
          "spend": 3500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 43.0,
          "month": "2022-08-01",
          "source": "Refferal",
          "spend": 21500000.0
        },
        {
          "cpl": 271383.6477987421,
          "leads": 318.0,
          "month": "2022-09-01",
          "source": "(all)",
          "spend": 86300000.0
        },
        {
          "cpl": 105263.15789473684,
          "leads": 95.0,
          "month": "2022-09-01",
          "source": "CPC",
          "spend": 10000000.0
        },
        {
          "cpl": 250980.39215686274,
          "leads": 51.0,
          "month": "2022-09-01",
          "source": "Direct",
          "spend": 12800000.0
        },
        {
          "cpl": 250000.0,
          "leads": 56.0,
          "month": "2022-09-01",
          "source": "Organic Search",
          "spend": 14000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 34.0,
          "month": "2022-09-01",
          "source": "Organic Social",
          "spend": 8500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 82.0,
          "month": "2022-09-01",
          "source": "Refferal",
          "spend": 41000000.0
        },
        {
          "cpl": 259393.9393939394,
          "leads": 165.0,
          "month": "2022-10-01",
          "source": "(all)",
          "spend": 42800000.0
        },
        {
          "cpl": 108695.65217391304,
          "leads": 46.0,
          "month": "2022-10-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "cpl": 251724.1379310345,
          "leads": 29.0,
          "month": "2022-10-01",
          "source": "Direct",
          "spend": 7300000.0
        },
        {
          "cpl": 250000.0,
          "leads": 24.0,
          "month": "2022-10-01",
          "source": "Organic Search",
          "spend": 6000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 34.0,
          "month": "2022-10-01",
          "source": "Organic Social",
          "spend": 8500000.0
        },
        {
          "cpl": 500000.0,
          "leads": 32.0,
          "month": "2022-10-01",
          "source": "Refferal",
          "spend": 16000000.0
        },
        {
          "cpl": 269491.5254237288,
          "leads": 118.0,
          "month": "2022-11-01",
          "source": "(all)",
          "spend": 31800000.0
        },
        {
          "cpl": 117647.05882352941,
          "leads": 34.0,
          "month": "2022-11-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 20.0,
          "month": "2022-11-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 22.0,
          "month": "2022-11-01",
          "source": "Organic Search",
          "spend": 5500000.0
        },
        {
          "cpl": 253333.33333333334,
          "leads": 15.0,
          "month": "2022-11-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "cpl": 500000.0,
          "leads": 27.0,
          "month": "2022-11-01",
          "source": "Refferal",
          "spend": 13500000.0
        },
        {
          "cpl": 350000.0,
          "leads": 8.0,
          "month": "2022-12-01",
          "source": "(all)",
          "spend": 2800000.0
        },
        {
          "cpl": 333333.3333333333,
          "leads": 3.0,
          "month": "2022-12-01",
          "source": "CPC",
          "spend": 1000000.0
        },
        {
          "cpl": 250000.0,
          "leads": 2.0,
          "month": "2022-12-01",
          "source": "Direct",
          "spend": 500000.0
        },
        {
          "cpl": 300000.0,
          "leads": 1.0,
          "month": "2022-12-01",
          "source": "Organic Search",
          "spend": 300000.0
        },
        {
          "cpl": 500000.0,
          "leads": 2.0,
          "month": "2022-12-01",
          "source": "Refferal",
          "spend": 1000000.0
        }
      ]
    },
    "csat": {
      "call": {},
      "metric": "csat",
      "rows": [
        {
          "csat": 2.655937846836848,
          "dimension": "csat_response_time",
          "n": 901
        },
        {
          "csat": 2.8279689234184238,
          "dimension": "csat_product_knowledge",
          "n": 901
        },
        {
          "csat": 2.874583795782464,
          "dimension": "csat_pre_sales_information",
          "n": 901
        },
        {
          "csat": 3.195338512763596,
          "dimension": "csat_communication",
          "n": 901
        }
      ]
    },
    "discounted_deal_share": {
      "call": {},
      "metric": "discounted_deal_share",
      "rows": [
        {
          "contracts": 33,
          "discounted": 33,
          "month": "2021-01-01",
          "share": 1.0
        },
        {
          "contracts": 24,
          "discounted": 0,
          "month": "2021-02-01",
          "share": 0.0
        },
        {
          "contracts": 22,
          "discounted": 0,
          "month": "2021-03-01",
          "share": 0.0
        },
        {
          "contracts": 36,
          "discounted": 36,
          "month": "2021-04-01",
          "share": 1.0
        },
        {
          "contracts": 26,
          "discounted": 0,
          "month": "2021-05-01",
          "share": 0.0
        },
        {
          "contracts": 24,
          "discounted": 0,
          "month": "2021-06-01",
          "share": 0.0
        },
        {
          "contracts": 36,
          "discounted": 36,
          "month": "2021-07-01",
          "share": 1.0
        },
        {
          "contracts": 27,
          "discounted": 0,
          "month": "2021-08-01",
          "share": 0.0
        },
        {
          "contracts": 26,
          "discounted": 0,
          "month": "2021-09-01",
          "share": 0.0
        },
        {
          "contracts": 39,
          "discounted": 39,
          "month": "2021-10-01",
          "share": 1.0
        },
        {
          "contracts": 28,
          "discounted": 0,
          "month": "2021-11-01",
          "share": 0.0
        },
        {
          "contracts": 26,
          "discounted": 0,
          "month": "2021-12-01",
          "share": 0.0
        },
        {
          "contracts": 88,
          "discounted": 56,
          "month": "2022-01-01",
          "share": 0.6363636363636364
        },
        {
          "contracts": 51,
          "discounted": 0,
          "month": "2022-02-01",
          "share": 0.0
        },
        {
          "contracts": 43,
          "discounted": 0,
          "month": "2022-03-01",
          "share": 0.0
        },
        {
          "contracts": 98,
          "discounted": 67,
          "month": "2022-04-01",
          "share": 0.6836734693877551
        },
        {
          "contracts": 57,
          "discounted": 0,
          "month": "2022-05-01",
          "share": 0.0
        },
        {
          "contracts": 50,
          "discounted": 0,
          "month": "2022-06-01",
          "share": 0.0
        },
        {
          "contracts": 115,
          "discounted": 79,
          "month": "2022-07-01",
          "share": 0.6869565217391305
        },
        {
          "contracts": 63,
          "discounted": 0,
          "month": "2022-08-01",
          "share": 0.0
        },
        {
          "contracts": 53,
          "discounted": 0,
          "month": "2022-09-01",
          "share": 0.0
        },
        {
          "contracts": 131,
          "discounted": 96,
          "month": "2022-10-01",
          "share": 0.732824427480916
        },
        {
          "contracts": 73,
          "discounted": 0,
          "month": "2022-11-01",
          "share": 0.0
        },
        {
          "contracts": 57,
          "discounted": 0,
          "month": "2022-12-01",
          "share": 0.0
        },
        {
          "contracts": 55,
          "discounted": 0,
          "month": "2023-01-01",
          "share": 0.0
        },
        {
          "contracts": 27,
          "discounted": 0,
          "month": "2023-02-01",
          "share": 0.0
        },
        {
          "contracts": 21,
          "discounted": 0,
          "month": "2023-03-01",
          "share": 0.0
        },
        {
          "contracts": 64,
          "discounted": 0,
          "month": "2023-04-01",
          "share": 0.0
        },
        {
          "contracts": 31,
          "discounted": 0,
          "month": "2023-05-01",
          "share": 0.0
        },
        {
          "contracts": 26,
          "discounted": 0,
          "month": "2023-06-01",
          "share": 0.0
        },
        {
          "contracts": 75,
          "discounted": 0,
          "month": "2023-07-01",
          "share": 0.0
        },
        {
          "contracts": 34,
          "discounted": 0,
          "month": "2023-08-01",
          "share": 0.0
        },
        {
          "contracts": 29,
          "discounted": 0,
          "month": "2023-09-01",
          "share": 0.0
        },
        {
          "contracts": 90,
          "discounted": 0,
          "month": "2023-10-01",
          "share": 0.0
        },
        {
          "contracts": 45,
          "discounted": 0,
          "month": "2023-11-01",
          "share": 0.0
        },
        {
          "contracts": 31,
          "discounted": 0,
          "month": "2023-12-01",
          "share": 0.0
        }
      ]
    },
    "dropoff_leads": {
      "call": {},
      "metric": "dropoff_leads",
      "rows": [
        {
          "dropoff": 506,
          "reach": 3397,
          "stage_name": "leads_registered"
        },
        {
          "dropoff": 285,
          "reach": 2891,
          "stage_name": "leads_qualification"
        },
        {
          "dropoff": 374,
          "reach": 2606,
          "stage_name": "initial_communication_success"
        },
        {
          "dropoff": 427,
          "reach": 2232,
          "stage_name": "approach_success"
        },
        {
          "dropoff": 414,
          "reach": 1805,
          "stage_name": "discussion_success"
        },
        {
          "dropoff": 286,
          "reach": 1391,
          "stage_name": "offer_sent"
        },
        {
          "dropoff": 204,
          "reach": 1105,
          "stage_name": "quotation_recieved"
        },
        {
          "dropoff": null,
          "reach": 901,
          "stage_name": "deal_won"
        }
      ]
    },
    "dropoff_reason_mix": {
      "call": {},
      "metric": "dropoff_reason_mix",
      "rows": [
        {
          "n": 285,
          "reason": "not selected",
          "share": 1.0,
          "stage_name": "leads_qualification"
        },
        {
          "n": 286,
          "reason": "not answered",
          "share": 0.7647058823529411,
          "stage_name": "initial_communication_success"
        },
        {
          "n": 88,
          "reason": "not interested",
          "share": 0.23529411764705882,
          "stage_name": "initial_communication_success"
        },
        {
          "n": 201,
          "reason": "not answered",
          "share": 0.4707259953161593,
          "stage_name": "approach_success"
        },
        {
          "n": 146,
          "reason": "not interested",
          "share": 0.34192037470725994,
          "stage_name": "approach_success"
        },
        {
          "n": 80,
          "reason": "already use other products",
          "share": 0.1873536299765808,
          "stage_name": "approach_success"
        },
        {
          "n": 167,
          "reason": "price not fit",
          "share": 0.4033816425120773,
          "stage_name": "discussion_success"
        },
        {
          "n": 138,
          "reason": "not interested",
          "share": 0.3333333333333333,
          "stage_name": "discussion_success"
        },
        {
          "n": 109,
          "reason": "not answered",
          "share": 0.2632850241545894,
          "stage_name": "discussion_success"
        },
        {
          "n": 113,
          "reason": "not answered",
          "share": 0.3951048951048951,
          "stage_name": "offer_sent"
        },
        {
          "n": 110,
          "reason": "price not fit",
          "share": 0.38461538461538464,
          "stage_name": "offer_sent"
        },
        {
          "n": 63,
          "reason": "not interested",
          "share": 0.2202797202797203,
          "stage_name": "offer_sent"
        },
        {
          "n": 105,
          "reason": "price not fit",
          "share": 0.5147058823529411,
          "stage_name": "quotation_recieved"
        },
        {
          "n": 99,
          "reason": "not answered",
          "share": 0.4852941176470588,
          "stage_name": "quotation_recieved"
        }
      ]
    },
    "engagement_depth": {
      "call": {},
      "metric": "engagement_depth",
      "rows": [
        {
          "depth_bucket": "1-2",
          "leads": 967,
          "win_rate": 0.2936918304033092
        },
        {
          "depth_bucket": "3-4",
          "leads": 1485,
          "win_rate": 0.2377104377104377
        },
        {
          "depth_bucket": "5-6",
          "leads": 945,
          "win_rate": 0.27936507936507937
        }
      ]
    },
    "first_touch_page": {
      "call": {},
      "metric": "first_touch_page",
      "rows": [
        {
          "first_page": "/home",
          "leads": 915,
          "win_rate": 0.2371584699453552
        },
        {
          "first_page": "/portofolio",
          "leads": 579,
          "win_rate": 0.25734024179620035
        },
        {
          "first_page": "/features",
          "leads": 567,
          "win_rate": 0.25573192239858905
        },
        {
          "first_page": "/studycase",
          "leads": 463,
          "win_rate": 0.2915766738660907
        },
        {
          "first_page": "/testimonials",
          "leads": 377,
          "win_rate": 0.2519893899204244
        },
        {
          "first_page": "/form/set-a-meeting",
          "leads": 324,
          "win_rate": 0.35802469135802467
        },
        {
          "first_page": "/form/brochure",
          "leads": 145,
          "win_rate": 0.2620689655172414
        },
        {
          "first_page": "/form/demo",
          "leads": 27,
          "win_rate": 0.2222222222222222
        }
      ]
    },
    "form_funnel": {
      "call": {},
      "metric": "form_funnel",
      "rows": [
        {
          "leads": 1472,
          "page_name": "/form/brochure",
          "share": 0.43332352075360614
        },
        {
          "leads": 1291,
          "page_name": "/form/set-a-meeting",
          "share": 0.38004121283485426
        },
        {
          "leads": 1161,
          "page_name": "/form/demo",
          "share": 0.34177215189873417
        },
        {
          "leads": 387,
          "page_name": "/form/publications",
          "share": 0.11392405063291139
        }
      ]
    },
    "gmv_by_industry": {
      "call": {
        "dim": "industry"
      },
      "metric": "gmv_by_dimension",
      "rows": [
        {
          "contracts": 470,
          "gmv": 1144402500.0,
          "industry": "Technology"
        },
        {
          "contracts": 360,
          "gmv": 1015910000.0,
          "industry": "Retail"
        },
        {
          "contracts": 243,
          "gmv": 840395000.0,
          "industry": "Finance"
        },
        {
          "contracts": 330,
          "gmv": 527700000.0,
          "industry": "F&B"
        },
        {
          "contracts": 225,
          "gmv": 394005000.0,
          "industry": "Education"
        },
        {
          "contracts": 126,
          "gmv": 289290000.0,
          "industry": "Hospitality"
        }
      ]
    },
    "gmv_by_source": {
      "call": {
        "dim": "source"
      },
      "metric": "gmv_by_dimension",
      "rows": [
        {
          "contracts": 488,
          "gmv": 1822665000.0,
          "source": "Refferal"
        },
        {
          "contracts": 522,
          "gmv": 789340000.0,
          "source": "CPC"
        },
        {
          "contracts": 322,
          "gmv": 754907500.0,
          "source": "Direct"
        },
        {
          "contracts": 202,
          "gmv": 483905000.0,
          "source": "Organic Search"
        },
        {
          "contracts": 220,
          "gmv": 360885000.0,
          "source": "Organic Social"
        }
      ]
    },
    "gmv_monthly": {
      "call": {},
      "metric": "gmv_monthly",
      "rows": [
        {
          "gmv": 65362500.0,
          "month": "2021-01-01",
          "new_gmv": 65362500.0,
          "renewal_gmv": null
        },
        {
          "gmv": 43825000.0,
          "month": "2021-02-01",
          "new_gmv": 43825000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 55175000.0,
          "month": "2021-03-01",
          "new_gmv": 55175000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 79762500.0,
          "month": "2021-04-01",
          "new_gmv": 79762500.0,
          "renewal_gmv": null
        },
        {
          "gmv": 55025000.0,
          "month": "2021-05-01",
          "new_gmv": 55025000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 45925000.0,
          "month": "2021-06-01",
          "new_gmv": 45925000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 81495000.0,
          "month": "2021-07-01",
          "new_gmv": 81495000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 74650000.0,
          "month": "2021-08-01",
          "new_gmv": 74650000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 64900000.0,
          "month": "2021-09-01",
          "new_gmv": 64900000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 91867500.0,
          "month": "2021-10-01",
          "new_gmv": 91867500.0,
          "renewal_gmv": null
        },
        {
          "gmv": 61950000.0,
          "month": "2021-11-01",
          "new_gmv": 61950000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 58450000.0,
          "month": "2021-12-01",
          "new_gmv": 58450000.0,
          "renewal_gmv": null
        },
        {
          "gmv": 181675000.0,
          "month": "2022-01-01",
          "new_gmv": 112600000.0,
          "renewal_gmv": 69075000.0
        },
        {
          "gmv": 124275000.0,
          "month": "2022-02-01",
          "new_gmv": 82975000.0,
          "renewal_gmv": 41300000.0
        },
        {
          "gmv": 111125000.0,
          "month": "2022-03-01",
          "new_gmv": 58950000.0,
          "renewal_gmv": 52175000.0
        },
        {
          "gmv": 219820000.0,
          "month": "2022-04-01",
          "new_gmv": 143220000.0,
          "renewal_gmv": 76600000.0
        },
        {
          "gmv": 131250000.0,
          "month": "2022-05-01",
          "new_gmv": 76225000.0,
          "renewal_gmv": 55025000.0
        },
        {
          "gmv": 124725000.0,
          "month": "2022-06-01",
          "new_gmv": 81200000.0,
          "renewal_gmv": 43525000.0
        },
        {
          "gmv": 253590000.0,
          "month": "2022-07-01",
          "new_gmv": 164040000.0,
          "renewal_gmv": 89550000.0
        },
        {
          "gmv": 172875000.0,
          "month": "2022-08-01",
          "new_gmv": 105725000.0,
          "renewal_gmv": 67150000.0
        },
        {
          "gmv": 153250000.0,
          "month": "2022-09-01",
          "new_gmv": 96450000.0,
          "renewal_gmv": 56800000.0
        },
        {
          "gmv": 277705000.0,
          "month": "2022-10-01",
          "new_gmv": 191880000.0,
          "renewal_gmv": 85825000.0
        },
        {
          "gmv": 173950000.0,
          "month": "2022-11-01",
          "new_gmv": 114050000.0,
          "renewal_gmv": 59900000.0
        },
        {
          "gmv": 128000000.0,
          "month": "2022-12-01",
          "new_gmv": 78300000.0,
          "renewal_gmv": 49700000.0
        },
        {
          "gmv": 139750000.0,
          "month": "2023-01-01",
          "new_gmv": null,
          "renewal_gmv": 139750000.0
        },
        {
          "gmv": 76225000.0,
          "month": "2023-02-01",
          "new_gmv": null,
          "renewal_gmv": 76225000.0
        },
        {
          "gmv": 57750000.0,
          "month": "2023-03-01",
          "new_gmv": null,
          "renewal_gmv": 57750000.0
        },
        {
          "gmv": 171550000.0,
          "month": "2023-04-01",
          "new_gmv": null,
          "renewal_gmv": 171550000.0
        },
        {
          "gmv": 76225000.0,
          "month": "2023-05-01",
          "new_gmv": null,
          "renewal_gmv": 76225000.0
        },
        {
          "gmv": 75200000.0,
          "month": "2023-06-01",
          "new_gmv": null,
          "renewal_gmv": 75200000.0
        },
        {
          "gmv": 188225000.0,
          "month": "2023-07-01",
          "new_gmv": null,
          "renewal_gmv": 188225000.0
        },
        {
          "gmv": 99050000.0,
          "month": "2023-08-01",
          "new_gmv": null,
          "renewal_gmv": 99050000.0
        },
        {
          "gmv": 93650000.0,
          "month": "2023-09-01",
          "new_gmv": null,
          "renewal_gmv": 93650000.0
        },
        {
          "gmv": 225925000.0,
          "month": "2023-10-01",
          "new_gmv": null,
          "renewal_gmv": 225925000.0
        },
        {
          "gmv": 106550000.0,
          "month": "2023-11-01",
          "new_gmv": null,
          "renewal_gmv": 106550000.0
        },
        {
          "gmv": 70975000.0,
          "month": "2023-12-01",
          "new_gmv": null,
          "renewal_gmv": 70975000.0
        }
      ]
    },
    "leads_by_industry": {
      "call": {
        "dim": "industry"
      },
      "metric": "leads_by_dimension",
      "rows": [
        {
          "industry": "Technology",
          "leads": 901,
          "win_rate": 0.26748057713651496
        },
        {
          "industry": "F&B",
          "leads": 730,
          "win_rate": 0.23013698630136986
        },
        {
          "industry": "Retail",
          "leads": 670,
          "win_rate": 0.27761194029850744
        },
        {
          "industry": "Finance",
          "leads": 455,
          "win_rate": 0.27472527472527475
        },
        {
          "industry": "Education",
          "leads": 424,
          "win_rate": 0.27358490566037735
        },
        {
          "industry": "Hospitality",
          "leads": 217,
          "win_rate": 0.2995391705069124
        }
      ]
    },
    "leads_by_source": {
      "call": {
        "dim": "source"
      },
      "metric": "leads_by_dimension",
      "rows": [
        {
          "leads": 1064,
          "source": "CPC",
          "win_rate": 0.24906015037593984
        },
        {
          "leads": 790,
          "source": "Refferal",
          "win_rate": 0.320253164556962
        },
        {
          "leads": 598,
          "source": "Direct",
          "win_rate": 0.2809364548494983
        },
        {
          "leads": 482,
          "source": "Organic Search",
          "win_rate": 0.2157676348547718
        },
        {
          "leads": 463,
          "source": "Organic Social",
          "win_rate": 0.23974082073434125
        }
      ]
    },
    "leads_registered": {
      "call": {},
      "metric": "leads_registered",
      "rows": [
        {
          "leads": 10,
          "month": "2020-11-01"
        },
        {
          "leads": 111,
          "month": "2020-12-01"
        },
        {
          "leads": 108,
          "month": "2021-01-01"
        },
        {
          "leads": 79,
          "month": "2021-02-01"
        },
        {
          "leads": 122,
          "month": "2021-03-01"
        },
        {
          "leads": 120,
          "month": "2021-04-01"
        },
        {
          "leads": 95,
          "month": "2021-05-01"
        },
        {
          "leads": 121,
          "month": "2021-06-01"
        },
        {
          "leads": 106,
          "month": "2021-07-01"
        },
        {
          "leads": 115,
          "month": "2021-08-01"
        },
        {
          "leads": 135,
          "month": "2021-09-01"
        },
        {
          "leads": 89,
          "month": "2021-10-01"
        },
        {
          "leads": 117,
          "month": "2021-11-01"
        },
        {
          "leads": 216,
          "month": "2021-12-01"
        },
        {
          "leads": 119,
          "month": "2022-01-01"
        },
        {
          "leads": 100,
          "month": "2022-02-01"
        },
        {
          "leads": 220,
          "month": "2022-03-01"
        },
        {
          "leads": 116,
          "month": "2022-04-01"
        },
        {
          "leads": 153,
          "month": "2022-05-01"
        },
        {
          "leads": 248,
          "month": "2022-06-01"
        },
        {
          "leads": 122,
          "month": "2022-07-01"
        },
        {
          "leads": 166,
          "month": "2022-08-01"
        },
        {
          "leads": 318,
          "month": "2022-09-01"
        },
        {
          "leads": 165,
          "month": "2022-10-01"
        },
        {
          "leads": 118,
          "month": "2022-11-01"
        },
        {
          "leads": 8,
          "month": "2022-12-01"
        }
      ]
    },
    "net_gmv_retention": {
      "call": {},
      "metric": "net_gmv_retention",
      "rows": [
        {
          "accounts": 33,
          "cohort_month": "2021-01-01",
          "gmv_first": 65362500.0,
          "gmv_renewal": 69075000.0,
          "nrr": 1.0567986230636832
        },
        {
          "accounts": 24,
          "cohort_month": "2021-02-01",
          "gmv_first": 43825000.0,
          "gmv_renewal": 41300000.0,
          "nrr": 0.9423844837421563
        },
        {
          "accounts": 22,
          "cohort_month": "2021-03-01",
          "gmv_first": 55175000.0,
          "gmv_renewal": 52175000.0,
          "nrr": 0.9456275487086543
        },
        {
          "accounts": 36,
          "cohort_month": "2021-04-01",
          "gmv_first": 79762500.0,
          "gmv_renewal": 76600000.0,
          "nrr": 0.9603510421564018
        },
        {
          "accounts": 26,
          "cohort_month": "2021-05-01",
          "gmv_first": 55025000.0,
          "gmv_renewal": 55025000.0,
          "nrr": 1.0
        },
        {
          "accounts": 24,
          "cohort_month": "2021-06-01",
          "gmv_first": 45925000.0,
          "gmv_renewal": 43525000.0,
          "nrr": 0.9477408818726184
        },
        {
          "accounts": 36,
          "cohort_month": "2021-07-01",
          "gmv_first": 81495000.0,
          "gmv_renewal": 89550000.0,
          "nrr": 1.0988404196576478
        },
        {
          "accounts": 27,
          "cohort_month": "2021-08-01",
          "gmv_first": 74650000.0,
          "gmv_renewal": 67150000.0,
          "nrr": 0.899531145344943
        },
        {
          "accounts": 26,
          "cohort_month": "2021-09-01",
          "gmv_first": 64900000.0,
          "gmv_renewal": 56800000.0,
          "nrr": 0.8751926040061633
        },
        {
          "accounts": 39,
          "cohort_month": "2021-10-01",
          "gmv_first": 91867500.0,
          "gmv_renewal": 85825000.0,
          "nrr": 0.9342259232046154
        },
        {
          "accounts": 28,
          "cohort_month": "2021-11-01",
          "gmv_first": 61950000.0,
          "gmv_renewal": 59900000.0,
          "nrr": 0.966908797417272
        },
        {
          "accounts": 26,
          "cohort_month": "2021-12-01",
          "gmv_first": 58450000.0,
          "gmv_renewal": 49700000.0,
          "nrr": 0.8502994011976048
        },
        {
          "accounts": 56,
          "cohort_month": "2022-01-01",
          "gmv_first": 112600000.0,
          "gmv_renewal": 139750000.0,
          "nrr": 1.2411190053285968
        },
        {
          "accounts": 29,
          "cohort_month": "2022-02-01",
          "gmv_first": 82975000.0,
          "gmv_renewal": 76225000.0,
          "nrr": 0.9186501958421212
        },
        {
          "accounts": 22,
          "cohort_month": "2022-03-01",
          "gmv_first": 58950000.0,
          "gmv_renewal": 57750000.0,
          "nrr": 0.9796437659033079
        },
        {
          "accounts": 67,
          "cohort_month": "2022-04-01",
          "gmv_first": 143220000.0,
          "gmv_renewal": 171550000.0,
          "nrr": 1.1978075687753107
        },
        {
          "accounts": 31,
          "cohort_month": "2022-05-01",
          "gmv_first": 76225000.0,
          "gmv_renewal": 76225000.0,
          "nrr": 1.0
        },
        {
          "accounts": 27,
          "cohort_month": "2022-06-01",
          "gmv_first": 81200000.0,
          "gmv_renewal": 75200000.0,
          "nrr": 0.9261083743842364
        },
        {
          "accounts": 79,
          "cohort_month": "2022-07-01",
          "gmv_first": 164040000.0,
          "gmv_renewal": 188225000.0,
          "nrr": 1.1474335527920019
        },
        {
          "accounts": 37,
          "cohort_month": "2022-08-01",
          "gmv_first": 105725000.0,
          "gmv_renewal": 99050000.0,
          "nrr": 0.9368645069756444
        },
        {
          "accounts": 30,
          "cohort_month": "2022-09-01",
          "gmv_first": 96450000.0,
          "gmv_renewal": 93650000.0,
          "nrr": 0.9709694142042509
        },
        {
          "accounts": 96,
          "cohort_month": "2022-10-01",
          "gmv_first": 191880000.0,
          "gmv_renewal": 225925000.0,
          "nrr": 1.177428601209089
        },
        {
          "accounts": 46,
          "cohort_month": "2022-11-01",
          "gmv_first": 114050000.0,
          "gmv_renewal": 106550000.0,
          "nrr": 0.9342393686979396
        },
        {
          "accounts": 34,
          "cohort_month": "2022-12-01",
          "gmv_first": 78300000.0,
          "gmv_renewal": 70975000.0,
          "nrr": 0.9064495530012772
        },
        {
          "accounts": 901,
          "cohort_month": null,
          "gmv_first": 2084002500.0,
          "gmv_renewal": 2127700000.0,
          "nrr": 1.0209680650575035
        }
      ]
    },
    "nps": {
      "call": {},
      "metric": "nps",
      "rows": [
        {
          "detractor_share": 0.10099889012208657,
          "n": 901,
          "nps": 0.2008879023307436,
          "passive_share": 0.5971143174250833,
          "promoter_share": 0.3018867924528302
        }
      ]
    },
    "nps_by_industry": {
      "call": {
        "dim": "industry"
      },
      "metric": "nps_by_dimension",
      "rows": [
        {
          "industry": "Technology",
          "n": 241,
          "nps": 0.19502074688796678
        },
        {
          "industry": "Retail",
          "n": 186,
          "nps": 0.15053763440860213
        },
        {
          "industry": "F&B",
          "n": 168,
          "nps": 0.2619047619047619
        },
        {
          "industry": "Finance",
          "n": 125,
          "nps": 0.11199999999999999
        },
        {
          "industry": "Education",
          "n": 116,
          "nps": 0.2931034482758621
        },
        {
          "industry": "Hospitality",
          "n": 65,
          "nps": 0.2153846153846154
        }
      ]
    },
    "nps_by_source": {
      "call": {
        "dim": "source"
      },
      "metric": "nps_by_dimension",
      "rows": [
        {
          "n": 265,
          "nps": 0.22641509433962262,
          "source": "CPC"
        },
        {
          "n": 253,
          "nps": 0.1067193675889328,
          "source": "Refferal"
        },
        {
          "n": 168,
          "nps": 0.23214285714285712,
          "source": "Direct"
        },
        {
          "n": 111,
          "nps": 0.24324324324324326,
          "source": "Organic Social"
        },
        {
          "n": 104,
          "nps": 0.2692307692307692,
          "source": "Organic Search"
        }
      ]
    },
    "nps_by_tier": {
      "call": {
        "dim": "subscription_type"
      },
      "metric": "nps_by_dimension",
      "rows": [
        {
          "n": 364,
          "nps": 0.2802197802197802,
          "subscription_type": "Business"
        },
        {
          "n": 320,
          "nps": 0.20937499999999998,
          "subscription_type": "Startup"
        },
        {
          "n": 217,
          "nps": 0.055299539170506895,
          "subscription_type": "Enterprise"
        }
      ]
    },
    "nps_monthly": {
      "call": {},
      "metric": "nps_monthly",
      "rows": [
        {
          "month": "2021-01",
          "n": 33,
          "nps": 0.2727272727272727
        },
        {
          "month": "2021-02",
          "n": 24,
          "nps": 0.29166666666666663
        },
        {
          "month": "2021-03",
          "n": 22,
          "nps": -0.09090909090909091
        },
        {
          "month": "2021-04",
          "n": 36,
          "nps": 0.3055555555555555
        },
        {
          "month": "2021-05",
          "n": 26,
          "nps": 0.2692307692307692
        },
        {
          "month": "2021-06",
          "n": 24,
          "nps": 0.041666666666666685
        },
        {
          "month": "2021-07",
          "n": 36,
          "nps": 0.3055555555555556
        },
        {
          "month": "2021-08",
          "n": 27,
          "nps": 0.07407407407407407
        },
        {
          "month": "2021-09",
          "n": 26,
          "nps": 0.23076923076923075
        },
        {
          "month": "2021-10",
          "n": 39,
          "nps": 0.20512820512820515
        },
        {
          "month": "2021-11",
          "n": 28,
          "nps": -0.14285714285714285
        },
        {
          "month": "2021-12",
          "n": 26,
          "nps": 0.11538461538461539
        },
        {
          "month": "2022-01",
          "n": 56,
          "nps": 0.1607142857142857
        },
        {
          "month": "2022-02",
          "n": 29,
          "nps": 0.13793103448275862
        },
        {
          "month": "2022-03",
          "n": 22,
          "nps": 0.04545454545454544
        },
        {
          "month": "2022-04",
          "n": 67,
          "nps": 0.2835820895522388
        },
        {
          "month": "2022-05",
          "n": 31,
          "nps": 0.25806451612903225
        },
        {
          "month": "2022-06",
          "n": 27,
          "nps": 0.3333333333333333
        },
        {
          "month": "2022-07",
          "n": 79,
          "nps": 0.21518987341772153
        },
        {
          "month": "2022-08",
          "n": 37,
          "nps": 0.13513513513513514
        },
        {
          "month": "2022-09",
          "n": 30,
          "nps": 0.2666666666666666
        },
        {
          "month": "2022-10",
          "n": 96,
          "nps": 0.2604166666666667
        },
        {
          "month": "2022-11",
          "n": 46,
          "nps": 0.15217391304347824
        },
        {
          "month": "2022-12",
          "n": 34,
          "nps": 0.29411764705882354
        }
      ]
    },
    "nps_vs_time_to_deal": {
      "call": {},
      "metric": "nps_vs_time_to_deal",
      "rows": [
        {
          "bucket": "≤ 24 hari",
          "median_days": 22.88539351851852,
          "n": 37,
          "nps": 0.24324324324324326
        },
        {
          "bucket": "25–31 hari",
          "median_days": 28.058645833333333,
          "n": 401,
          "nps": 0.21945137157107233
        },
        {
          "bucket": "32–38 hari",
          "median_days": 33.92523148148148,
          "n": 427,
          "nps": 0.19672131147540983
        },
        {
          "bucket": "≥ 39 hari",
          "median_days": 38.996637731481485,
          "n": 36,
          "nps": 0.0
        }
      ]
    },
    "open_pipeline": {
      "call": {},
      "metric": "open_pipeline",
      "rows": [
        {
          "open_leads": 506
        }
      ]
    },
    "pages_per_lead": {
      "call": {},
      "metric": "pages_per_lead",
      "rows": [
        {
          "leads": 3397,
          "pages_per_lead": 3.198704739476008
        }
      ]
    },
    "pageviews": {
      "call": {},
      "metric": "pageviews",
      "rows": [
        {
          "month": "2020-11-01",
          "page_name": "/features",
          "pageviews": 7
        },
        {
          "month": "2020-11-01",
          "page_name": "/form/brochure",
          "pageviews": 8
        },
        {
          "month": "2020-11-01",
          "page_name": "/form/demo",
          "pageviews": 3
        },
        {
          "month": "2020-11-01",
          "page_name": "/form/publications",
          "pageviews": 1
        },
        {
          "month": "2020-11-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 4
        },
        {
          "month": "2020-11-01",
          "page_name": "/home",
          "pageviews": 3
        },
        {
          "month": "2020-11-01",
          "page_name": "/portofolio",
          "pageviews": 4
        },
        {
          "month": "2020-11-01",
          "page_name": "/studycase",
          "pageviews": 1
        },
        {
          "month": "2020-11-01",
          "page_name": "/testimonials",
          "pageviews": 7
        },
        {
          "month": "2020-12-01",
          "page_name": "/features",
          "pageviews": 55
        },
        {
          "month": "2020-12-01",
          "page_name": "/form/brochure",
          "pageviews": 50
        },
        {
          "month": "2020-12-01",
          "page_name": "/form/demo",
          "pageviews": 47
        },
        {
          "month": "2020-12-01",
          "page_name": "/form/publications",
          "pageviews": 14
        },
        {
          "month": "2020-12-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 49
        },
        {
          "month": "2020-12-01",
          "page_name": "/home",
          "pageviews": 34
        },
        {
          "month": "2020-12-01",
          "page_name": "/portofolio",
          "pageviews": 50
        },
        {
          "month": "2020-12-01",
          "page_name": "/studycase",
          "pageviews": 36
        },
        {
          "month": "2020-12-01",
          "page_name": "/testimonials",
          "pageviews": 44
        },
        {
          "month": "2021-01-01",
          "page_name": "/features",
          "pageviews": 68
        },
        {
          "month": "2021-01-01",
          "page_name": "/form/brochure",
          "pageviews": 60
        },
        {
          "month": "2021-01-01",
          "page_name": "/form/demo",
          "pageviews": 49
        },
        {
          "month": "2021-01-01",
          "page_name": "/form/publications",
          "pageviews": 5
        },
        {
          "month": "2021-01-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 34
        },
        {
          "month": "2021-01-01",
          "page_name": "/home",
          "pageviews": 29
        },
        {
          "month": "2021-01-01",
          "page_name": "/portofolio",
          "pageviews": 48
        },
        {
          "month": "2021-01-01",
          "page_name": "/studycase",
          "pageviews": 48
        },
        {
          "month": "2021-01-01",
          "page_name": "/testimonials",
          "pageviews": 40
        },
        {
          "month": "2021-02-01",
          "page_name": "/features",
          "pageviews": 32
        },
        {
          "month": "2021-02-01",
          "page_name": "/form/brochure",
          "pageviews": 41
        },
        {
          "month": "2021-02-01",
          "page_name": "/form/demo",
          "pageviews": 25
        },
        {
          "month": "2021-02-01",
          "page_name": "/form/publications",
          "pageviews": 5
        },
        {
          "month": "2021-02-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 27
        },
        {
          "month": "2021-02-01",
          "page_name": "/home",
          "pageviews": 21
        },
        {
          "month": "2021-02-01",
          "page_name": "/portofolio",
          "pageviews": 33
        },
        {
          "month": "2021-02-01",
          "page_name": "/studycase",
          "pageviews": 27
        },
        {
          "month": "2021-02-01",
          "page_name": "/testimonials",
          "pageviews": 49
        },
        {
          "month": "2021-03-01",
          "page_name": "/features",
          "pageviews": 64
        },
        {
          "month": "2021-03-01",
          "page_name": "/form/brochure",
          "pageviews": 56
        },
        {
          "month": "2021-03-01",
          "page_name": "/form/demo",
          "pageviews": 45
        },
        {
          "month": "2021-03-01",
          "page_name": "/form/publications",
          "pageviews": 14
        },
        {
          "month": "2021-03-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 47
        },
        {
          "month": "2021-03-01",
          "page_name": "/home",
          "pageviews": 42
        },
        {
          "month": "2021-03-01",
          "page_name": "/portofolio",
          "pageviews": 61
        },
        {
          "month": "2021-03-01",
          "page_name": "/studycase",
          "pageviews": 46
        },
        {
          "month": "2021-03-01",
          "page_name": "/testimonials",
          "pageviews": 65
        },
        {
          "month": "2021-04-01",
          "page_name": "/features",
          "pageviews": 64
        },
        {
          "month": "2021-04-01",
          "page_name": "/form/brochure",
          "pageviews": 53
        },
        {
          "month": "2021-04-01",
          "page_name": "/form/demo",
          "pageviews": 47
        },
        {
          "month": "2021-04-01",
          "page_name": "/form/publications",
          "pageviews": 13
        },
        {
          "month": "2021-04-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 46
        },
        {
          "month": "2021-04-01",
          "page_name": "/home",
          "pageviews": 28
        },
        {
          "month": "2021-04-01",
          "page_name": "/portofolio",
          "pageviews": 60
        },
        {
          "month": "2021-04-01",
          "page_name": "/studycase",
          "pageviews": 57
        },
        {
          "month": "2021-04-01",
          "page_name": "/testimonials",
          "pageviews": 45
        },
        {
          "month": "2021-05-01",
          "page_name": "/features",
          "pageviews": 50
        },
        {
          "month": "2021-05-01",
          "page_name": "/form/brochure",
          "pageviews": 52
        },
        {
          "month": "2021-05-01",
          "page_name": "/form/demo",
          "pageviews": 38
        },
        {
          "month": "2021-05-01",
          "page_name": "/form/publications",
          "pageviews": 9
        },
        {
          "month": "2021-05-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 26
        },
        {
          "month": "2021-05-01",
          "page_name": "/home",
          "pageviews": 32
        },
        {
          "month": "2021-05-01",
          "page_name": "/portofolio",
          "pageviews": 44
        },
        {
          "month": "2021-05-01",
          "page_name": "/studycase",
          "pageviews": 47
        },
        {
          "month": "2021-05-01",
          "page_name": "/testimonials",
          "pageviews": 35
        },
        {
          "month": "2021-06-01",
          "page_name": "/features",
          "pageviews": 57
        },
        {
          "month": "2021-06-01",
          "page_name": "/form/brochure",
          "pageviews": 54
        },
        {
          "month": "2021-06-01",
          "page_name": "/form/demo",
          "pageviews": 49
        },
        {
          "month": "2021-06-01",
          "page_name": "/form/publications",
          "pageviews": 7
        },
        {
          "month": "2021-06-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 44
        },
        {
          "month": "2021-06-01",
          "page_name": "/home",
          "pageviews": 47
        },
        {
          "month": "2021-06-01",
          "page_name": "/portofolio",
          "pageviews": 60
        },
        {
          "month": "2021-06-01",
          "page_name": "/studycase",
          "pageviews": 40
        },
        {
          "month": "2021-06-01",
          "page_name": "/testimonials",
          "pageviews": 50
        },
        {
          "month": "2021-07-01",
          "page_name": "/features",
          "pageviews": 54
        },
        {
          "month": "2021-07-01",
          "page_name": "/form/brochure",
          "pageviews": 48
        },
        {
          "month": "2021-07-01",
          "page_name": "/form/demo",
          "pageviews": 41
        },
        {
          "month": "2021-07-01",
          "page_name": "/form/publications",
          "pageviews": 14
        },
        {
          "month": "2021-07-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 37
        },
        {
          "month": "2021-07-01",
          "page_name": "/home",
          "pageviews": 38
        },
        {
          "month": "2021-07-01",
          "page_name": "/portofolio",
          "pageviews": 50
        },
        {
          "month": "2021-07-01",
          "page_name": "/studycase",
          "pageviews": 56
        },
        {
          "month": "2021-07-01",
          "page_name": "/testimonials",
          "pageviews": 37
        },
        {
          "month": "2021-08-01",
          "page_name": "/features",
          "pageviews": 54
        },
        {
          "month": "2021-08-01",
          "page_name": "/form/brochure",
          "pageviews": 59
        },
        {
          "month": "2021-08-01",
          "page_name": "/form/demo",
          "pageviews": 39
        },
        {
          "month": "2021-08-01",
          "page_name": "/form/publications",
          "pageviews": 17
        },
        {
          "month": "2021-08-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 45
        },
        {
          "month": "2021-08-01",
          "page_name": "/home",
          "pageviews": 43
        },
        {
          "month": "2021-08-01",
          "page_name": "/portofolio",
          "pageviews": 50
        },
        {
          "month": "2021-08-01",
          "page_name": "/studycase",
          "pageviews": 34
        },
        {
          "month": "2021-08-01",
          "page_name": "/testimonials",
          "pageviews": 46
        },
        {
          "month": "2021-09-01",
          "page_name": "/features",
          "pageviews": 67
        },
        {
          "month": "2021-09-01",
          "page_name": "/form/brochure",
          "pageviews": 61
        },
        {
          "month": "2021-09-01",
          "page_name": "/form/demo",
          "pageviews": 56
        },
        {
          "month": "2021-09-01",
          "page_name": "/form/publications",
          "pageviews": 17
        },
        {
          "month": "2021-09-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 51
        },
        {
          "month": "2021-09-01",
          "page_name": "/home",
          "pageviews": 54
        },
        {
          "month": "2021-09-01",
          "page_name": "/portofolio",
          "pageviews": 57
        },
        {
          "month": "2021-09-01",
          "page_name": "/studycase",
          "pageviews": 68
        },
        {
          "month": "2021-09-01",
          "page_name": "/testimonials",
          "pageviews": 59
        },
        {
          "month": "2021-10-01",
          "page_name": "/features",
          "pageviews": 40
        },
        {
          "month": "2021-10-01",
          "page_name": "/form/brochure",
          "pageviews": 41
        },
        {
          "month": "2021-10-01",
          "page_name": "/form/demo",
          "pageviews": 31
        },
        {
          "month": "2021-10-01",
          "page_name": "/form/publications",
          "pageviews": 8
        },
        {
          "month": "2021-10-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 36
        },
        {
          "month": "2021-10-01",
          "page_name": "/home",
          "pageviews": 34
        },
        {
          "month": "2021-10-01",
          "page_name": "/portofolio",
          "pageviews": 48
        },
        {
          "month": "2021-10-01",
          "page_name": "/studycase",
          "pageviews": 35
        },
        {
          "month": "2021-10-01",
          "page_name": "/testimonials",
          "pageviews": 42
        },
        {
          "month": "2021-11-01",
          "page_name": "/features",
          "pageviews": 55
        },
        {
          "month": "2021-11-01",
          "page_name": "/form/brochure",
          "pageviews": 61
        },
        {
          "month": "2021-11-01",
          "page_name": "/form/demo",
          "pageviews": 36
        },
        {
          "month": "2021-11-01",
          "page_name": "/form/publications",
          "pageviews": 18
        },
        {
          "month": "2021-11-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 48
        },
        {
          "month": "2021-11-01",
          "page_name": "/home",
          "pageviews": 47
        },
        {
          "month": "2021-11-01",
          "page_name": "/portofolio",
          "pageviews": 65
        },
        {
          "month": "2021-11-01",
          "page_name": "/studycase",
          "pageviews": 46
        },
        {
          "month": "2021-11-01",
          "page_name": "/testimonials",
          "pageviews": 47
        },
        {
          "month": "2021-12-01",
          "page_name": "/features",
          "pageviews": 103
        },
        {
          "month": "2021-12-01",
          "page_name": "/form/brochure",
          "pageviews": 94
        },
        {
          "month": "2021-12-01",
          "page_name": "/form/demo",
          "pageviews": 83
        },
        {
          "month": "2021-12-01",
          "page_name": "/form/publications",
          "pageviews": 28
        },
        {
          "month": "2021-12-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 89
        },
        {
          "month": "2021-12-01",
          "page_name": "/home",
          "pageviews": 84
        },
        {
          "month": "2021-12-01",
          "page_name": "/portofolio",
          "pageviews": 100
        },
        {
          "month": "2021-12-01",
          "page_name": "/studycase",
          "pageviews": 85
        },
        {
          "month": "2021-12-01",
          "page_name": "/testimonials",
          "pageviews": 95
        },
        {
          "month": "2022-01-01",
          "page_name": "/features",
          "pageviews": 54
        },
        {
          "month": "2022-01-01",
          "page_name": "/form/brochure",
          "pageviews": 63
        },
        {
          "month": "2022-01-01",
          "page_name": "/form/demo",
          "pageviews": 39
        },
        {
          "month": "2022-01-01",
          "page_name": "/form/publications",
          "pageviews": 13
        },
        {
          "month": "2022-01-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 42
        },
        {
          "month": "2022-01-01",
          "page_name": "/home",
          "pageviews": 36
        },
        {
          "month": "2022-01-01",
          "page_name": "/portofolio",
          "pageviews": 51
        },
        {
          "month": "2022-01-01",
          "page_name": "/studycase",
          "pageviews": 44
        },
        {
          "month": "2022-01-01",
          "page_name": "/testimonials",
          "pageviews": 50
        },
        {
          "month": "2022-02-01",
          "page_name": "/features",
          "pageviews": 35
        },
        {
          "month": "2022-02-01",
          "page_name": "/form/brochure",
          "pageviews": 39
        },
        {
          "month": "2022-02-01",
          "page_name": "/form/demo",
          "pageviews": 35
        },
        {
          "month": "2022-02-01",
          "page_name": "/form/publications",
          "pageviews": 21
        },
        {
          "month": "2022-02-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 47
        },
        {
          "month": "2022-02-01",
          "page_name": "/home",
          "pageviews": 34
        },
        {
          "month": "2022-02-01",
          "page_name": "/portofolio",
          "pageviews": 64
        },
        {
          "month": "2022-02-01",
          "page_name": "/studycase",
          "pageviews": 44
        },
        {
          "month": "2022-02-01",
          "page_name": "/testimonials",
          "pageviews": 39
        },
        {
          "month": "2022-03-01",
          "page_name": "/features",
          "pageviews": 126
        },
        {
          "month": "2022-03-01",
          "page_name": "/form/brochure",
          "pageviews": 92
        },
        {
          "month": "2022-03-01",
          "page_name": "/form/demo",
          "pageviews": 80
        },
        {
          "month": "2022-03-01",
          "page_name": "/form/publications",
          "pageviews": 29
        },
        {
          "month": "2022-03-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 109
        },
        {
          "month": "2022-03-01",
          "page_name": "/home",
          "pageviews": 89
        },
        {
          "month": "2022-03-01",
          "page_name": "/portofolio",
          "pageviews": 100
        },
        {
          "month": "2022-03-01",
          "page_name": "/studycase",
          "pageviews": 102
        },
        {
          "month": "2022-03-01",
          "page_name": "/testimonials",
          "pageviews": 98
        },
        {
          "month": "2022-04-01",
          "page_name": "/features",
          "pageviews": 38
        },
        {
          "month": "2022-04-01",
          "page_name": "/form/brochure",
          "pageviews": 49
        },
        {
          "month": "2022-04-01",
          "page_name": "/form/demo",
          "pageviews": 49
        },
        {
          "month": "2022-04-01",
          "page_name": "/form/publications",
          "pageviews": 11
        },
        {
          "month": "2022-04-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 51
        },
        {
          "month": "2022-04-01",
          "page_name": "/home",
          "pageviews": 42
        },
        {
          "month": "2022-04-01",
          "page_name": "/portofolio",
          "pageviews": 57
        },
        {
          "month": "2022-04-01",
          "page_name": "/studycase",
          "pageviews": 41
        },
        {
          "month": "2022-04-01",
          "page_name": "/testimonials",
          "pageviews": 43
        },
        {
          "month": "2022-05-01",
          "page_name": "/features",
          "pageviews": 68
        },
        {
          "month": "2022-05-01",
          "page_name": "/form/brochure",
          "pageviews": 62
        },
        {
          "month": "2022-05-01",
          "page_name": "/form/demo",
          "pageviews": 46
        },
        {
          "month": "2022-05-01",
          "page_name": "/form/publications",
          "pageviews": 20
        },
        {
          "month": "2022-05-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 73
        },
        {
          "month": "2022-05-01",
          "page_name": "/home",
          "pageviews": 48
        },
        {
          "month": "2022-05-01",
          "page_name": "/portofolio",
          "pageviews": 68
        },
        {
          "month": "2022-05-01",
          "page_name": "/studycase",
          "pageviews": 66
        },
        {
          "month": "2022-05-01",
          "page_name": "/testimonials",
          "pageviews": 60
        },
        {
          "month": "2022-06-01",
          "page_name": "/features",
          "pageviews": 129
        },
        {
          "month": "2022-06-01",
          "page_name": "/form/brochure",
          "pageviews": 115
        },
        {
          "month": "2022-06-01",
          "page_name": "/form/demo",
          "pageviews": 98
        },
        {
          "month": "2022-06-01",
          "page_name": "/form/publications",
          "pageviews": 35
        },
        {
          "month": "2022-06-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 113
        },
        {
          "month": "2022-06-01",
          "page_name": "/home",
          "pageviews": 98
        },
        {
          "month": "2022-06-01",
          "page_name": "/portofolio",
          "pageviews": 136
        },
        {
          "month": "2022-06-01",
          "page_name": "/studycase",
          "pageviews": 101
        },
        {
          "month": "2022-06-01",
          "page_name": "/testimonials",
          "pageviews": 126
        },
        {
          "month": "2022-07-01",
          "page_name": "/features",
          "pageviews": 48
        },
        {
          "month": "2022-07-01",
          "page_name": "/form/brochure",
          "pageviews": 53
        },
        {
          "month": "2022-07-01",
          "page_name": "/form/demo",
          "pageviews": 50
        },
        {
          "month": "2022-07-01",
          "page_name": "/form/publications",
          "pageviews": 12
        },
        {
          "month": "2022-07-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 37
        },
        {
          "month": "2022-07-01",
          "page_name": "/home",
          "pageviews": 37
        },
        {
          "month": "2022-07-01",
          "page_name": "/portofolio",
          "pageviews": 52
        },
        {
          "month": "2022-07-01",
          "page_name": "/studycase",
          "pageviews": 48
        },
        {
          "month": "2022-07-01",
          "page_name": "/testimonials",
          "pageviews": 58
        },
        {
          "month": "2022-08-01",
          "page_name": "/features",
          "pageviews": 82
        },
        {
          "month": "2022-08-01",
          "page_name": "/form/brochure",
          "pageviews": 74
        },
        {
          "month": "2022-08-01",
          "page_name": "/form/demo",
          "pageviews": 58
        },
        {
          "month": "2022-08-01",
          "page_name": "/form/publications",
          "pageviews": 29
        },
        {
          "month": "2022-08-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 66
        },
        {
          "month": "2022-08-01",
          "page_name": "/home",
          "pageviews": 48
        },
        {
          "month": "2022-08-01",
          "page_name": "/portofolio",
          "pageviews": 78
        },
        {
          "month": "2022-08-01",
          "page_name": "/studycase",
          "pageviews": 57
        },
        {
          "month": "2022-08-01",
          "page_name": "/testimonials",
          "pageviews": 70
        },
        {
          "month": "2022-09-01",
          "page_name": "/features",
          "pageviews": 154
        },
        {
          "month": "2022-09-01",
          "page_name": "/form/brochure",
          "pageviews": 148
        },
        {
          "month": "2022-09-01",
          "page_name": "/form/demo",
          "pageviews": 127
        },
        {
          "month": "2022-09-01",
          "page_name": "/form/publications",
          "pageviews": 36
        },
        {
          "month": "2022-09-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 137
        },
        {
          "month": "2022-09-01",
          "page_name": "/home",
          "pageviews": 137
        },
        {
          "month": "2022-09-01",
          "page_name": "/portofolio",
          "pageviews": 163
        },
        {
          "month": "2022-09-01",
          "page_name": "/studycase",
          "pageviews": 135
        },
        {
          "month": "2022-09-01",
          "page_name": "/testimonials",
          "pageviews": 156
        },
        {
          "month": "2022-10-01",
          "page_name": "/features",
          "pageviews": 84
        },
        {
          "month": "2022-10-01",
          "page_name": "/form/brochure",
          "pageviews": 84
        },
        {
          "month": "2022-10-01",
          "page_name": "/form/demo",
          "pageviews": 46
        },
        {
          "month": "2022-10-01",
          "page_name": "/form/publications",
          "pageviews": 18
        },
        {
          "month": "2022-10-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 73
        },
        {
          "month": "2022-10-01",
          "page_name": "/home",
          "pageviews": 57
        },
        {
          "month": "2022-10-01",
          "page_name": "/portofolio",
          "pageviews": 77
        },
        {
          "month": "2022-10-01",
          "page_name": "/studycase",
          "pageviews": 64
        },
        {
          "month": "2022-10-01",
          "page_name": "/testimonials",
          "pageviews": 56
        },
        {
          "month": "2022-11-01",
          "page_name": "/features",
          "pageviews": 58
        },
        {
          "month": "2022-11-01",
          "page_name": "/form/brochure",
          "pageviews": 60
        },
        {
          "month": "2022-11-01",
          "page_name": "/form/demo",
          "pageviews": 36
        },
        {
          "month": "2022-11-01",
          "page_name": "/form/publications",
          "pageviews": 12
        },
        {
          "month": "2022-11-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 49
        },
        {
          "month": "2022-11-01",
          "page_name": "/home",
          "pageviews": 42
        },
        {
          "month": "2022-11-01",
          "page_name": "/portofolio",
          "pageviews": 45
        },
        {
          "month": "2022-11-01",
          "page_name": "/studycase",
          "pageviews": 36
        },
        {
          "month": "2022-11-01",
          "page_name": "/testimonials",
          "pageviews": 45
        },
        {
          "month": "2022-12-01",
          "page_name": "/features",
          "pageviews": 4
        },
        {
          "month": "2022-12-01",
          "page_name": "/form/brochure",
          "pageviews": 4
        },
        {
          "month": "2022-12-01",
          "page_name": "/form/demo",
          "pageviews": 4
        },
        {
          "month": "2022-12-01",
          "page_name": "/form/publications",
          "pageviews": 1
        },
        {
          "month": "2022-12-01",
          "page_name": "/form/set-a-meeting",
          "pageviews": 1
        },
        {
          "month": "2022-12-01",
          "page_name": "/home",
          "pageviews": 2
        },
        {
          "month": "2022-12-01",
          "page_name": "/portofolio",
          "pageviews": 5
        },
        {
          "month": "2022-12-01",
          "page_name": "/testimonials",
          "pageviews": 5
        }
      ]
    },
    "price_tier_mix": {
      "call": {},
      "metric": "price_tier_mix",
      "rows": [
        {
          "contracts": 720,
          "gmv": 869875000.0,
          "price_per_seat": 23427.821168866147,
          "subscription_type": "Business"
        },
        {
          "contracts": 610,
          "gmv": 1513080000.0,
          "price_per_seat": 19154.123678713844,
          "subscription_type": "Startup"
        },
        {
          "contracts": 424,
          "gmv": 1828747500.0,
          "price_per_seat": 14499.484638255699,
          "subscription_type": "Enterprise"
        }
      ]
    },
    "renewal_by_cohort": {
      "call": {},
      "metric": "renewal_by_cohort",
      "rows": [
        {
          "cohort_month": "2021-01-01",
          "leads": 33,
          "renewal_rate": 0.9696969696969697,
          "renewed": 32
        },
        {
          "cohort_month": "2021-02-01",
          "leads": 24,
          "renewal_rate": 0.9166666666666666,
          "renewed": 22
        },
        {
          "cohort_month": "2021-03-01",
          "leads": 22,
          "renewal_rate": 0.9545454545454546,
          "renewed": 21
        },
        {
          "cohort_month": "2021-04-01",
          "leads": 36,
          "renewal_rate": 0.8611111111111112,
          "renewed": 31
        },
        {
          "cohort_month": "2021-05-01",
          "leads": 26,
          "renewal_rate": 1.0,
          "renewed": 26
        },
        {
          "cohort_month": "2021-06-01",
          "leads": 24,
          "renewal_rate": 0.9583333333333334,
          "renewed": 23
        },
        {
          "cohort_month": "2021-07-01",
          "leads": 36,
          "renewal_rate": 1.0,
          "renewed": 36
        },
        {
          "cohort_month": "2021-08-01",
          "leads": 27,
          "renewal_rate": 0.9629629629629629,
          "renewed": 26
        },
        {
          "cohort_month": "2021-09-01",
          "leads": 26,
          "renewal_rate": 0.8846153846153846,
          "renewed": 23
        },
        {
          "cohort_month": "2021-10-01",
          "leads": 39,
          "renewal_rate": 0.8974358974358975,
          "renewed": 35
        },
        {
          "cohort_month": "2021-11-01",
          "leads": 28,
          "renewal_rate": 0.9642857142857143,
          "renewed": 27
        },
        {
          "cohort_month": "2021-12-01",
          "leads": 26,
          "renewal_rate": 0.8846153846153846,
          "renewed": 23
        },
        {
          "cohort_month": "2022-01-01",
          "leads": 56,
          "renewal_rate": 0.9821428571428571,
          "renewed": 55
        },
        {
          "cohort_month": "2022-02-01",
          "leads": 29,
          "renewal_rate": 0.9310344827586207,
          "renewed": 27
        },
        {
          "cohort_month": "2022-03-01",
          "leads": 22,
          "renewal_rate": 0.9545454545454546,
          "renewed": 21
        },
        {
          "cohort_month": "2022-04-01",
          "leads": 67,
          "renewal_rate": 0.9552238805970149,
          "renewed": 64
        },
        {
          "cohort_month": "2022-05-01",
          "leads": 31,
          "renewal_rate": 1.0,
          "renewed": 31
        },
        {
          "cohort_month": "2022-06-01",
          "leads": 27,
          "renewal_rate": 0.9629629629629629,
          "renewed": 26
        },
        {
          "cohort_month": "2022-07-01",
          "leads": 79,
          "renewal_rate": 0.9493670886075949,
          "renewed": 75
        },
        {
          "cohort_month": "2022-08-01",
          "leads": 37,
          "renewal_rate": 0.918918918918919,
          "renewed": 34
        },
        {
          "cohort_month": "2022-09-01",
          "leads": 30,
          "renewal_rate": 0.9666666666666667,
          "renewed": 29
        },
        {
          "cohort_month": "2022-10-01",
          "leads": 96,
          "renewal_rate": 0.9375,
          "renewed": 90
        },
        {
          "cohort_month": "2022-11-01",
          "leads": 46,
          "renewal_rate": 0.9782608695652174,
          "renewed": 45
        },
        {
          "cohort_month": "2022-12-01",
          "leads": 34,
          "renewal_rate": 0.9117647058823529,
          "renewed": 31
        }
      ]
    },
    "renewal_gap": {
      "call": {},
      "metric": "renewal_gap",
      "rows": [
        {
          "max_gap_days": 365,
          "median_gap_days": 365.0,
          "min_gap_days": 365,
          "n_renewed": 853
        }
      ]
    },
    "renewal_rate": {
      "call": {},
      "metric": "renewal_rate",
      "rows": [
        {
          "leads_with_contract": 901,
          "renewal_rate": 0.946725860155383,
          "renewed": 853
        }
      ]
    },
    "revenue_giveup": {
      "call": {},
      "metric": "revenue_giveup",
      "rows": [
        {
          "month": "2021-01-01",
          "revenue_giveup": 7262500.0
        },
        {
          "month": "2021-04-01",
          "revenue_giveup": 8862500.0
        },
        {
          "month": "2021-07-01",
          "revenue_giveup": 9055000.0
        },
        {
          "month": "2021-10-01",
          "revenue_giveup": 10207500.0
        },
        {
          "month": "2022-01-01",
          "revenue_giveup": 28150000.0
        },
        {
          "month": "2022-04-01",
          "revenue_giveup": 35805000.0
        },
        {
          "month": "2022-07-01",
          "revenue_giveup": 41010000.0
        },
        {
          "month": "2022-10-01",
          "revenue_giveup": 47970000.0
        }
      ]
    },
    "revenue_kpis": {
      "call": {},
      "metric": "revenue_kpis",
      "rows": [
        {
          "accounts": 901,
          "arpa": 4674475.582685905,
          "avg_deal_size": 2401198.6887115166,
          "contracts": 1754,
          "gmv_total": 4211702500.0,
          "new_gmv": 2084002500.0,
          "renewal_gmv": 2127700000.0
        }
      ]
    },
    "seats_sold": {
      "call": {},
      "metric": "seats_sold",
      "rows": [
        {
          "month": "2021-01-01",
          "seats": 3750.0
        },
        {
          "month": "2021-02-01",
          "seats": 2320.0
        },
        {
          "month": "2021-03-01",
          "seats": 3140.0
        },
        {
          "month": "2021-04-01",
          "seats": 4800.0
        },
        {
          "month": "2021-05-01",
          "seats": 3065.0
        },
        {
          "month": "2021-06-01",
          "seats": 2435.0
        },
        {
          "month": "2021-07-01",
          "seats": 5000.0
        },
        {
          "month": "2021-08-01",
          "seats": 4225.0
        },
        {
          "month": "2021-09-01",
          "seats": 3725.0
        },
        {
          "month": "2021-10-01",
          "seats": 5475.0
        },
        {
          "month": "2021-11-01",
          "seats": 3470.0
        },
        {
          "month": "2021-12-01",
          "seats": 3325.0
        },
        {
          "month": "2022-01-01",
          "seats": 10920.0
        },
        {
          "month": "2022-02-01",
          "seats": 7025.0
        },
        {
          "month": "2022-03-01",
          "seats": 6510.0
        },
        {
          "month": "2022-04-01",
          "seats": 13645.0
        },
        {
          "month": "2022-05-01",
          "seats": 7530.0
        },
        {
          "month": "2022-06-01",
          "seats": 7200.0
        },
        {
          "month": "2022-07-01",
          "seats": 15690.0
        },
        {
          "month": "2022-08-01",
          "seats": 9865.0
        },
        {
          "month": "2022-09-01",
          "seats": 8960.0
        },
        {
          "month": "2022-10-01",
          "seats": 17210.0
        },
        {
          "month": "2022-11-01",
          "seats": 9875.0
        },
        {
          "month": "2022-12-01",
          "seats": 7355.0
        },
        {
          "month": "2023-01-01",
          "seats": 7270.0
        },
        {
          "month": "2023-02-01",
          "seats": 4370.0
        },
        {
          "month": "2023-03-01",
          "seats": 3460.0
        },
        {
          "month": "2023-04-01",
          "seats": 8935.0
        },
        {
          "month": "2023-05-01",
          "seats": 4465.0
        },
        {
          "month": "2023-06-01",
          "seats": 4485.0
        },
        {
          "month": "2023-07-01",
          "seats": 9705.0
        },
        {
          "month": "2023-08-01",
          "seats": 5610.0
        },
        {
          "month": "2023-09-01",
          "seats": 5470.0
        },
        {
          "month": "2023-10-01",
          "seats": 11720.0
        },
        {
          "month": "2023-11-01",
          "seats": 6150.0
        },
        {
          "month": "2023-12-01",
          "seats": 4095.0
        }
      ]
    },
    "spend_by_channel_month": {
      "call": {},
      "metric": "spend_by_channel_month",
      "rows": [
        {
          "month": "2020-11-01",
          "source": "CPC",
          "spend": 1000000.0
        },
        {
          "month": "2020-11-01",
          "source": "Direct",
          "spend": 800000.0
        },
        {
          "month": "2020-11-01",
          "source": "Organic Search",
          "spend": 300000.0
        },
        {
          "month": "2020-11-01",
          "source": "Organic Social",
          "spend": 500000.0
        },
        {
          "month": "2020-11-01",
          "source": "Refferal",
          "spend": 1000000.0
        },
        {
          "month": "2020-12-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2020-12-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "month": "2020-12-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "month": "2020-12-01",
          "source": "Organic Social",
          "spend": 4000000.0
        },
        {
          "month": "2020-12-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "month": "2021-01-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2021-01-01",
          "source": "Direct",
          "spend": 3800000.0
        },
        {
          "month": "2021-01-01",
          "source": "Organic Search",
          "spend": 2500000.0
        },
        {
          "month": "2021-01-01",
          "source": "Organic Social",
          "spend": 5500000.0
        },
        {
          "month": "2021-01-01",
          "source": "Refferal",
          "spend": 9000000.0
        },
        {
          "month": "2021-02-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2021-02-01",
          "source": "Direct",
          "spend": 4300000.0
        },
        {
          "month": "2021-02-01",
          "source": "Organic Search",
          "spend": 1000000.0
        },
        {
          "month": "2021-02-01",
          "source": "Organic Social",
          "spend": 2500000.0
        },
        {
          "month": "2021-02-01",
          "source": "Refferal",
          "spend": 8500000.0
        },
        {
          "month": "2021-03-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2021-03-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "month": "2021-03-01",
          "source": "Organic Search",
          "spend": 4800000.0
        },
        {
          "month": "2021-03-01",
          "source": "Organic Social",
          "spend": 3500000.0
        },
        {
          "month": "2021-03-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "month": "2021-04-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2021-04-01",
          "source": "Direct",
          "spend": 4800000.0
        },
        {
          "month": "2021-04-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "month": "2021-04-01",
          "source": "Organic Social",
          "spend": 5500000.0
        },
        {
          "month": "2021-04-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "month": "2021-05-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "month": "2021-05-01",
          "source": "Direct",
          "spend": 4800000.0
        },
        {
          "month": "2021-05-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "month": "2021-05-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "month": "2021-05-01",
          "source": "Refferal",
          "spend": 9500000.0
        },
        {
          "month": "2021-06-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2021-06-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "month": "2021-06-01",
          "source": "Organic Search",
          "spend": 4000000.0
        },
        {
          "month": "2021-06-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "month": "2021-06-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "month": "2021-07-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2021-07-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "month": "2021-07-01",
          "source": "Organic Search",
          "spend": 3000000.0
        },
        {
          "month": "2021-07-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "month": "2021-07-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "month": "2021-08-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2021-08-01",
          "source": "Direct",
          "spend": 5500000.0
        },
        {
          "month": "2021-08-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "month": "2021-08-01",
          "source": "Organic Social",
          "spend": 5000000.0
        },
        {
          "month": "2021-08-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "month": "2021-09-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2021-09-01",
          "source": "Direct",
          "spend": 6000000.0
        },
        {
          "month": "2021-09-01",
          "source": "Organic Search",
          "spend": 7000000.0
        },
        {
          "month": "2021-09-01",
          "source": "Organic Social",
          "spend": 3300000.0
        },
        {
          "month": "2021-09-01",
          "source": "Refferal",
          "spend": 13000000.0
        },
        {
          "month": "2021-10-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "month": "2021-10-01",
          "source": "Direct",
          "spend": 4000000.0
        },
        {
          "month": "2021-10-01",
          "source": "Organic Search",
          "spend": 2800000.0
        },
        {
          "month": "2021-10-01",
          "source": "Organic Social",
          "spend": 4000000.0
        },
        {
          "month": "2021-10-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "month": "2021-11-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2021-11-01",
          "source": "Direct",
          "spend": 7300000.0
        },
        {
          "month": "2021-11-01",
          "source": "Organic Search",
          "spend": 3300000.0
        },
        {
          "month": "2021-11-01",
          "source": "Organic Social",
          "spend": 3300000.0
        },
        {
          "month": "2021-11-01",
          "source": "Refferal",
          "spend": 12500000.0
        },
        {
          "month": "2021-12-01",
          "source": "CPC",
          "spend": 7000000.0
        },
        {
          "month": "2021-12-01",
          "source": "Direct",
          "spend": 8000000.0
        },
        {
          "month": "2021-12-01",
          "source": "Organic Search",
          "spend": 9500000.0
        },
        {
          "month": "2021-12-01",
          "source": "Organic Social",
          "spend": 7800000.0
        },
        {
          "month": "2021-12-01",
          "source": "Refferal",
          "spend": 24000000.0
        },
        {
          "month": "2022-01-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2022-01-01",
          "source": "Direct",
          "spend": 6500000.0
        },
        {
          "month": "2022-01-01",
          "source": "Organic Search",
          "spend": 3800000.0
        },
        {
          "month": "2022-01-01",
          "source": "Organic Social",
          "spend": 4500000.0
        },
        {
          "month": "2022-01-01",
          "source": "Refferal",
          "spend": 12000000.0
        },
        {
          "month": "2022-02-01",
          "source": "CPC",
          "spend": 3000000.0
        },
        {
          "month": "2022-02-01",
          "source": "Direct",
          "spend": 6300000.0
        },
        {
          "month": "2022-02-01",
          "source": "Organic Search",
          "spend": 3300000.0
        },
        {
          "month": "2022-02-01",
          "source": "Organic Social",
          "spend": 2800000.0
        },
        {
          "month": "2022-02-01",
          "source": "Refferal",
          "spend": 11500000.0
        },
        {
          "month": "2022-03-01",
          "source": "CPC",
          "spend": 7000000.0
        },
        {
          "month": "2022-03-01",
          "source": "Direct",
          "spend": 11300000.0
        },
        {
          "month": "2022-03-01",
          "source": "Organic Search",
          "spend": 5500000.0
        },
        {
          "month": "2022-03-01",
          "source": "Organic Social",
          "spend": 6800000.0
        },
        {
          "month": "2022-03-01",
          "source": "Refferal",
          "spend": 28500000.0
        },
        {
          "month": "2022-04-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2022-04-01",
          "source": "Direct",
          "spend": 4500000.0
        },
        {
          "month": "2022-04-01",
          "source": "Organic Search",
          "spend": 3500000.0
        },
        {
          "month": "2022-04-01",
          "source": "Organic Social",
          "spend": 3000000.0
        },
        {
          "month": "2022-04-01",
          "source": "Refferal",
          "spend": 14000000.0
        },
        {
          "month": "2022-05-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2022-05-01",
          "source": "Direct",
          "spend": 5300000.0
        },
        {
          "month": "2022-05-01",
          "source": "Organic Search",
          "spend": 8300000.0
        },
        {
          "month": "2022-05-01",
          "source": "Organic Social",
          "spend": 4300000.0
        },
        {
          "month": "2022-05-01",
          "source": "Refferal",
          "spend": 22500000.0
        },
        {
          "month": "2022-06-01",
          "source": "CPC",
          "spend": 8000000.0
        },
        {
          "month": "2022-06-01",
          "source": "Direct",
          "spend": 10500000.0
        },
        {
          "month": "2022-06-01",
          "source": "Organic Search",
          "spend": 7800000.0
        },
        {
          "month": "2022-06-01",
          "source": "Organic Social",
          "spend": 7800000.0
        },
        {
          "month": "2022-06-01",
          "source": "Refferal",
          "spend": 33000000.0
        },
        {
          "month": "2022-07-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2022-07-01",
          "source": "Direct",
          "spend": 3500000.0
        },
        {
          "month": "2022-07-01",
          "source": "Organic Search",
          "spend": 5000000.0
        },
        {
          "month": "2022-07-01",
          "source": "Organic Social",
          "spend": 6500000.0
        },
        {
          "month": "2022-07-01",
          "source": "Refferal",
          "spend": 15500000.0
        },
        {
          "month": "2022-08-01",
          "source": "CPC",
          "spend": 6000000.0
        },
        {
          "month": "2022-08-01",
          "source": "Direct",
          "spend": 6800000.0
        },
        {
          "month": "2022-08-01",
          "source": "Organic Search",
          "spend": 6300000.0
        },
        {
          "month": "2022-08-01",
          "source": "Organic Social",
          "spend": 3500000.0
        },
        {
          "month": "2022-08-01",
          "source": "Refferal",
          "spend": 21500000.0
        },
        {
          "month": "2022-09-01",
          "source": "CPC",
          "spend": 10000000.0
        },
        {
          "month": "2022-09-01",
          "source": "Direct",
          "spend": 12800000.0
        },
        {
          "month": "2022-09-01",
          "source": "Organic Search",
          "spend": 14000000.0
        },
        {
          "month": "2022-09-01",
          "source": "Organic Social",
          "spend": 8500000.0
        },
        {
          "month": "2022-09-01",
          "source": "Refferal",
          "spend": 41000000.0
        },
        {
          "month": "2022-10-01",
          "source": "CPC",
          "spend": 5000000.0
        },
        {
          "month": "2022-10-01",
          "source": "Direct",
          "spend": 7300000.0
        },
        {
          "month": "2022-10-01",
          "source": "Organic Search",
          "spend": 6000000.0
        },
        {
          "month": "2022-10-01",
          "source": "Organic Social",
          "spend": 8500000.0
        },
        {
          "month": "2022-10-01",
          "source": "Refferal",
          "spend": 16000000.0
        },
        {
          "month": "2022-11-01",
          "source": "CPC",
          "spend": 4000000.0
        },
        {
          "month": "2022-11-01",
          "source": "Direct",
          "spend": 5000000.0
        },
        {
          "month": "2022-11-01",
          "source": "Organic Search",
          "spend": 5500000.0
        },
        {
          "month": "2022-11-01",
          "source": "Organic Social",
          "spend": 3800000.0
        },
        {
          "month": "2022-11-01",
          "source": "Refferal",
          "spend": 13500000.0
        },
        {
          "month": "2022-12-01",
          "source": "CPC",
          "spend": 1000000.0
        },
        {
          "month": "2022-12-01",
          "source": "Direct",
          "spend": 500000.0
        },
        {
          "month": "2022-12-01",
          "source": "Organic Search",
          "spend": 300000.0
        },
        {
          "month": "2022-12-01",
          "source": "Organic Social",
          "spend": 0.0
        },
        {
          "month": "2022-12-01",
          "source": "Refferal",
          "spend": 1000000.0
        }
      ]
    },
    "spend_per_won_gmv": {
      "call": {},
      "metric": "spend_per_won_gmv",
      "rows": [
        {
          "gmv": 30865000.0,
          "quarter": "2021-01-01",
          "source": "CPC",
          "spend": 14000000.0,
          "spend_per_gmv": 0.45358820670662564
        },
        {
          "gmv": 40445000.0,
          "quarter": "2021-01-01",
          "source": "Direct",
          "spend": 13400000.0,
          "spend_per_gmv": 0.33131413030040796
        },
        {
          "gmv": 13617500.0,
          "quarter": "2021-01-01",
          "source": "Organic Search",
          "spend": 8300000.0,
          "spend_per_gmv": 0.6095098219203231
        },
        {
          "gmv": 21812500.0,
          "quarter": "2021-01-01",
          "source": "Organic Social",
          "spend": 11500000.0,
          "spend_per_gmv": 0.5272206303724928
        },
        {
          "gmv": 57622500.0,
          "quarter": "2021-01-01",
          "source": "Refferal",
          "spend": 29000000.0,
          "spend_per_gmv": 0.5032756301791835
        },
        {
          "gmv": 34597500.0,
          "quarter": "2021-04-01",
          "source": "CPC",
          "spend": 13000000.0,
          "spend_per_gmv": 0.3757496928968856
        },
        {
          "gmv": 29095000.0,
          "quarter": "2021-04-01",
          "source": "Direct",
          "spend": 14600000.0,
          "spend_per_gmv": 0.5018044337515037
        },
        {
          "gmv": 18300000.0,
          "quarter": "2021-04-01",
          "source": "Organic Search",
          "spend": 10000000.0,
          "spend_per_gmv": 0.546448087431694
        },
        {
          "gmv": 17782500.0,
          "quarter": "2021-04-01",
          "source": "Organic Social",
          "spend": 13100000.0,
          "spend_per_gmv": 0.736679319555743
        },
        {
          "gmv": 80937500.0,
          "quarter": "2021-04-01",
          "source": "Refferal",
          "spend": 34500000.0,
          "spend_per_gmv": 0.42625482625482625
        },
        {
          "gmv": 38667500.0,
          "quarter": "2021-07-01",
          "source": "CPC",
          "spend": 13000000.0,
          "spend_per_gmv": 0.3361996508695933
        },
        {
          "gmv": 42375000.0,
          "quarter": "2021-07-01",
          "source": "Direct",
          "spend": 16500000.0,
          "spend_per_gmv": 0.3893805309734513
        },
        {
          "gmv": 21997500.0,
          "quarter": "2021-07-01",
          "source": "Organic Search",
          "spend": 13800000.0,
          "spend_per_gmv": 0.6273440163654961
        },
        {
          "gmv": 13055000.0,
          "quarter": "2021-07-01",
          "source": "Organic Social",
          "spend": 12100000.0,
          "spend_per_gmv": 0.9268479509766373
        },
        {
          "gmv": 104950000.0,
          "quarter": "2021-07-01",
          "source": "Refferal",
          "spend": 38500000.0,
          "spend_per_gmv": 0.3668413530252501
        },
        {
          "gmv": 31785000.0,
          "quarter": "2021-10-01",
          "source": "CPC",
          "spend": 14000000.0,
          "spend_per_gmv": 0.44045933616485766
        },
        {
          "gmv": 39542500.0,
          "quarter": "2021-10-01",
          "source": "Direct",
          "spend": 19300000.0,
          "spend_per_gmv": 0.4880824429411393
        },
        {
          "gmv": 34705000.0,
          "quarter": "2021-10-01",
          "source": "Organic Search",
          "spend": 15600000.0,
          "spend_per_gmv": 0.4495029534649186
        },
        {
          "gmv": 14775000.0,
          "quarter": "2021-10-01",
          "source": "Organic Social",
          "spend": 15100000.0,
          "spend_per_gmv": 1.0219966159052454
        },
        {
          "gmv": 91460000.0,
          "quarter": "2021-10-01",
          "source": "Refferal",
          "spend": 48000000.0,
          "spend_per_gmv": 0.5248195932648152
        },
        {
          "gmv": 84420000.0,
          "quarter": "2022-01-01",
          "source": "CPC",
          "spend": 14000000.0,
          "spend_per_gmv": 0.16583747927031509
        },
        {
          "gmv": 85940000.0,
          "quarter": "2022-01-01",
          "source": "Direct",
          "spend": 24100000.0,
          "spend_per_gmv": 0.2804282057249244
        },
        {
          "gmv": 37830000.0,
          "quarter": "2022-01-01",
          "source": "Organic Search",
          "spend": 12600000.0,
          "spend_per_gmv": 0.3330689928628073
        },
        {
          "gmv": 49540000.0,
          "quarter": "2022-01-01",
          "source": "Organic Social",
          "spend": 14100000.0,
          "spend_per_gmv": 0.2846184901090028
        },
        {
          "gmv": 159345000.0,
          "quarter": "2022-01-01",
          "source": "Refferal",
          "spend": 52000000.0,
          "spend_per_gmv": 0.3263359377451442
        },
        {
          "gmv": 111215000.0,
          "quarter": "2022-04-01",
          "source": "CPC",
          "spend": 17000000.0,
          "spend_per_gmv": 0.15285707863147957
        },
        {
          "gmv": 63460000.0,
          "quarter": "2022-04-01",
          "source": "Direct",
          "spend": 20300000.0,
          "spend_per_gmv": 0.3198865427040656
        },
        {
          "gmv": 43300000.0,
          "quarter": "2022-04-01",
          "source": "Organic Search",
          "spend": 19600000.0,
          "spend_per_gmv": 0.45265588914549654
        },
        {
          "gmv": 35950000.0,
          "quarter": "2022-04-01",
          "source": "Organic Social",
          "spend": 15100000.0,
          "spend_per_gmv": 0.4200278164116829
        },
        {
          "gmv": 221870000.0,
          "quarter": "2022-04-01",
          "source": "Refferal",
          "spend": 69500000.0,
          "spend_per_gmv": 0.31324649569567764
        },
        {
          "gmv": 94145000.0,
          "quarter": "2022-07-01",
          "source": "CPC",
          "spend": 20000000.0,
          "spend_per_gmv": 0.21243826013064954
        },
        {
          "gmv": 104915000.0,
          "quarter": "2022-07-01",
          "source": "Direct",
          "spend": 23100000.0,
          "spend_per_gmv": 0.22017823952723634
        },
        {
          "gmv": 60965000.0,
          "quarter": "2022-07-01",
          "source": "Organic Search",
          "spend": 25300000.0,
          "spend_per_gmv": 0.4149922086443041
        },
        {
          "gmv": 46140000.0,
          "quarter": "2022-07-01",
          "source": "Organic Social",
          "spend": 18500000.0,
          "spend_per_gmv": 0.4009536194191591
        },
        {
          "gmv": 273550000.0,
          "quarter": "2022-07-01",
          "source": "Refferal",
          "spend": 78000000.0,
          "spend_per_gmv": 0.2851398281849753
        },
        {
          "gmv": 90395000.0,
          "quarter": "2022-10-01",
          "source": "CPC",
          "spend": 10000000.0,
          "spend_per_gmv": 0.11062558769843465
        },
        {
          "gmv": 110735000.0,
          "quarter": "2022-10-01",
          "source": "Direct",
          "spend": 12800000.0,
          "spend_per_gmv": 0.11559127647085383
        },
        {
          "gmv": 90965000.0,
          "quarter": "2022-10-01",
          "source": "Organic Search",
          "spend": 11800000.0,
          "spend_per_gmv": 0.12972022206343098
        },
        {
          "gmv": 42755000.0,
          "quarter": "2022-10-01",
          "source": "Organic Social",
          "spend": 12300000.0,
          "spend_per_gmv": 0.2876856508010759
        },
        {
          "gmv": 244805000.0,
          "quarter": "2022-10-01",
          "source": "Refferal",
          "spend": 30500000.0,
          "spend_per_gmv": 0.12458895855885296
        }
      ]
    },
    "stage_month_conversion": {
      "call": {},
      "metric": "stage_month_conversion",
      "rows": [
        {
          "cohort_month": "2020-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 2,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 7,
          "reached_to": 7,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 5,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 6,
          "reached_to": 6,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 9,
          "reached_to": 9,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 10,
          "reached_to": 10,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 10,
          "reached_to": 10,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 5,
          "reached_to": 5,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2020-11-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 5,
          "reached_to": 5,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 59,
          "reached_to": 59,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 29,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 45,
          "reached_to": 45,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 69,
          "reached_to": 69,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 84,
          "reached_to": 84,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 95,
          "reached_to": 95,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 36,
          "reached_to": 36,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2020-12-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 29,
          "reached_to": 29,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 51,
          "reached_to": 51,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 25,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 37,
          "reached_to": 37,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 62,
          "reached_to": 62,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 76,
          "reached_to": 76,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 19,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 89,
          "reached_to": 89,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-01-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 25,
          "reached_to": 25,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 40,
          "reached_to": 40,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 20,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 29,
          "reached_to": 29,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 53,
          "reached_to": 53,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 5,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 62,
          "reached_to": 62,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 67,
          "reached_to": 67,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 23,
          "reached_to": 23,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 3,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-02-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 20,
          "reached_to": 20,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 66,
          "reached_to": 66,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 32,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 49,
          "reached_to": 49,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 79,
          "reached_to": 79,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 91,
          "reached_to": 91,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 20,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 102,
          "reached_to": 102,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 39,
          "reached_to": 39,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-03-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 32,
          "reached_to": 32,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 68,
          "reached_to": 68,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 34,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 54,
          "reached_to": 54,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 79,
          "reached_to": 79,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 93,
          "reached_to": 93,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 107,
          "reached_to": 107,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 43,
          "reached_to": 43,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-04-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 34,
          "reached_to": 34,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 42,
          "reached_to": 42,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 28,
          "reached_to": 28,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 55,
          "reached_to": 55,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 69,
          "reached_to": 69,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 78,
          "reached_to": 78,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 21,
          "reached_to": 21,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 4,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-05-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 17,
          "reached_to": 17,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 65,
          "reached_to": 65,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 33,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 49,
          "reached_to": 49,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 80,
          "reached_to": 80,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 94,
          "reached_to": 94,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 103,
          "reached_to": 103,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 41,
          "reached_to": 41,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-06-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 33,
          "reached_to": 33,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 59,
          "reached_to": 59,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 47,
          "reached_to": 47,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 71,
          "reached_to": 71,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 82,
          "reached_to": 82,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 90,
          "reached_to": 90,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 36,
          "reached_to": 36,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 5,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-07-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 64,
          "reached_to": 64,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 46,
          "reached_to": 46,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 76,
          "reached_to": 76,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 90,
          "reached_to": 90,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 97,
          "reached_to": 97,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 38,
          "reached_to": 38,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-08-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 19,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 69,
          "reached_to": 69,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 36,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 53,
          "reached_to": 53,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 88,
          "reached_to": 88,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 102,
          "reached_to": 102,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 22,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 113,
          "reached_to": 113,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 42,
          "reached_to": 42,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-09-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 36,
          "reached_to": 36,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 55,
          "reached_to": 55,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 44,
          "reached_to": 44,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 63,
          "reached_to": 63,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 4,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 73,
          "reached_to": 73,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 77,
          "reached_to": 77,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 37,
          "reached_to": 37,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-10-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 59,
          "reached_to": 59,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 27,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 44,
          "reached_to": 44,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 77,
          "reached_to": 77,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 88,
          "reached_to": 88,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 100,
          "reached_to": 100,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 33,
          "reached_to": 33,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 6,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-11-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 27,
          "reached_to": 27,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 109,
          "reached_to": 109,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 54,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 24,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 85,
          "reached_to": 85,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 140,
          "reached_to": 140,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 166,
          "reached_to": 166,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 33,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 183,
          "reached_to": 183,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 20,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 65,
          "reached_to": 65,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2021-12-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 54,
          "reached_to": 54,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 64,
          "reached_to": 64,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 50,
          "reached_to": 50,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 79,
          "reached_to": 79,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 92,
          "reached_to": 92,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 101,
          "reached_to": 101,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 40,
          "reached_to": 40,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-01-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 54,
          "reached_to": 54,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 42,
          "reached_to": 42,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 68,
          "reached_to": 68,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 79,
          "reached_to": 79,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 86,
          "reached_to": 86,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 9,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 33,
          "reached_to": 33,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-02-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 26,
          "reached_to": 26,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 28,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 119,
          "reached_to": 119,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 64,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 24,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 95,
          "reached_to": 95,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 22,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 147,
          "reached_to": 147,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 169,
          "reached_to": 169,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 33,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 187,
          "reached_to": 187,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 78,
          "reached_to": 78,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-03-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 64,
          "reached_to": 64,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 60,
          "reached_to": 60,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 29,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 49,
          "reached_to": 49,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 75,
          "reached_to": 75,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 88,
          "reached_to": 88,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 15,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 101,
          "reached_to": 101,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 37,
          "reached_to": 37,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 8,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-04-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 29,
          "reached_to": 29,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 20,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 80,
          "reached_to": 80,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 36,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 21,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 59,
          "reached_to": 59,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 100,
          "reached_to": 100,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 116,
          "reached_to": 116,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 127,
          "reached_to": 127,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 43,
          "reached_to": 43,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-05-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 36,
          "reached_to": 36,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 34,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 137,
          "reached_to": 137,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 72,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 111,
          "reached_to": 111,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 25,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 171,
          "reached_to": 171,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 19,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 196,
          "reached_to": 196,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 33,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 215,
          "reached_to": 215,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 19,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 92,
          "reached_to": 92,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 20,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-06-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 72,
          "reached_to": 72,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 65,
          "reached_to": 65,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 48,
          "reached_to": 48,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 75,
          "reached_to": 75,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 88,
          "reached_to": 88,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 21,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 101,
          "reached_to": 101,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 12,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 36,
          "reached_to": 36,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 5,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-07-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 31,
          "reached_to": 31,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 84,
          "reached_to": 84,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 42,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 66,
          "reached_to": 66,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 110,
          "reached_to": 110,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 127,
          "reached_to": 127,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 25,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 141,
          "reached_to": 141,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 52,
          "reached_to": 52,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-08-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 42,
          "reached_to": 42,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 45,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 171,
          "reached_to": 171,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 87,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 37,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 134,
          "reached_to": 134,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 31,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 216,
          "reached_to": 216,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 24,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 247,
          "reached_to": 247,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 47,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 271,
          "reached_to": 271,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 26,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 108,
          "reached_to": 108,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 21,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-09-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 87,
          "reached_to": 87,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 18,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 94,
          "reached_to": 94,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 47,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 22,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 72,
          "reached_to": 72,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 112,
          "reached_to": 112,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 129,
          "reached_to": 129,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 23,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 142,
          "reached_to": 142,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 58,
          "reached_to": 58,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 11,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-10-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 47,
          "reached_to": 47,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 14,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "approach_success",
          "mature": true,
          "reached_from": 58,
          "reached_to": 58,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "deal_won",
          "mature": true,
          "reached_from": 28,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "discussion_success",
          "mature": true,
          "reached_from": 45,
          "reached_to": 45,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 16,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "initial_communication_success",
          "mature": true,
          "reached_from": 72,
          "reached_to": 72,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 13,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "leads_qualification",
          "mature": true,
          "reached_from": 88,
          "reached_to": 88,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 17,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "leads_registered",
          "mature": true,
          "reached_from": 101,
          "reached_to": 101,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 10,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "offer_sent",
          "mature": true,
          "reached_from": 35,
          "reached_to": 35,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 7,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-11-01",
          "from_stage": "quotation_recieved",
          "mature": true,
          "reached_from": 28,
          "reached_to": 28,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "approach_success",
          "mature": false,
          "reached_from": 6,
          "reached_to": 6,
          "step_conv": 1.0,
          "to_stage": "discussion_success"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "deal_won",
          "mature": false,
          "reached_from": 3,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "discussion_success",
          "mature": false,
          "reached_from": 2,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "discussion_success",
          "mature": false,
          "reached_from": 4,
          "reached_to": 4,
          "step_conv": 1.0,
          "to_stage": "offer_sent"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "initial_communication_success",
          "mature": false,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "initial_communication_success",
          "mature": false,
          "reached_from": 6,
          "reached_to": 6,
          "step_conv": 1.0,
          "to_stage": "approach_success"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "leads_qualification",
          "mature": false,
          "reached_from": 7,
          "reached_to": 7,
          "step_conv": 1.0,
          "to_stage": "initial_communication_success"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "leads_registered",
          "mature": false,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "leads_registered",
          "mature": false,
          "reached_from": 7,
          "reached_to": 7,
          "step_conv": 1.0,
          "to_stage": "leads_qualification"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "offer_sent",
          "mature": false,
          "reached_from": 1,
          "reached_to": 0,
          "step_conv": 0.0,
          "to_stage": null
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "offer_sent",
          "mature": false,
          "reached_from": 3,
          "reached_to": 3,
          "step_conv": 1.0,
          "to_stage": "quotation_recieved"
        },
        {
          "cohort_month": "2022-12-01",
          "from_stage": "quotation_recieved",
          "mature": false,
          "reached_from": 3,
          "reached_to": 3,
          "step_conv": 1.0,
          "to_stage": "deal_won"
        }
      ]
    },
    "stage_reach": {
      "call": {},
      "metric": "stage_reach",
      "rows": [
        {
          "reach": 3397,
          "stage_group": "Top",
          "stage_id": 101,
          "stage_name": "leads_registered",
          "stage_order": 101
        },
        {
          "reach": 2891,
          "stage_group": "Top",
          "stage_id": 102,
          "stage_name": "leads_qualification",
          "stage_order": 102
        },
        {
          "reach": 2606,
          "stage_group": "Mid",
          "stage_id": 103,
          "stage_name": "initial_communication_success",
          "stage_order": 103
        },
        {
          "reach": 2232,
          "stage_group": "Mid",
          "stage_id": 104,
          "stage_name": "approach_success",
          "stage_order": 104
        },
        {
          "reach": 1805,
          "stage_group": "Mid",
          "stage_id": 105,
          "stage_name": "discussion_success",
          "stage_order": 105
        },
        {
          "reach": 1391,
          "stage_group": "Mid",
          "stage_id": 106,
          "stage_name": "offer_sent",
          "stage_order": 106
        },
        {
          "reach": 1105,
          "stage_group": "Bottom",
          "stage_id": 107,
          "stage_name": "quotation_recieved",
          "stage_order": 107
        },
        {
          "reach": 901,
          "stage_group": "Bottom",
          "stage_id": 108,
          "stage_name": "deal_won",
          "stage_order": 108
        }
      ]
    },
    "stale_open_pipeline": {
      "call": {},
      "metric": "stale_open_pipeline",
      "rows": [
        {
          "as_of": "2022-12-31",
          "idle_gt_30d": 2457,
          "idle_gt_90d": 2202
        }
      ]
    },
    "stale_series": {
      "call": {
        "by": "quarter",
        "thresholds": [
          30,
          90
        ]
      },
      "metric": "stale_open_pipeline_series",
      "rows": [
        {
          "as_of": "2020-12-31",
          "idle_gt_30d": 0,
          "idle_gt_90d": 0,
          "period_end": "2020-12-31"
        },
        {
          "as_of": "2021-03-31",
          "idle_gt_30d": 208,
          "idle_gt_90d": 54,
          "period_end": "2021-03-31"
        },
        {
          "as_of": "2021-06-30",
          "idle_gt_30d": 457,
          "idle_gt_90d": 297,
          "period_end": "2021-06-30"
        },
        {
          "as_of": "2021-09-30",
          "idle_gt_30d": 692,
          "idle_gt_90d": 539,
          "period_end": "2021-09-30"
        },
        {
          "as_of": "2021-12-31",
          "idle_gt_30d": 947,
          "idle_gt_90d": 801,
          "period_end": "2021-12-31"
        },
        {
          "as_of": "2022-03-31",
          "idle_gt_30d": 1258,
          "idle_gt_90d": 1066,
          "period_end": "2022-03-31"
        },
        {
          "as_of": "2022-06-30",
          "idle_gt_30d": 1594,
          "idle_gt_90d": 1399,
          "period_end": "2022-06-30"
        },
        {
          "as_of": "2022-09-30",
          "idle_gt_30d": 1996,
          "idle_gt_90d": 1778,
          "period_end": "2022-09-30"
        },
        {
          "as_of": "2022-12-31",
          "idle_gt_30d": 2457,
          "idle_gt_90d": 2202,
          "period_end": "2022-12-31"
        }
      ]
    },
    "step_conversion": {
      "call": {},
      "metric": "step_conversion",
      "rows": [
        {
          "cum_conv": 1.0,
          "reach": 3397,
          "stage_name": "leads_registered",
          "step_conv": null
        },
        {
          "cum_conv": 0.8510450397409479,
          "reach": 2891,
          "stage_name": "leads_qualification",
          "step_conv": 0.8510450397409479
        },
        {
          "cum_conv": 0.7671474830732999,
          "reach": 2606,
          "stage_name": "initial_communication_success",
          "step_conv": 0.9014181943964026
        },
        {
          "cum_conv": 0.6570503385340006,
          "reach": 2232,
          "stage_name": "approach_success",
          "step_conv": 0.8564850345356869
        },
        {
          "cum_conv": 0.5313511922284369,
          "reach": 1805,
          "stage_name": "discussion_success",
          "step_conv": 0.8086917562724014
        },
        {
          "cum_conv": 0.40947895201648515,
          "reach": 1391,
          "stage_name": "offer_sent",
          "step_conv": 0.7706371191135734
        },
        {
          "cum_conv": 0.3252870179570209,
          "reach": 1105,
          "stage_name": "quotation_recieved",
          "step_conv": 0.794392523364486
        },
        {
          "cum_conv": 0.265234030026494,
          "reach": 901,
          "stage_name": "deal_won",
          "step_conv": 0.8153846153846154
        }
      ]
    },
    "stuck_per_stage": {
      "call": {},
      "metric": "stuck_per_stage",
      "rows": [
        {
          "stage_name": "leads_registered",
          "stuck": 506
        }
      ]
    },
    "time_to_deal": {
      "call": {},
      "metric": "time_to_deal",
      "rows": [
        {
          "max_days": 42.16953703703704,
          "mean_days": 30.573806881243062,
          "median_days": 31.045925925925925,
          "n_won": 901,
          "p25": 28.008229166666666,
          "p75": 34.065046296296295
        }
      ]
    },
    "visit_to_lead_rate": {
      "call": {},
      "metric": "visit_to_lead_rate",
      "rows": [
        {
          "coverage": 1.0,
          "leads_with_pageview": 3397
        }
      ]
    },
    "win_rate_by_source": {
      "call": {
        "attribution": "cohort"
      },
      "metric": "win_rate_by_source",
      "rows": [
        {
          "month": "2020-11-01",
          "registered": 2,
          "source": "CPC",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2020-12-01",
          "registered": 31,
          "source": "CPC",
          "win_rate": 0.2903225806451613,
          "won": 9
        },
        {
          "month": "2021-01-01",
          "registered": 43,
          "source": "CPC",
          "win_rate": 0.23255813953488372,
          "won": 10
        },
        {
          "month": "2021-02-01",
          "registered": 31,
          "source": "CPC",
          "win_rate": 0.1935483870967742,
          "won": 6
        },
        {
          "month": "2021-03-01",
          "registered": 45,
          "source": "CPC",
          "win_rate": 0.2222222222222222,
          "won": 10
        },
        {
          "month": "2021-04-01",
          "registered": 42,
          "source": "CPC",
          "win_rate": 0.30952380952380953,
          "won": 13
        },
        {
          "month": "2021-05-01",
          "registered": 30,
          "source": "CPC",
          "win_rate": 0.2,
          "won": 6
        },
        {
          "month": "2021-06-01",
          "registered": 45,
          "source": "CPC",
          "win_rate": 0.2,
          "won": 9
        },
        {
          "month": "2021-07-01",
          "registered": 31,
          "source": "CPC",
          "win_rate": 0.3225806451612903,
          "won": 10
        },
        {
          "month": "2021-08-01",
          "registered": 35,
          "source": "CPC",
          "win_rate": 0.22857142857142856,
          "won": 8
        },
        {
          "month": "2021-09-01",
          "registered": 44,
          "source": "CPC",
          "win_rate": 0.20454545454545456,
          "won": 9
        },
        {
          "month": "2021-10-01",
          "registered": 23,
          "source": "CPC",
          "win_rate": null,
          "won": 9
        },
        {
          "month": "2021-11-01",
          "registered": 37,
          "source": "CPC",
          "win_rate": 0.1891891891891892,
          "won": 7
        },
        {
          "month": "2021-12-01",
          "registered": 67,
          "source": "CPC",
          "win_rate": 0.2537313432835821,
          "won": 17
        },
        {
          "month": "2022-01-01",
          "registered": 36,
          "source": "CPC",
          "win_rate": 0.25,
          "won": 9
        },
        {
          "month": "2022-02-01",
          "registered": 28,
          "source": "CPC",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2022-03-01",
          "registered": 69,
          "source": "CPC",
          "win_rate": 0.391304347826087,
          "won": 27
        },
        {
          "month": "2022-04-01",
          "registered": 44,
          "source": "CPC",
          "win_rate": 0.25,
          "won": 11
        },
        {
          "month": "2022-05-01",
          "registered": 37,
          "source": "CPC",
          "win_rate": 0.21621621621621623,
          "won": 8
        },
        {
          "month": "2022-06-01",
          "registered": 78,
          "source": "CPC",
          "win_rate": 0.2948717948717949,
          "won": 23
        },
        {
          "month": "2022-07-01",
          "registered": 31,
          "source": "CPC",
          "win_rate": 0.0967741935483871,
          "won": 3
        },
        {
          "month": "2022-08-01",
          "registered": 57,
          "source": "CPC",
          "win_rate": 0.24561403508771928,
          "won": 14
        },
        {
          "month": "2022-09-01",
          "registered": 95,
          "source": "CPC",
          "win_rate": 0.24210526315789474,
          "won": 23
        },
        {
          "month": "2022-10-01",
          "registered": 46,
          "source": "CPC",
          "win_rate": 0.21739130434782608,
          "won": 10
        },
        {
          "month": "2022-11-01",
          "registered": 34,
          "source": "CPC",
          "win_rate": 0.11764705882352941,
          "won": 4
        },
        {
          "month": "2022-12-01",
          "registered": 3,
          "source": "CPC",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2020-11-01",
          "registered": 3,
          "source": "Direct",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2020-12-01",
          "registered": 21,
          "source": "Direct",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-01-01",
          "registered": 15,
          "source": "Direct",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2021-02-01",
          "registered": 17,
          "source": "Direct",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2021-03-01",
          "registered": 21,
          "source": "Direct",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2021-04-01",
          "registered": 19,
          "source": "Direct",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-05-01",
          "registered": 19,
          "source": "Direct",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2021-06-01",
          "registered": 20,
          "source": "Direct",
          "win_rate": null,
          "won": 9
        },
        {
          "month": "2021-07-01",
          "registered": 20,
          "source": "Direct",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-08-01",
          "registered": 22,
          "source": "Direct",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2021-09-01",
          "registered": 24,
          "source": "Direct",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2021-10-01",
          "registered": 16,
          "source": "Direct",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-11-01",
          "registered": 29,
          "source": "Direct",
          "win_rate": null,
          "won": 9
        },
        {
          "month": "2021-12-01",
          "registered": 32,
          "source": "Direct",
          "win_rate": 0.21875,
          "won": 7
        },
        {
          "month": "2022-01-01",
          "registered": 26,
          "source": "Direct",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2022-02-01",
          "registered": 25,
          "source": "Direct",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-03-01",
          "registered": 45,
          "source": "Direct",
          "win_rate": 0.24444444444444444,
          "won": 11
        },
        {
          "month": "2022-04-01",
          "registered": 18,
          "source": "Direct",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2022-05-01",
          "registered": 21,
          "source": "Direct",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2022-06-01",
          "registered": 42,
          "source": "Direct",
          "win_rate": 0.35714285714285715,
          "won": 15
        },
        {
          "month": "2022-07-01",
          "registered": 14,
          "source": "Direct",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-08-01",
          "registered": 27,
          "source": "Direct",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2022-09-01",
          "registered": 51,
          "source": "Direct",
          "win_rate": 0.37254901960784315,
          "won": 19
        },
        {
          "month": "2022-10-01",
          "registered": 29,
          "source": "Direct",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2022-11-01",
          "registered": 20,
          "source": "Direct",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2022-12-01",
          "registered": 2,
          "source": "Direct",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2020-11-01",
          "registered": 1,
          "source": "Organic Search",
          "win_rate": null,
          "won": 0
        },
        {
          "month": "2020-12-01",
          "registered": 15,
          "source": "Organic Search",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-01-01",
          "registered": 10,
          "source": "Organic Search",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2021-02-01",
          "registered": 4,
          "source": "Organic Search",
          "win_rate": null,
          "won": 0
        },
        {
          "month": "2021-03-01",
          "registered": 19,
          "source": "Organic Search",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-04-01",
          "registered": 12,
          "source": "Organic Search",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2021-05-01",
          "registered": 12,
          "source": "Organic Search",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2021-06-01",
          "registered": 16,
          "source": "Organic Search",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2021-07-01",
          "registered": 12,
          "source": "Organic Search",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2021-08-01",
          "registered": 15,
          "source": "Organic Search",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2021-09-01",
          "registered": 28,
          "source": "Organic Search",
          "win_rate": null,
          "won": 11
        },
        {
          "month": "2021-10-01",
          "registered": 11,
          "source": "Organic Search",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-11-01",
          "registered": 13,
          "source": "Organic Search",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2021-12-01",
          "registered": 38,
          "source": "Organic Search",
          "win_rate": 0.21052631578947367,
          "won": 8
        },
        {
          "month": "2022-01-01",
          "registered": 15,
          "source": "Organic Search",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-02-01",
          "registered": 13,
          "source": "Organic Search",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2022-03-01",
          "registered": 22,
          "source": "Organic Search",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2022-04-01",
          "registered": 14,
          "source": "Organic Search",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2022-05-01",
          "registered": 33,
          "source": "Organic Search",
          "win_rate": 0.12121212121212122,
          "won": 4
        },
        {
          "month": "2022-06-01",
          "registered": 31,
          "source": "Organic Search",
          "win_rate": 0.1935483870967742,
          "won": 6
        },
        {
          "month": "2022-07-01",
          "registered": 20,
          "source": "Organic Search",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2022-08-01",
          "registered": 25,
          "source": "Organic Search",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-09-01",
          "registered": 56,
          "source": "Organic Search",
          "win_rate": 0.25,
          "won": 14
        },
        {
          "month": "2022-10-01",
          "registered": 24,
          "source": "Organic Search",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2022-11-01",
          "registered": 22,
          "source": "Organic Search",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-12-01",
          "registered": 1,
          "source": "Organic Search",
          "win_rate": null,
          "won": 0
        },
        {
          "month": "2020-11-01",
          "registered": 2,
          "source": "Organic Social",
          "win_rate": null,
          "won": 0
        },
        {
          "month": "2020-12-01",
          "registered": 16,
          "source": "Organic Social",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-01-01",
          "registered": 22,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-02-01",
          "registered": 10,
          "source": "Organic Social",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2021-03-01",
          "registered": 14,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-04-01",
          "registered": 22,
          "source": "Organic Social",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2021-05-01",
          "registered": 15,
          "source": "Organic Social",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2021-06-01",
          "registered": 15,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-07-01",
          "registered": 15,
          "source": "Organic Social",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2021-08-01",
          "registered": 20,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-09-01",
          "registered": 13,
          "source": "Organic Social",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2021-10-01",
          "registered": 16,
          "source": "Organic Social",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2021-11-01",
          "registered": 13,
          "source": "Organic Social",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2021-12-01",
          "registered": 31,
          "source": "Organic Social",
          "win_rate": 0.1935483870967742,
          "won": 6
        },
        {
          "month": "2022-01-01",
          "registered": 18,
          "source": "Organic Social",
          "win_rate": null,
          "won": 3
        },
        {
          "month": "2022-02-01",
          "registered": 11,
          "source": "Organic Social",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2022-03-01",
          "registered": 27,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-04-01",
          "registered": 12,
          "source": "Organic Social",
          "win_rate": null,
          "won": 4
        },
        {
          "month": "2022-05-01",
          "registered": 17,
          "source": "Organic Social",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2022-06-01",
          "registered": 31,
          "source": "Organic Social",
          "win_rate": 0.16129032258064516,
          "won": 5
        },
        {
          "month": "2022-07-01",
          "registered": 26,
          "source": "Organic Social",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2022-08-01",
          "registered": 14,
          "source": "Organic Social",
          "win_rate": null,
          "won": 2
        },
        {
          "month": "2022-09-01",
          "registered": 34,
          "source": "Organic Social",
          "win_rate": 0.20588235294117646,
          "won": 7
        },
        {
          "month": "2022-10-01",
          "registered": 34,
          "source": "Organic Social",
          "win_rate": 0.23529411764705882,
          "won": 8
        },
        {
          "month": "2022-11-01",
          "registered": 15,
          "source": "Organic Social",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2020-11-01",
          "registered": 2,
          "source": "Refferal",
          "win_rate": null,
          "won": 1
        },
        {
          "month": "2020-12-01",
          "registered": 28,
          "source": "Refferal",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2021-01-01",
          "registered": 18,
          "source": "Refferal",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-02-01",
          "registered": 17,
          "source": "Refferal",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-03-01",
          "registered": 23,
          "source": "Refferal",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2021-04-01",
          "registered": 25,
          "source": "Refferal",
          "win_rate": null,
          "won": 9
        },
        {
          "month": "2021-05-01",
          "registered": 19,
          "source": "Refferal",
          "win_rate": null,
          "won": 5
        },
        {
          "month": "2021-06-01",
          "registered": 25,
          "source": "Refferal",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2021-07-01",
          "registered": 28,
          "source": "Refferal",
          "win_rate": null,
          "won": 10
        },
        {
          "month": "2021-08-01",
          "registered": 23,
          "source": "Refferal",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2021-09-01",
          "registered": 26,
          "source": "Refferal",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2021-10-01",
          "registered": 23,
          "source": "Refferal",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2021-11-01",
          "registered": 25,
          "source": "Refferal",
          "win_rate": null,
          "won": 6
        },
        {
          "month": "2021-12-01",
          "registered": 48,
          "source": "Refferal",
          "win_rate": 0.3333333333333333,
          "won": 16
        },
        {
          "month": "2022-01-01",
          "registered": 24,
          "source": "Refferal",
          "win_rate": null,
          "won": 7
        },
        {
          "month": "2022-02-01",
          "registered": 23,
          "source": "Refferal",
          "win_rate": null,
          "won": 9
        },
        {
          "month": "2022-03-01",
          "registered": 57,
          "source": "Refferal",
          "win_rate": 0.2982456140350877,
          "won": 17
        },
        {
          "month": "2022-04-01",
          "registered": 28,
          "source": "Refferal",
          "win_rate": null,
          "won": 8
        },
        {
          "month": "2022-05-01",
          "registered": 45,
          "source": "Refferal",
          "win_rate": 0.28888888888888886,
          "won": 13
        },
        {
          "month": "2022-06-01",
          "registered": 66,
          "source": "Refferal",
          "win_rate": 0.3484848484848485,
          "won": 23
        },
        {
          "month": "2022-07-01",
          "registered": 31,
          "source": "Refferal",
          "win_rate": 0.3870967741935484,
          "won": 12
        },
        {
          "month": "2022-08-01",
          "registered": 43,
          "source": "Refferal",
          "win_rate": 0.3023255813953488,
          "won": 13
        },
        {
          "month": "2022-09-01",
          "registered": 82,
          "source": "Refferal",
          "win_rate": 0.2926829268292683,
          "won": 24
        },
        {
          "month": "2022-10-01",
          "registered": 32,
          "source": "Refferal",
          "win_rate": 0.46875,
          "won": 15
        },
        {
          "month": "2022-11-01",
          "registered": 27,
          "source": "Refferal",
          "win_rate": null,
          "won": 10
        },
        {
          "month": "2022-12-01",
          "registered": 2,
          "source": "Refferal",
          "win_rate": null,
          "won": 1
        }
      ]
    },
    "won_vs_notwon_page_mix": {
      "call": {},
      "metric": "won_vs_notwon_page_mix",
      "rows": [
        {
          "page_name": "/features",
          "pageviews": 1650,
          "won_share": 0.26181818181818184
        },
        {
          "page_name": "/portofolio",
          "pageviews": 1626,
          "won_share": 0.24784747847478475
        },
        {
          "page_name": "/form/brochure",
          "pageviews": 1581,
          "won_share": 0.2511068943706515
        },
        {
          "page_name": "/testimonials",
          "pageviews": 1467,
          "won_share": 0.2556237218813906
        },
        {
          "page_name": "/form/set-a-meeting",
          "pageviews": 1381,
          "won_share": 0.2954380883417813
        },
        {
          "page_name": "/studycase",
          "pageviews": 1364,
          "won_share": 0.2727272727272727
        },
        {
          "page_name": "/form/demo",
          "pageviews": 1257,
          "won_share": 0.25218774860779636
        },
        {
          "page_name": "/home",
          "pageviews": 1206,
          "won_share": 0.24378109452736318
        },
        {
          "page_name": "/form/publications",
          "pageviews": 407,
          "won_share": 0.3022113022113022
        }
      ]
    }
  },
  "meta": {
    "catalog_size": 43,
    "catalog_used": 42,
    "data_cutoff": "2022-12-31",
    "db": "warehouse/saas.duckdb",
    "generated_at": "2026-11-25T04:16:34+00:00",
    "metrics_layer": "metrics/ (F4)",
    "rules": [
      "Setiap angka berasal dari satu pemanggilan metrik registry (F4).",
      "Rupiah dalam juta (Rp jt), persentase 1 desimal, tanggal UTC.",
      "2023 = renewal-only (F-7); CAC = proxy (aturan #6).",
      "Win rate tidak dihitung pada slice <30 leads (aturan #5).",
      "Snapshot tidak digabung ke time-series (aturan #5 di docs/08)."
    ],
    "script": "scripts/export_dashboard_data.py"
  }
};
