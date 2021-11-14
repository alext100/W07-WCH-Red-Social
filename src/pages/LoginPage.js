import RegisterForm from "../components/registerForm/RegisterForm";
import LoginForm from "../components/loginForm/LoginForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const user = useSelector((store) => store.user);
  return <>{user.isAuthenticated ? <RegisterForm /> : <LoginForm />}</>;
};

export default LoginPage;
