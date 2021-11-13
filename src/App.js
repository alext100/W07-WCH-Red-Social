import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <RegisterForm />
    </BrowserRouter>
  );
}

export default App;
