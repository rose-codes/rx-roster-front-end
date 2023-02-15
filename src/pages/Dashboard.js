import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import CurrentMedsList from "../components/CurrentMedsList";
import CardAccordion from "../components/shared/CardAccordion";
import NewMedForm from "../components/NewMedForm";
import Footer from "../components/shared/Footer";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRxContext } from "../hooks/useRxContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { medications, dispatch, getCurrentMedications } = useRxContext();
  const backendURI = "http://localhost:5000";

  useEffect(() => {
    // const getCurrentMedications = async () => {
    //   const response = await fetch(
    //     `${backendURI}/api/medications?` +
    //       new URLSearchParams({ currentlyTaking: true }),
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     dispatch({ type: "SET_MEDICATIONS", payload: data });
    //   }
    // };
    if (user) {
      getCurrentMedications();
    }
  }, [dispatch, user]);

  console.log("medications:", medications);
  return (
    <Container>
      <Row>
        <h1 className="p-3 m-3">Welcome Back, {user.firstName}</h1>
      </Row>
      <Row>
        <Col>
          <h3>Current Medications</h3>
          {/* {medications &&
            medications.map((medication) => {
              <CardAccordion key={medication._id} medication={medication} />;
            })} */}
          {medications && <CurrentMedsList medications={medications} />}
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
