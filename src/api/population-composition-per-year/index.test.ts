import useSWR from "swr";
import { expect, test, vi } from "vitest";

import { PerYear, PerYearData } from "./type";

import { usePopulationCompositionPerYear } from ".";

vi.mock("swr");
vi.useFakeTimers().setSystemTime(new Date("2022-07-22"));

test("success", async () => {
  const perYearData1: PerYearData = {
    label: "perYearData1",
    data: [
      {
        year: 2010,
        value: 1000,
      },
      {
        year: 2020,
        value: 1100,
      },
    ],
  };
  const perYearData2: PerYearData = {
    label: "perYearData2",
    data: [
      {
        year: 2010,
        value: 10200,
      },
      {
        year: 2020,
        value: 11200,
      },
    ],
  };
  const mockData: PerYear = {
    message: null,
    result: {
      boundaryYear: 2015,
      data: [perYearData1, perYearData2],
    },
  };
  // @ts-ignore
  useSWR.mockReturnValue({ data: [mockData, mockData] });

  const { populationStructure, isLoading, isError } = await usePopulationCompositionPerYear([1, 10]);
  expect(populationStructure).toEqual([
    {
      "1": 1000,
      "10": 1000,
      year: "2010年",
    },
    {
      "1": 1100,
      "10": 1100,
      year: "2020年",
    },
  ]);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual(undefined);
});

test("isLoading = true", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined });

  const { populationStructure, isLoading, isError } = usePopulationCompositionPerYear([1, 10]);
  expect(populationStructure).toEqual([]);
  expect(isLoading).toEqual(true);
  expect(isError).toEqual(undefined);
});

test("error", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined, error: "Server Error" });

  const { populationStructure, isLoading, isError } = usePopulationCompositionPerYear([1, 10]);
  expect(populationStructure).toEqual([]);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual("Server Error");
});
