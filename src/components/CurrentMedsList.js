import RxContext from "../context/RxContext";
import { useRxContext } from "../hooks/useRxContext";
import { useAuthContext } from "../hooks/useAuthContext";
import CardAccordion from "./shared/CardAccordion";
import { useContext } from "react";

const CurrentMedsList = () => {
  const { medications, dispatch } = useRxContext();
  const { user } = useAuthContext();
  return (
    <ol className="current-meds-list">
      {medications.map((med) => (
        <CardAccordion key={med._id} med={med} />
      ))}
    </ol>
  );
};

export default CurrentMedsList;
