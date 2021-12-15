import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/";

export const swrConfig = {
  fetcher: (url: string) => axios.get(url).then(res => res.data),
};
