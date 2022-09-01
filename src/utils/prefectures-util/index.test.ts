import getPrefColor from "./index";

describe("getPrefColor", () => {
  it("return colorCode", () => {
    const result = getPrefColor(3);

    expect(result).toBe("#1e40af");
  });

  it("return undefined", () => {
    const result = getPrefColor(48);

    expect(result).toBe(undefined);
  });
});
