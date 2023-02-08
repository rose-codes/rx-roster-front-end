import { useContext } from "react";
import RxContext from "../context/RxContext";
import { Button, Card } from "react-bootstrap";
import MedCard from "./shared/MedCard";

const CurrentMed = ({ med }) => {
  const { updateMed } = useContext(RxContext);

  const handleButtonClick = () => {
    const changedStatus = { currentlyTaking: false };
    updateMed(med._id, changedStatus);
  };

  return (
    <li className="medication-display">
      <div className="container">
        <MedCard med={med} />
        <Button onClick={handleButtonClick}>No Longer Taking</Button>
      </div>
    </li>
  );
};

export default CurrentMed;
