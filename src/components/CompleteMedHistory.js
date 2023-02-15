import { useContext } from "react";
import { useRxContext } from "../hooks/useRxContext";
import { useAuthContext } from "../hooks/useAuthContext";
import RxContext from "../context/RxContext";
import CardAccordion from "./shared/CardAccordion";

const CompleteMedHistory = () => {
  const { medications, dispatch } = useRxContext();
  const { user } = useAuthContext();
  if (!medications || medications.length === 0) {
    return <p>No Medications Yet</p>;
  }
  return (
    <ol className="history-meds-list">
      {medications.map((med) => (
        <CardAccordion key={med.id} med={med} />
      ))}
    </ol>
  );
};

export default CompleteMedHistory;
