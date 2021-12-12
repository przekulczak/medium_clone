import { FC } from "react";
import useSWR from "swr";

const AppWrapper: FC = ({ children }) => {
  const { data: user } = useSWR("/user");
  return <>{children}</>;
};

export default AppWrapper;
