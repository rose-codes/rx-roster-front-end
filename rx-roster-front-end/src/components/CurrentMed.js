import { useContext } from "react";
import RxContext from "../context/RxContext";
const CurrentMed = ({ med }) => {
  const { updateMed } = useContext(RxContext);

  const handleButtonClick = () => {
    const changedStatus = { currentlyTaking: false };
    updateMed(med._id, changedStatus);
  };

  return (
    <li className="medication-display">
      <div>{med.genericName}</div>
      <div>{med.brandName}</div>
      <div>{med.strength}</div>
      <div>{med.strengthUnits}</div>
      <div>{med.quantity}</div>
      <div>{med.quantityUnits}</div>
      <div>{med.medForm}</div>
      <div>{med.prescribedFor}</div>
      <div>{med.instructions}</div>
      <div>{med.prescriber}</div>
      <div>{med.manufacturer}</div>
      <div>{med.appearance}</div>
      <div>{med.datePrescribed}</div>
      <div>{med.startDate}</div>
      <div>{med.sideEffects}</div>
      <button type="button" onClick={handleButtonClick}>
        No Longer Taking
      </button>
    </li>
  );
};

export default CurrentMed;
