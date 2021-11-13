import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/registerForm/RegisterForm";
import { getUser } from "./factories/usersFactory";

function App() {
  console.log("getUser(): ", getUser());
  return (
    <BrowserRouter>
      <RegisterForm />
    </BrowserRouter>
  );
}

export default App;
