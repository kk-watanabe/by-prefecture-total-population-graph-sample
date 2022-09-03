import useSWR from "swr";

import { fetchers, defaultSWROption } from "../fetcher";
import { PerYearResult, PerYear } from "./type";

export const path = "api/v1/population/composition/perYear";

const generatePerYearResult = (data: PerYear[], prefCodes: number[]): PerYearResult[] => {
  const today = new Date();
  const year = today.getFullYear();
  const filterData = data.map((d) =>
    d.result.data[0].data.filter(
      (yaerData) => yaerData.year <= year && yaerData.year >= year - 50 && yaerData.year % 10 === 0
    )
  );
  const years = filterData[0].map((d) => d.year);

  return years.map((y) => {
    const values = filterData.map((d, i) => {
      const yearData = d.filter((x) => x.year === y)[0];
      const code = prefCodes[i];

      return {
        [code]: yearData.value,
      };
    });

    const result: PerYearResult = Object.assign(Object.assign({}, ...values), { year: `${y}年` });

    return result;
  });
};

export const usePopulationCompositionPerYear = (prefCodes: number[]) => {
  const prefCodesPaths = prefCodes.map((c) => `${path}?prefCode=${c}`);
  const { data, error } = useSWR(prefCodesPaths, fetchers, defaultSWROption);

  const populationStructure: PerYearResult[] = data ? generatePerYearResult(data as PerYear[], prefCodes) : [];
  const isLoading = !error && !data;
  const isError = error;

  return { populationStructure, isLoading, isError };
};
