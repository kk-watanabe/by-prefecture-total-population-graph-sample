import getAarryWithValueAddOrReduce from "./index";

describe("getAarryWithValueAddOrReduce", () => {
  it("return array with value reduce", () => {
    const result = getAarryWithValueAddOrReduce([1, 2, 3], 3);

    expect(result).toEqual([1, 2]);
  });

  it("return array with value add", () => {
    const result = getAarryWithValueAddOrReduce([1, 2, 3], 4);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
