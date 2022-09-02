import useSWR from "swr";

import { fetchers, defaultSWROption } from "../fetcher";
import { PerYearResult } from "./type";

export const path = "api/v1/population/composition/perYear";

export const usePopulationCompositionPerYear = (prefCodes: number[]) => {
  const prefCodesPaths = prefCodes.map((c) => `${path}?prefCode=${c}`);
  const { data, error } = useSWR(prefCodesPaths, fetchers, defaultSWROption);

  const populationStructure: PerYearResult[] = data
    ? prefCodes.map((c, i) => {
        const dataValue = data[i].result?.data[0].data;
        const result: PerYearResult = {
          id: c,
          data: dataValue,
        };

        return result;
      })
    : [];
  const isLoading = !error && !data;
  const isError = error;

  return { populationStructure, isLoading, isError };
};
