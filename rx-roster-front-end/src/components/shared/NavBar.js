import { Routes, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import AboutPage from "../../pages/AboutPage";
import Dashboard from "../../pages/Dashboard";
import AllMedsPage from "../../pages/AllMedsPage";
import NotFound from "../../pages/NotFound";

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
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-medications" element={<AllMedsPage />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavBar;
