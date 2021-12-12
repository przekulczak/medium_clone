import { useState } from "react";
import { axiosInstance } from "config/apiConfig";
import { history } from "App";
import { AxiosResponse } from "axios";
import { UserDetails } from "../types/user";

//TO DO MOVE TO TYPES
interface LoginReq {
  email: string;
  password: string;
}

interface LoginRes {
  user: UserDetails;
}

export const useLoginForm = () => {
  const [invalidLogin, setInvalidLogin] = useState(false);
  const onSubmit = (data: LoginReq) =>
    axiosInstance
      .post<LoginRes>("/users/login", { user: data })
      .then((res: AxiosResponse<LoginRes>) => {
        history.push("/");
      })
      .catch(() => setInvalidLogin(true));
  const reqiureError = (
    <ul className="error-messages">
      <li>Field should not be empty</li>
    </ul>
  );
  const invalidLoginError = (
    <ul className="error-messages">
      <li>Invalid login data</li>
    </ul>
  );

  return { invalidLogin, onSubmit, reqiureError, invalidLoginError };
};
