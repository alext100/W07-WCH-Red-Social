import { useState } from "react";
import { FloatingLabel, Form, Button, ButtonGroup } from "react-bootstrap";
import useUsers from "../../hooks/useUsers";

const RegisterForm = () => {
  const { createUser } = useUsers();
  const initialData = {
    username: "",
    password: "",
    name: "",
    image: "",
    age: "",
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

  const onRegister = (event) => {
    event.preventDefault();
    createUser(userData);
    resetForm();
  };

  return (
    <>
      <h1 className="h3 fs-4">Register</h1>
      <Form className="form-create" autoComplete="off" onSubmit={onRegister}>
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

        <Form.Group className="col-md-5" controlId="name">
          <Form.Label>Name</Form.Label>
          <FloatingLabel controlId="name" label="Name..." className="mb-3">
            <Form.Control
              required
              placeholder="name"
              type="text"
              value={userData.name}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="col-md-5" controlId="image">
          <Form.Label>Image</Form.Label>
          <FloatingLabel
            controlId="image"
            label="For now it's only url"
            className="mb-3"
          >
            <Form.Control
              required
              placeholder="image"
              type="text"
              value={userData.image}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="col-md-5" controlId="age">
          <Form.Label>Age</Form.Label>
          <FloatingLabel controlId="age" label="Age..." className="mb-3">
            <Form.Control
              required
              placeholder="age"
              type="number"
              maxLength="3"
              min={0}
              max={120}
              value={userData.age}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>

        <ButtonGroup className="offset-2 gap-sm-5" aria-label="Buttons">
          <Button
            variant="primary"
            size="sm"
            type="submit"
            onClick={onRegister}
            value="Login"
          >
            Create account
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default RegisterForm;
