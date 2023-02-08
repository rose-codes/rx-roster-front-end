import { Container, Row, Col } from "react-bootstrap";
import CurrentMedsList from "../components/CurrentMedsList";
import NewMedForm from "../components/NewMedForm";
import Footer from "../components/shared/Footer";
// import NavBar from "../components/shared/NavBar";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <h1>Welcome Back, User</h1>
        <h2>Current Medications</h2>
      </Row>
      <Row>
        <Col>
          <CurrentMedsList />
        </Col>
        <Col>
          <NewMedForm />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
