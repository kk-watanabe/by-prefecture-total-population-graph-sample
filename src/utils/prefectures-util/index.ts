import { Pref } from "@/api/prefectures/type";

type PrefColor = {
  prefCode: number;
  colorCode: string;
};

const PrefColorData: PrefColor[] = [
  {
    /** 北海道 Violet 800 */
    prefCode: 1,
    colorCode: "#5b21b6",
  },
  {
    /** 青森県 Blue 800 */
    prefCode: 2,
    colorCode: "#1e40af",
  },
  {
    /** 岩手県 Blue 700 */
    prefCode: 3,
    colorCode: "#1d4ed8",
  },
  {
    /** 宮城県 Blue 600 */
    prefCode: 4,
    colorCode: "#2563eb",
  },
  {
    /** 秋田県 Blue 500 */
    prefCode: 5,
    colorCode: "#3b82f6",
  },
  {
    /** 山形県 Blue 400 */
    prefCode: 6,
    colorCode: "#60a5fa",
  },
  {
    /** 福島県 Blue 300 */
    prefCode: 7,
    colorCode: "#93c5fd",
  },
  {
    /** 茨城県 Sky 600 */
    prefCode: 8,
    colorCode: "#0284c7",
  },
  {
    /** 栃木県 Sky 500 */
    prefCode: 9,
    colorCode: "#0ea5e9",
  },
  {
    /** 群馬県 Sky 400 */
    prefCode: 10,
    colorCode: "#38bdf8",
  },
  {
    /** 埼玉県 Cyan 700 */
    prefCode: 11,
    colorCode: "#0e7490",
  },
  {
    /** 千葉県 Cyan 600 */
    prefCode: 12,
    colorCode: "#0891b2",
  },
  {
    /** 東京都 Cyan 500 */
    prefCode: 13,
    colorCode: "#06b6d4",
  },
  {
    /** 神奈川県 Cyan 400 */
    prefCode: 14,
    colorCode: "#22d3ee",
  },
  {
    /** 新潟県 Teal 700 */
    prefCode: 15,
    colorCode: "#0f766e",
  },
  {
    /** 富山県 Teal 600 */
    prefCode: 16,
    colorCode: "#0d9488",
  },
  {
    /** 石川県 Teal 500 */
    prefCode: 17,
    colorCode: "#14b8a6",
  },
  {
    /** 福井県 Teal 400 */
    prefCode: 18,
    colorCode: "#2dd4bf",
  },
  {
    /** 山梨県 Emerald 700 */
    prefCode: 19,
    colorCode: "#047857",
  },
  {
    /** 長野県 Emerald 600 */
    prefCode: 20,
    colorCode: "#059669",
  },
  {
    /** 岐阜県 Emerald 500 */
    prefCode: 21,
    colorCode: "#10b981",
  },
  {
    /** 静岡県 Emerald 400 */
    prefCode: 22,
    colorCode: "#34d399",
  },
  {
    /** 愛知県 Emerald 300 */
    prefCode: 23,
    colorCode: "#6ee7b7",
  },
  {
    /** 三重県 Green 700 */
    prefCode: 24,
    colorCode: "#15803d",
  },
  {
    /** 滋賀県 Green 600 */
    prefCode: 25,
    colorCode: "#16a34a",
  },
  {
    /** 京都府 Green 500 */
    prefCode: 26,
    colorCode: "#22c55e",
  },
  {
    /** 大阪府 Green 400 */
    prefCode: 27,
    colorCode: "#4ade80",
  },
  {
    /** 兵庫県 Lime 500 */
    prefCode: 28,
    colorCode: "#84cc16",
  },
  {
    /** 奈良県 Lime 400 */
    prefCode: 29,
    colorCode: "#a3e635",
  },
  {
    /** 和歌山県 Lime 300 */
    prefCode: 30,
    colorCode: "#bef264",
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
    /** 徳島県 Orange 700 */
    prefCode: 36,
    colorCode: "#c2410c",
  },
  {
    /** 香川県 Orange 600 */
    prefCode: 37,
    colorCode: "#ea580c",
  },
  {
    /** 愛媛県 Orange 500 */
    prefCode: 38,
    colorCode: "#f97316",
  },
  {
    /** 高知県 Orange 400 */
    prefCode: 39,
    colorCode: "#fb923c",
  },
  {
    /** 福岡県 Red 700 */
    prefCode: 40,
    colorCode: "#b91c1c",
  },
  {
    /** 佐賀県 Red 600 */
    prefCode: 41,
    colorCode: "#dc2626",
  },
  {
    /** 長崎県 Red 500 */
    prefCode: 42,
    colorCode: "#ef4444",
  },
  {
    /** 熊本県 Red 400 */
    prefCode: 43,
    colorCode: "#f87171",
  },
  {
    /** 大分県 Rose 700 */
    prefCode: 44,
    colorCode: "#be123c",
  },
  {
    /** 宮崎県 Rose 600 */
    prefCode: 45,
    colorCode: "#e11d48",
  },
  {
    /** 鹿児島県 Rose 500 */
    prefCode: 46,
    colorCode: "#f43f5e",
  },
  {
    /** 沖縄県 Pink 600 */
    prefCode: 47,
    colorCode: "#db2777",
  },
];

export function* range(start: number, end: number) {
  for (let i = start; i < end; i += 1) {
    yield i;
  }
}

export const hokkaidoAndTouhokuCodes = [...range(1, 8)];
export const kantoCodes = [...range(8, 15)];
export const tyubuCodes = [...range(15, 24)];
export const kinkiCodes = [...range(23, 31)];
export const tyugokuAndshikokuCodes = [...range(31, 40)];
export const kyusyuAndOkinawaCodes = [...range(40, 48)];

export const getRangePrefectures = (prefectures: Pref[], rangePrefCodes: number[]) =>
  prefectures.filter((p) => rangePrefCodes.includes(p.prefCode));

export const getPrefColor = (prefCode: number) => PrefColorData.find((d) => d.prefCode === prefCode)?.colorCode;

/**
 * array に value が含まれていたら削除した array を返す
 * array に value が無い場合追加した array を返す
 * @param array
 * @param value
 * @returns
 */
export const getPrefecturesWithValueAddOrReduce = (prefectures: Pref[], value: Pref): Pref[] => {
  if (prefectures.some((p) => p.prefCode === value.prefCode)) {
    const result = prefectures.filter((p) => p.prefCode !== value.prefCode);
    return result;
  }

  return [...prefectures, value];
};
