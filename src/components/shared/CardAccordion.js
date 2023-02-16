import {
  Accordion,
  useAccordionButton,
  Card,
  Container,
} from "react-bootstrap";
import MedCard from "./MedCard";

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    console.log("totally custom!");
  });

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const CardAccordion = ({ med }) => {
  const displayName = (med) => {
    if (!med.genericName) {
      return med.brandName;
    }
    return med.genericName;
  };

  return (
    <Accordion defaultActiveKey="0">
      <Container>
        <Card>
          <Card.Header as="h5" className="pw-2 py-4">
            {displayName(med)} {med.strength}
            {med.strengthUnits}
            <CustomToggle eventKey={med._item}>Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={med._item}>
            <Card.Body>
              <MedCard key={med._id} med={med} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Container>
    </Accordion>
  );
};

export default CardAccordion;
