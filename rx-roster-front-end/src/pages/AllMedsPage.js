import CompleteMedHistory from "../components/CompleteMedHistory";
import { Container, Row, Col } from "react-bootstrap";
import NewMedForm from "../components/NewMedForm";
import Footer from "../components/shared/Footer";
const AllMedsPage = () => {
  return (
    <Container>
      <Row></Row>
      <Row>
        <Col>
          <h3>Current Medications</h3>
          <CompleteMedHistory />
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

export default AllMedsPage;
