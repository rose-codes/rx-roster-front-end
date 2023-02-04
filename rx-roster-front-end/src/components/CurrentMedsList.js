import CurrentMed from "./CurrentMed";
import RxContext from "../context/RxContext";
import { useContext } from "react";

const CurrentMedsList = () => {
  const { currentMeds } = useContext(RxContext);
  return (
    <ol className="current-meds-list">
      {currentMeds.map((med) => (
        <CurrentMed key={med._id} med={med} />
      ))}
    </ol>
  );
};

export default CurrentMedsList;
