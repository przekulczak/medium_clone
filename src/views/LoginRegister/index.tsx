import { Topbar, Footer } from "components/Layout";
import Form from "./Form";
const LoginRegister = () => {
  return (
    <>
      <Topbar />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginRegister;
