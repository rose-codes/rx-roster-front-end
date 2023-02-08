import { Accordion } from "react-bootstrap";
import CurrentMed from "../CurrentMed";

const CardAccordion = ({ med, key }) => {
  const displayName = (med) => {
    if (!med.genericName) {
      return med.brandName;
    }
    return med.genericName;
  };
  return (
    <Accordion>
      <Accordion.Item eventKey={key}>
        <Accordion.Header>
          {displayName(med)} {med.strength}
          {med.strengthUnits}
        </Accordion.Header>
        <Accordion.Body>
          <CurrentMed med={med} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CardAccordion;
