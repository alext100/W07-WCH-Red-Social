import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/loginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegisterForm from "./components/registerForm/RegisterForm";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/main"
            element={
              <PrivateRoute>
                {" "}
                <MainPage />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="*" element={<MainPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
