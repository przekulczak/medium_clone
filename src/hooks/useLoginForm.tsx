import { useState } from "react";
import { axiosInstance } from "config/apiConfig";

interface Login {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const [invalidLogin, setInvalidLogin] = useState(false);
  const onSubmit = (data: Login) => axiosInstance.post("/users/login", data).catch(err => setInvalidLogin(true));
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
