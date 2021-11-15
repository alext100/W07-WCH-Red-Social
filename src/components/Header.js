import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector(({ user }) => user);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/main">Alex's social network</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? (
              <NavLink className="header-navlink" to="/main">
                Main
              </NavLink>
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
