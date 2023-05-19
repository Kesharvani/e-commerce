import './LoginRegister.css'
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="login">
      {
        <form>
          <div className="input-container">
            <label id="label">E-mail Address</label>
            <input type="text" placeholder="Enter email address" />
          </div>
          <div className="input-container">
            <label id="label">Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="signed-forget-container">
            <div className="signed-in">
              <input type="checkbox" />
              <span>remain signed in</span>
            </div>
            <div>
              <Link>forget Password</Link>
            </div>
          </div>
          <button className="login-btn">Login</button>
        </form>
      }
    </div>
  );
};
