import NameDisplay from "./NameDisplay";
import { Card } from "react-bootstrap";

const MedCard = ({ med }) => {
  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>
            <NameDisplay med={med} />
          </Card.Title>
          <Card.Text>
            {med.strength}
            {med.strengthUnits}
          </Card.Text>
          <Card.Text>
            #{med.quantity} {med.quantityUnits}
          </Card.Text>
          <Card.Text>Form: {med.medForm}</Card.Text>
          <Card.Text>Prescribed For: {med.prescribedFor}</Card.Text>
          <Card.Text>Instructions: {med.instructions} </Card.Text>
          <Card.Text>Prescriber: {med.prescriber}</Card.Text>
          <Card.Text>Manufacturer: {med.manufacturer}</Card.Text>
          <Card.Text>Appearance: {med.appearance}</Card.Text>
          <Card.Text>Date Prescribed: {med.datePrescribed}</Card.Text>
          <Card.Text>Start Date: {med.startDate}</Card.Text>
          <Card.Text>Side Effects: {med.sideEffects}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedCard;
