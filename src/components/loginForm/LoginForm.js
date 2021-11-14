import { useState } from "react";
import { FloatingLabel, Form, Button, ButtonGroup } from "react-bootstrap";
import useUsers from "../../hooks/useUsers";

const LoginForm = () => {
  const { userLogin } = useUsers();
  const initialData = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setUserData(initialData);
  };

  const onLogin = (event) => {
    event.preventDefault();
    userLogin(userData);
    resetForm();
  };

  return (
    <>
      <h1 className="h3 fs-4">Login</h1>
      <Form className="form-create" autoComplete="off" onSubmit={onLogin}>
        <Form.Group className="col-md-5" controlId="username">
          <Form.Label>Username</Form.Label>
          <FloatingLabel
            controlId="username"
            label="Username ..."
            className="mb-3"
          >
            <Form.Control
              required
              placeholder="username"
              type="text"
              maxLength="30"
              value={userData.username}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="col-md-5" controlId="password">
          <Form.Label>Password</Form.Label>
          <FloatingLabel
            controlId="password"
            label="Password..."
            className="mb-3"
          >
            <Form.Control
              required
              placeholder="password"
              type="password"
              value={userData.password}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>
        <ButtonGroup className="offset-1 gap-sm-5" aria-label="Buttons">
          <Button
            variant="primary"
            size="sm"
            type="button"
            onClick={onLogin}
            value="Login"
          >
            Login
          </Button>
          <Button
            variant="primary"
            size="sm"
            type="button"
            /* onClick={onRegister} */
            value="Login"
          >
            Create new account
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default LoginForm;
