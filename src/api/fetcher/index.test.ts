import fetchMock from "fetch-mock";

import { RESAS_ENDPOINT, fetcher, fetchers } from ".";

test("call fetcher", async () => {
  const path = "test";
  const mockUrl = `${RESAS_ENDPOINT}/${path}`;
  fetchMock.mock(mockUrl, {
    json: "success",
  });
  const result = await fetcher(path);

  expect(result.json).toEqual("success");
  fetchMock.restore();
});

test("call fetchers", async () => {
  const mockUrl1 = `${RESAS_ENDPOINT}/test1`;
  fetchMock.mock(mockUrl1, {
    json: "success1",
  });
  const mockUrl2 = `${RESAS_ENDPOINT}/test2`;
  fetchMock.mock(mockUrl2, {
    json: "success2",
  });
  const result = await fetchers(["test1", "test2"]);

  expect(result[0].json).toEqual("success1");
  expect(result[1].json).toEqual("success2");
  fetchMock.restore();
});
