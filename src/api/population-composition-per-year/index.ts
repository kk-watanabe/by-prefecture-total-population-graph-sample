import useSWR from "swr";

import { fetcher, defaultSWROption } from "../index";
import { PerYear, YaerData } from "./type";

export const path = "api/v1/population/composition/perYear";

export const getPopulationCompositionPerYear = (prefCode: number) => {
  const prefCodesPath = `${path}?prefCode=${prefCode}`;
  const { data, error } = useSWR<PerYear>(prefCodesPath, fetcher, defaultSWROption);

  const populationStructure: YaerData[] = data?.result?.data[0].data ?? [];
  const isLoading = !error && !data;
  const isError = error;

  return { populationStructure, isLoading, isError };
};
