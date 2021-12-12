import { useForm } from "react-hook-form";
import { useLoginForm } from "hooks/useLoginForm";

// TO DO MOVE TO TYPES

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { invalidLogin, onSubmit, reqiureError, invalidLoginError } = useLoginForm();
  const displayInvalidLoginError = invalidLogin ? invalidLoginError : null;
  return (
    <>
      {displayInvalidLoginError}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="form-group">
          {/* to do - handling invalid email format manually will give better ui  */}
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </fieldset>
        {errors?.email?.type?.required && reqiureError}
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </fieldset>
        {errors?.password && reqiureError}
        <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
      </form>
    </>
  );
};

export default LoginForm;
