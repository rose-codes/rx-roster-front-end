import RxContext from "../context/RxContext";
import CardAccordion from "./shared/CardAccordion";
import { useContext } from "react";

const CurrentMedsList = () => {
  const { currentMeds } = useContext(RxContext);
  return (
    <ol className="current-meds-list">
      {currentMeds.map((med) => (
        <CardAccordion key={med._id} med={med} />
      ))}
    </ol>
  );
};

export default CurrentMedsList;
