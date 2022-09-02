const options = {
  headers: { "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY as string },
};

export const RESAS_ENDPOINT = import.meta.env.VITE_RESAS_ENDPOINT as string;

const getResJson = (path: string) => fetch(`${RESAS_ENDPOINT}/${path}`, options).then((res) => res.json());

export const fetcher = (path: string) => getResJson(path);

export const fetchers = (...paths: string[]) => Promise.all(paths.map(getResJson));

export const defaultSWROption = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
