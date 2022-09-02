import useSWR from "swr";
import { expect, test, vi } from "vitest";

import { Prefectures } from "./type";

import { usePrefectures } from ".";

vi.mock("swr");

test("success", () => {
  const mockData: Prefectures = {
    message: null,
    result: [
      {
        prefCode: 1,
        prefName: "prefName1",
      },
      {
        prefCode: 2,
        prefName: "prefName2",
      },
    ],
  };
  // @ts-ignore
  useSWR.mockReturnValue({ data: mockData });

  const { prefectures, isLoading, isError } = usePrefectures();
  expect(prefectures).toEqual(mockData.result);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual(undefined);
});

test("isLoading = true", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined });

  const { prefectures, isLoading, isError } = usePrefectures();
  expect(prefectures).toEqual([]);
  expect(isLoading).toEqual(true);
  expect(isError).toEqual(undefined);
});

test("error", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined, error: "Server Error" });

  const { prefectures, isLoading, isError } = usePrefectures();
  expect(prefectures).toEqual([]);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual("Server Error");
});
