import useSWR from "swr";

import { fetcher, defaultSWROption } from "../fetcher";
import { Prefectures, Pref } from "./type";

export const path = "api/v1/prefectures";

export const usePrefectures = () => {
  const { data, error } = useSWR<Prefectures>(path, fetcher, defaultSWROption);

  const prefectures: Pref[] = data?.result ?? [];
  const isLoading = !error && !data;
  const isError = error;

  return { prefectures, isLoading, isError };
};
