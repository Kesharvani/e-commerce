import "../../Components/LoginRegister.css";
import { useState } from "react";
import { Login } from "../../Components/Login";
import { Register } from "../../Components/Register";
import { Button } from "../../Common/Button.jsx";
import { LoginBenefit } from "../../Common/LoginBenefit";
import Footer from "../../Components/Footer";
export function LoginRegister() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const firstButtonHandler = () => {
    setLogin(true);
    setRegister(false);
  };
  const secondButtonHandler = () => {
    setRegister(true);
    setLogin(false);
  };
  return (
    <>
      <div className="container">
        <div className="buttons-container">
          <div className="button-container">
            <hr className={login ? "border-yellow" : "border-grey"} />
            <Button btnHandler={firstButtonHandler} headerbtnClass="header-btn">
              <font>already registered?</font>
              <h2>Register</h2>
            </Button>
          </div>
          <div className="button-container">
            <hr className={register ? "border-yellow" : "border-grey"} />
            <Button
              btnHandler={secondButtonHandler}
              headerbtnClass="header-btn"
            >
              <font>not registered yet?</font>
              <h2>to register</h2>
            </Button>
          </div>
        </div>
        <div className="form-container">
          {login && (
            <div className="login-form-container">
              <Login />
            </div>
          )}
          <div className="benefit-container">
            <LoginBenefit />
          </div>
          {register && (
            <div className="login-form-container">
              <Register />
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
