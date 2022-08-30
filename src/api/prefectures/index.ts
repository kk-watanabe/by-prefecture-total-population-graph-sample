import useSWR from "swr";

import { fetcher, defaultSWROption } from "../index";
import { Prefectures, Pref } from "./type";

export const path = "api/v1/prefectures";

export const getPrefectures = () => {
  const { data, error } = useSWR<Prefectures>(path, fetcher, defaultSWROption);

  const prefectures: Pref[] = data?.result ?? [];
  const isLoading = !error && !data;
  const isError = error;

  return { prefectures, isLoading, isError };
};
