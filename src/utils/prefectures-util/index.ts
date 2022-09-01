type PrefColor = {
  prefCode: number;
  colorCode: string;
};

const PrefColorData: PrefColor[] = [
  {
    /** 北海道 Indigo 900 */
    prefCode: 1,
    colorCode: "#312e81",
  },
  {
    /** 青森県 Blue 900 */
    prefCode: 2,
    colorCode: "#1e3a8a",
  },
  {
    /** 岩手県 Blue 800 */
    prefCode: 3,
    colorCode: "#1e40af",
  },
  {
    /** 宮城県 Blue 700 */
    prefCode: 4,
    colorCode: "#1d4ed8",
  },
  {
    /** 秋田県 Blue 600 */
    prefCode: 5,
    colorCode: "#2563eb",
  },
  {
    /** 山形県 Blue 500 */
    prefCode: 6,
    colorCode: "3b82f6",
  },
  {
    /** 福島県 Blue 400 */
    prefCode: 7,
    colorCode: "#60a5fa",
  },
  {
    /** 茨城県 Sky 900 */
    prefCode: 8,
    colorCode: "#0c4a6e",
  },
  {
    /** 栃木県 Sky 800 */
    prefCode: 9,
    colorCode: "#075985",
  },
  {
    /** 群馬県 Sky 700 */
    prefCode: 10,
    colorCode: "#0369a1",
  },
  {
    /** 埼玉県 Cyan 900 */
    prefCode: 11,
    colorCode: "#164e63",
  },
  {
    /** 千葉県 Cyan 800 */
    prefCode: 12,
    colorCode: "#155e75",
  },
  {
    /** 東京都 Cyan 700 */
    prefCode: 13,
    colorCode: "#0e7490",
  },
  {
    /** 神奈川県 Cyan 600 */
    prefCode: 14,
    colorCode: "#0891b2",
  },
  {
    /** 新潟県 Teal 900 */
    prefCode: 15,
    colorCode: "#134e4a",
  },
  {
    /** 富山県 Teal 800 */
    prefCode: 16,
    colorCode: "#155e75",
  },
  {
    /** 石川県 Teal 700 */
    prefCode: 17,
    colorCode: "#0e7490",
  },
  {
    /** 福井県 Teal 600 */
    prefCode: 18,
    colorCode: "#0d9488",
  },
  {
    /** 山梨県 Emerald 900 */
    prefCode: 19,
    colorCode: "#064e3b",
  },
  {
    /** 長野県 Emerald 800 */
    prefCode: 20,
    colorCode: "#065f46",
  },
  {
    /** 岐阜県 Emerald 700 */
    prefCode: 21,
    colorCode: "#047857",
  },
  {
    /** 静岡県 Emerald 600 */
    prefCode: 22,
    colorCode: "#059669",
  },
  {
    /** 愛知県 Emerald 500 */
    prefCode: 23,
    colorCode: "#10b981",
  },
  {
    /** 三重県 Green 900 */
    prefCode: 24,
    colorCode: "#14532d",
  },
  {
    /** 滋賀県 Green 800 */
    prefCode: 25,
    colorCode: "#166534",
  },
  {
    /** 京都府 Green 700 */
    prefCode: 26,
    colorCode: "#15803d",
  },
  {
    /** 大阪府 Green 600 */
    prefCode: 27,
    colorCode: "#16a34a",
  },
  {
    /** 兵庫県 Lime 900 */
    prefCode: 28,
    colorCode: "#365314",
  },
  {
    /** 奈良県 Lime 800 */
    prefCode: 29,
    colorCode: "#3f6212",
  },
  {
    /** 和歌山県 Lime 700 */
    prefCode: 30,
    colorCode: "#4d7c0f",
  },
  {
    /** 鳥取県 Yellow 900 */
    prefCode: 31,
    colorCode: "#713f12",
  },
  {
    /** 島根県 Yellow 800 */
    prefCode: 32,
    colorCode: "#854d0e",
  },
  {
    /** 岡山県 Yellow 700 */
    prefCode: 33,
    colorCode: "#a16207",
  },
  {
    /** 広島県 Yellow 600 */
    prefCode: 34,
    colorCode: "#ca8a04",
  },
  {
    /** 山口県 Yellow 500 */
    prefCode: 35,
    colorCode: "#eab308",
  },
  {
    /** 徳島県 Orange 900 */
    prefCode: 36,
    colorCode: "#7c2d12",
  },
  {
    /** 香川県 Orange 800 */
    prefCode: 37,
    colorCode: "#9a3412",
  },
  {
    /** 愛媛県 Orange 700 */
    prefCode: 38,
    colorCode: "#c2410c",
  },
  {
    /** 高知県 Orange 600 */
    prefCode: 39,
    colorCode: "#ea580c",
  },
  {
    /** 福岡県 Red 900 */
    prefCode: 40,
    colorCode: "#7f1d1d",
  },
  {
    /** 佐賀県 Red 800 */
    prefCode: 41,
    colorCode: "#991b1b",
  },
  {
    /** 長崎県 Red 700 */
    prefCode: 42,
    colorCode: "#b91c1c",
  },
  {
    /** 熊本県 Red 600 */
    prefCode: 43,
    colorCode: "#dc2626",
  },
  {
    /** 大分県 Rose 900 */
    prefCode: 44,
    colorCode: "#881337",
  },
  {
    /** 宮崎県 Rose 800 */
    prefCode: 45,
    colorCode: "#9f1239",
  },
  {
    /** 鹿児島県 Rose 700 */
    prefCode: 46,
    colorCode: "#be123c",
  },
  {
    /** 沖縄県 Pink 700 */
    prefCode: 47,
    colorCode: "#be185d",
  },
];

const getPrefColor = (prefCode: number) => PrefColorData.find((d) => d.prefCode === prefCode)?.colorCode;

export default getPrefColor;
