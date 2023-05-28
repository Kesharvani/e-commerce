import { signupServices } from "../Services/signup/signupServices";
import { loginService } from "../Services/login/loginService";

const { createContext, useContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const signupHandler = async (email, password, firstName, dataOfBirth) => {
    try {
      const {
        data: { user, encodedToken },
        status,
      } = await signupServices(email, password, firstName, dataOfBirth);
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await loginService(email, password);
      console.log(foundUser, encodedToken, "login details");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedin, setIsLoggedIn, loginHandler, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
