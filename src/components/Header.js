import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, user, userLogout } = useUsers();

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

  const actionOnClick = (event) => {
    event.preventDefault();
    userLogout();
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/main">Alex's social network</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user.isAuthenticated ? (
              <>
                <NavLink className="header-navlink" to="/main">
                  Main
                </NavLink>
                <NavLink
                  className="header-navlink"
                  onClick={actionOnClick}
                  to="/login"
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="header-navlink" to="/login">
                  Login
                </NavLink>
                <NavLink className="header-navlink" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
