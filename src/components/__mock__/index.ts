import { path as populationCompositionPath } from "@/api/population-composition-per-year";
import { path as prefecturesPath } from "@/api/prefectures";

const RESAS_ENDPOINT = import.meta.env.VITE_RESAS_ENDPOINT as string;

export const prefecturesApiPath = `${RESAS_ENDPOINT}/${prefecturesPath}`;

export const prefecturesMock = {
  message: null,
  result: [
    {
      prefCode: 1,
      prefName: "北海道",
    },
    {
      prefCode: 2,
      prefName: "青森県",
    },
    {
      prefCode: 3,
      prefName: "岩手県",
    },
    {
      prefCode: 4,
      prefName: "宮城県",
    },
    {
      prefCode: 5,
      prefName: "秋田県",
    },
    {
      prefCode: 6,
      prefName: "山形県",
    },
    {
      prefCode: 7,
      prefName: "福島県",
    },
    {
      prefCode: 8,
      prefName: "茨城県",
    },
    {
      prefCode: 9,
      prefName: "栃木県",
    },
    {
      prefCode: 10,
      prefName: "群馬県",
    },
    {
      prefCode: 11,
      prefName: "埼玉県",
    },
    {
      prefCode: 12,
      prefName: "千葉県",
    },
    {
      prefCode: 13,
      prefName: "東京都",
    },
    {
      prefCode: 14,
      prefName: "神奈川県",
    },
    {
      prefCode: 15,
      prefName: "新潟県",
    },
    {
      prefCode: 16,
      prefName: "富山県",
    },
    {
      prefCode: 17,
      prefName: "石川県",
    },
    {
      prefCode: 18,
      prefName: "福井県",
    },
    {
      prefCode: 19,
      prefName: "山梨県",
    },
    {
      prefCode: 20,
      prefName: "長野県",
    },
    {
      prefCode: 21,
      prefName: "岐阜県",
    },
    {
      prefCode: 22,
      prefName: "静岡県",
    },
    {
      prefCode: 23,
      prefName: "愛知県",
    },
    {
      prefCode: 24,
      prefName: "三重県",
    },
    {
      prefCode: 25,
      prefName: "滋賀県",
    },
    {
      prefCode: 26,
      prefName: "京都府",
    },
    {
      prefCode: 27,
      prefName: "大阪府",
    },
    {
      prefCode: 28,
      prefName: "兵庫県",
    },
    {
      prefCode: 29,
      prefName: "奈良県",
    },
    {
      prefCode: 30,
      prefName: "和歌山県",
    },
    {
      prefCode: 31,
      prefName: "鳥取県",
    },
    {
      prefCode: 32,
      prefName: "島根県",
    },
    {
      prefCode: 33,
      prefName: "岡山県",
    },
    {
      prefCode: 34,
      prefName: "広島県",
    },
    {
      prefCode: 35,
      prefName: "山口県",
    },
    {
      prefCode: 36,
      prefName: "徳島県",
    },
    {
      prefCode: 37,
      prefName: "香川県",
    },
    {
      prefCode: 38,
      prefName: "愛媛県",
    },
    {
      prefCode: 39,
      prefName: "高知県",
    },
    {
      prefCode: 40,
      prefName: "福岡県",
    },
    {
      prefCode: 41,
      prefName: "佐賀県",
    },
    {
      prefCode: 42,
      prefName: "長崎県",
    },
    {
      prefCode: 43,
      prefName: "熊本県",
    },
    {
      prefCode: 44,
      prefName: "大分県",
    },
    {
      prefCode: 45,
      prefName: "宮崎県",
    },
    {
      prefCode: 46,
      prefName: "鹿児島県",
    },
    {
      prefCode: 47,
      prefName: "沖縄県",
    },
  ],
};

export const populationStructurApiPath = (code: number) =>
  `${RESAS_ENDPOINT}/${populationCompositionPath}?prefCode=${code}`;

export const populationCompositionMock1 = {
  message: null,
  result: {
    boundaryYear: 2015,
    data: [
      {
        label: "総人口",
        data: [
          {
            year: 1980,
            value: 12817,
          },
          {
            year: 1985,
            value: 12707,
          },
          {
            year: 1990,
            value: 12571,
          },
          {
            year: 1995,
            value: 12602,
          },
          {
            year: 2000,
            value: 12199,
          },
          {
            year: 2005,
            value: 11518,
          },
          {
            year: 2010,
            value: 10888,
          },
          {
            year: 2015,
            value: 10133,
          },
          {
            year: 2020,
            value: 9275,
          },
          {
            year: 2025,
            value: 8431,
          },
        ],
      },
    ],
  },
};

export const populationCompositionMock2 = {
  message: null,
  result: {
    boundaryYear: 2015,
    data: [
      {
        label: "総人口",
        data: [
          {
            year: 1980,
            value: 12800,
          },
          {
            year: 1985,
            value: 12700,
          },
          {
            year: 1990,
            value: 12500,
          },
          {
            year: 1995,
            value: 12600,
          },
          {
            year: 2000,
            value: 12100,
          },
          {
            year: 2005,
            value: 11500,
          },
          {
            year: 2010,
            value: 10800,
          },
          {
            year: 2015,
            value: 10100,
          },
          {
            year: 2020,
            value: 9200,
          },
          {
            year: 2025,
            value: 8400,
          },
        ],
      },
    ],
  },
};
