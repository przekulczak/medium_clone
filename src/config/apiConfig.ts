import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: `` },
});

export const swrConfig = {
  fetcher: (url: string) => axiosInstance.get(url).then(res => res.data),
};
