import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="nav-bar">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RxRoster</Navbar.Brand>
          <Nav className="nav-link">
            <Nav.Item eventkey={1} href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="nav-link">
            <Nav.Item eventkey={2} href="/">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="nav-link">
            <Nav.Item eventkey={3} href="/">
              <Nav.Link as={Link} to="/all-medications">
                All Medications
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {user && <button onClick={handleClick}>Logout</button>}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
