const options = {
  headers: { "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY as string },
};

const RESAS_ENDPOINT = import.meta.env.VITE_RESAS_ENDPOINT as string;

export const fetcher = (path: string) => fetch(`${RESAS_ENDPOINT}/${path}`, options).then((res) => res.json());

export const defaultSWROption = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
