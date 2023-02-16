import NameDisplay from "./NameDisplay";
import { useForm } from "react-hook-form";
import { useRxContext } from "../../hooks/useRxContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Card, Button, Form } from "react-bootstrap";

const MedCard = ({ med }) => {
  const { register } = useForm({
    defaultValues: {
      currentlyTaking: med.currentlyTaking,
    },
  });
  const { state, dispatch, updateMed } = useRxContext();
  const { user } = useAuthContext();

  const handleChecked = () => {
    if (user) {
      updateMed(med._id, { currentlyTaking: !med.currentlyTaking });
    }
  };

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
          {med.prescribedFor && (
            <Card.Text>Prescribed For: {med.prescribedFor}</Card.Text>
          )}
          {med.instructions && (
            <Card.Text>Instructions: {med.instructions} </Card.Text>
          )}
          {med.prescriber && (
            <Card.Text>Prescriber: {med.prescriber}</Card.Text>
          )}
          {med.manufacturer && (
            <Card.Text>Manufacturer: {med.manufacturer}</Card.Text>
          )}
          {med.appearance && (
            <Card.Text>Appearance: {med.appearance}</Card.Text>
          )}
          {med.datePrescribed && (
            <Card.Text>Date Prescribed: {med.datePrescribed}</Card.Text>
          )}
          {med.startDate && <Card.Text>Start Date: {med.startDate}</Card.Text>}
          {med.sideEffects && (
            <Card.Text>Side Effects: {med.sideEffects}</Card.Text>
          )}
          <Form>
            <Form.Check
              type="checkbox"
              id="ct-checkbox"
              label="Currently Taking"
              {...register("currentlyTaking")}
              onChange={handleChecked}
            ></Form.Check>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MedCard;
