import { Container, Row, Col } from "react-bootstrap";
import CurrentMedsList from "../components/CurrentMedsList";
import NewMedForm from "../components/NewMedForm";
import Footer from "../components/shared/Footer";
// import NavBar from "../components/shared/NavBar";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <h1 className="p-3 m-3">Welcome Back, User</h1>
      </Row>
      <Row>
        <Col>
          <h3>Current Medications</h3>
          <CurrentMedsList />
        </Col>
        <Col>
          <h3>Add a New Medication</h3>
          <NewMedForm />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
