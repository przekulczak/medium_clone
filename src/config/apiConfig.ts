import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: { Authorization: token }
});

export const swrConfig = {
  fetcher: (url: string) => instance.get(url).then(res => res.data),
};
