import { useState } from "react";

import "./LoginRegister.css";
import { useAuth } from "../Contexts/AuthContext";
export const Register = () => {
  const { signupHandler } = useAuth();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    firstName: "",
    dataOfBirth: "",
  });
  const submit = (e) => {
    e.preventDefault();
    signupHandler(
      signupData.email,
      signupData.password,
      signupData.firstName,
      signupData.dataOfBirth
    );
  };
  return (
    <div className="login">
      <form onSubmit={submit}>
        <div className="input-container">
          <label id="label">Gender(optional)</label>
          <select name="" id="" placeholder="Enter email address">
            <option value="Male">Chose Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="input-container">
          <label id="label">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            required
            value={signupData.firstName}
            onChange={(e) =>
              setSignupData({ ...signupData, firstName: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label id="label">Last Name(optional)</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <div className="input-container">
          <label id="label">Date of Birth</label>
          <input
            type="date"
            required
            value={signupData.dataOfBirth}
            onChange={(e) =>
              setSignupData({ ...signupData, dataOfBirth: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label id="label">E-mail Address</label>
          <input
            type="text"
            placeholder="Enter email address"
            required
            value={signupData.email}
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label id="label">User Name(optional)</label>
          <input type="text" placeholder="Enter User Name" />
        </div>
        <div className="input-container">
          <label id="label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
        </div>
        <button className="login-btn" onClick={submit}>
          Register
        </button>
      </form>
    </div>
  );
};
