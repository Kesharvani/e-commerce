import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../Contexts/AuthContext";

export const Login = () => {
  const { loginHandler } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const submit = (e) => {
    e.preventDefault();
    loginHandler(loginData.email, loginData.password);
  };

  return (
    <div className="login">
      {
        <form onSubmit={submit}>
          <div className="input-container">
            <label id="label">E-mail Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label id="label">Password</label>
            <input
              type="password"
              value={loginData.password}
              placeholder="Enter password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <div className="signed-forget-container">
            <div className="signed-in">
              <input type="checkbox" />
              <span>remain signed in</span>
            </div>
            <div>
              <Link id="link-text">forget Password</Link>
            </div>
          </div>
          <button className="login-btn" onClick={submit}>
            Login
          </button>
        </form>
      }
    </div>
  );
};
