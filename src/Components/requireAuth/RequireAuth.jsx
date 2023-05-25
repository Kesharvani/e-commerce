import { useAuth } from "../../Contexts/AuthContext";

import { Navigate, useLocation } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedin } = useAuth();
  return isLoggedin ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
};
