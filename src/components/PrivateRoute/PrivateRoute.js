import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import LoginForm from "../loginForm/LoginForm";

const PrivateRoute = ({ children }) => {
  const { isUserLoggedIn, user } = useUsers();

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

  console.log("user.isAuthenticated: ", user.isAuthenticated);
  return user.isAuthenticated ? children : <LoginForm />;
};

export default PrivateRoute;
