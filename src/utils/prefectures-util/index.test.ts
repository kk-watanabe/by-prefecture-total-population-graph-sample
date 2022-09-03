import { getPrefColor, getPrefecturesWithValueAddOrReduce } from "./index";

describe("getPrefColor", () => {
  it("return colorCode", () => {
    const result = getPrefColor(3);

    expect(result).toBe("#1d4ed8");
  });

  it("return undefined", () => {
    const result = getPrefColor(48);

    expect(result).toBe(undefined);
  });
});

describe("getPrefecturesWithValueAddOrReduce", () => {
  it("return array with value reduce", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
      },
      {
        prefCode: 14,
        prefName: "神奈川県",
      },
    ];
    const result = getPrefecturesWithValueAddOrReduce(prefectures, prefectures[0]);

    expect(result).toEqual([prefectures[1]]);
  });

  it("return array with value add", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
      },
      {
        prefCode: 14,
        prefName: "神奈川県",
      },
    ];
    const addPref = {
      prefCode: 15,
      prefName: "新潟県",
    };
    const result = getPrefecturesWithValueAddOrReduce(prefectures, addPref);

    expect(result).toEqual([...prefectures, addPref]);
  });
});
