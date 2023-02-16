import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import CurrentMedsList from "../components/CurrentMedsList";
import NewMedForm from "../components/NewMedForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRxContext } from "../hooks/useRxContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { medications, dispatch, getCurrentMedications } = useRxContext();
  const [formDisplayed, setFormDisplayed] = useState(false);

  const handleButtonClick = () => {
    setFormDisplayed(!formDisplayed);
  };

  useEffect(() => {
    if (user) {
      getCurrentMedications();
    }
  }, [dispatch, user]);

  return (
    <Container className="d-grid gap-3">
      <Row>
        <h1 className="py-4 my-3">Welcome Back, {user.firstName}</h1>
      </Row>
      <Row>
        <Col>
          <div className="meds-list p-5">
            <h3 className="mb-3">Current Medications</h3>
            {medications && <CurrentMedsList medications={medications} />}
          </div>
        </Col>
        <Col>
          <div className="meds-list p-5">
            <h3>Add a New Medication</h3>
            {formDisplayed && <NewMedForm />}
            <Button onClick={handleButtonClick}>
              {formDisplayed ? "Hide Form" : "Show Form"}
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <div className="meds-list p-5">
            <h3>Prescription Schedule</h3>
          </div>
        </Col>
        <Col>
          <div className="meds-list p-5">
            <h3>Pharmacies</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
