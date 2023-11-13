import CompleteMedHistory from "../../components/CompleteMedHistory";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRxContext } from "../../hooks/useRxContext";
import { Container, Row, Col } from "react-bootstrap";
import NewMedForm from "../../components/NewMedForm";
import { useEffect } from "react";
const AllMedsPage = () => {
  const { user } = useAuthContext();
  const { medications, dispatch, getMedications } = useRxContext();

  useEffect(() => {
    if (user) {
      getMedications();
    }
  }, [dispatch, user]);
  return (
    <Container>
      <Row></Row>
      <Row>
        <Col>
          <h3 className="py-3">All Medications</h3>
          <CompleteMedHistory medications={medications} />
        </Col>
        <Col>
          <h3 className="py-3">Add a New Medication</h3>
          <NewMedForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AllMedsPage;
