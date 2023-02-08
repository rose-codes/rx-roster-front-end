import { useContext } from "react";
import HistoryMed from "./HistoryMed";
import RxContext from "../context/RxContext";

const CompleteMedHistory = () => {
  const { medications } = useContext(RxContext);
  if (!medications || medications.length === 0) {
    return <p>No Medications Yet</p>;
  }
  return (
    <ol className="history-meds-list">
      {medications.map((med) => (
        <HistoryMed key={med.id} med={med} />
      ))}
    </ol>
  );
};

export default CompleteMedHistory;
