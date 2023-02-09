import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
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
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
