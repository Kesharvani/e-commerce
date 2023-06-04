import { signupServices } from "../Services/signup/signupServices";
import { loginService } from "../Services/login/loginService";
import { useNavigate } from "react-router-dom";

const { createContext, useContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const localStorageToken = JSON.parse(localStorage.getItem("loginTokenItem"));
  const [loginToken, setLoginToken] = useState(localStorageToken?.token);
  // const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const signupHandler = async (email, password, firstName, dataOfBirth) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signupServices(email, password, firstName, dataOfBirth);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginTokenItem",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setIsLoggedIn(true);
        setLoginToken(encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await loginService(email, password);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginTokenItem",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setIsLoggedIn(true);
        setLoginToken(encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginTokenItem");
    setIsLoggedIn(false);
    navigate("/auth");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        setIsLoggedIn,
        loginHandler,
        signupHandler,
        logoutHandler,
        loginToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
