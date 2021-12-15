import axios from "axios";
import { swrConfig } from "config/apiConfig";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { SWRConfig } from "swr";

const AppWrapper: FC = ({ children }) => {
  const token = useSelector((state: RootState) => state.user.user?.token);
  axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
};

export default AppWrapper;
