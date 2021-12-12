import { useForm } from "react-hook-form";
import { Topbar, Footer } from "components/Layout";
// TO DO MOVE TO VIEWS
// TO DO MOVE FORM TO SEPARATE COMPONENT
const LoginRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const reqiureError = (
    <ul className="error-messages">
      <li>Field should not be empty</li>
    </ul>
  );
  return (
    <>
      <Topbar />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <form>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginRegister;
