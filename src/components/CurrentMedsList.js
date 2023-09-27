import { useRxContext } from "../hooks/useRxContext";
import CardAccordion from "./shared/CardAccordion";

const CurrentMedsList = () => {
  const { medications } = useRxContext();
  return (
    <ol className="current-meds-list">
      {medications.map((med) => (
        <CardAccordion key={med.medId} med={med} />
      ))}
    </ol>
  );
};

export default CurrentMedsList;
