import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { history } from "App";
import { AxiosResponse } from "axios";
import { UserDetails } from "../types/user";
import { setUser } from "../store/user";

//TO DO MOVE TO TYPES
interface LoginReq {
  email: string;
  password: string;
}

interface LoginRes {
  user: UserDetails;
}

export const useLoginForm = () => {
  const dispatch = useDispatch();

  const [invalidLogin, setInvalidLogin] = useState(false);

  const onSubmit = (data: LoginReq) =>
    axios
      .post<LoginRes>("/users/login", { user: data })
      .then((res: AxiosResponse<LoginRes>) => {
        axios.defaults.headers.common["Authorization"] = `Token ${res.data.user.token}`;
        dispatch(setUser(res.data.user));
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
