import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm/LoginFofm";

function App() {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
}

export default App;
