import "./LoginRegister.css"
export const Register = () => {
    return (
      <div className="login">
        <form>
          <div className="input-container">
            <label id="label">Gender(optional)</label>
            <select name="" id="" placeholder="Enter email address">
              <option value="Male">Chose Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="input-container">
            <label id="label">First Name(optional)</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div className="input-container">
            <label id="label">Last Name(optional)</label>
            <input type="text" placeholder="Enter Last Name" />
          </div>
          <div className="input-container">
            <label id="label">Date of Birth</label>
            <input type="date" />
          </div>
          <div className="input-container">
            <label id="label">E-mail Address</label>
            <input type="text" placeholder="Enter email address" />
          </div>
          <div className="input-container">
            <label id="label">User Name(optional)</label>
            <input type="text" placeholder="Enter User Name" />
          </div>
          <div className="input-container">
            <label id="label">Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
  
          <button className="login-btn">Register</button>
        </form>
      </div>
    );
  };
  