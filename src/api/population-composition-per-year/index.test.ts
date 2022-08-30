import useSWR from "swr";
import { expect, test, vi } from "vitest";

import { PerYear, PerYearData } from "./type";

import { getPopulationCompositionPerYear } from ".";

vi.mock("swr");

test("success", () => {
  const perYearData1: PerYearData = {
    label: "perYearData1",
    data: [
      {
        year: 2015,
        value: 1000,
      },
      {
        year: 2016,
        value: 1100,
      },
    ],
  };
  const perYearData2: PerYearData = {
    label: "perYearData2",
    data: [
      {
        year: 2015,
        value: 1000,
        rate: 11.1,
      },
      {
        year: 2016,
        value: 1100,
        rate: 11.2,
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
  useSWR.mockReturnValue({ data: mockData });

  const { populationStructure, isLoading, isError } = getPopulationCompositionPerYear(1);
  expect(populationStructure).toEqual(mockData.result.data[0].data);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual(undefined);
});

test("isLoading = true", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined });

  const { populationStructure, isLoading, isError } = getPopulationCompositionPerYear(1);
  expect(populationStructure).toEqual([]);
  expect(isLoading).toEqual(true);
  expect(isError).toEqual(undefined);
});

test("error", () => {
  // @ts-ignore
  useSWR.mockReturnValue({ data: undefined, error: "Server Error" });

  const { populationStructure, isLoading, isError } = getPopulationCompositionPerYear(1);
  expect(populationStructure).toEqual([]);
  expect(isLoading).toEqual(false);
  expect(isError).toEqual("Server Error");
});
