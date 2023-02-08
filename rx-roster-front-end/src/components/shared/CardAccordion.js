import { Accordion, useAccordionButton, Card } from "react-bootstrap";
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
      <Card>
        <Card.Header>
          {displayName(med)} {med.strength}
          {med.strengthUnits}
          <CustomToggle eventKey={med._item}>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={med._item}>
          <Card.Body>
            <MedCard med={med} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CardAccordion;
