import useUsers from "../../hooks/useUsers";
import LoginForm from "../loginForm/LoginForm";

const PrivateRoute = ({ children }) => {
  const user = useUsers();
  return user.isAuthenticated ? children : <LoginForm />;
};

export default PrivateRoute;
