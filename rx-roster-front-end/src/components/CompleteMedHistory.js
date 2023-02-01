import { useContext } from "react";
import HistoryMed from "./HistoryMed";
import RxContext from "../context/RxContext";

const CompleteMedHistory = ({}) => {
  const { medications } = useContext(RxContext);
  if (!medications || medications.length === 0) {
    return <p>No Medications Yet</p>;
  }
  return (
    <ol className="history-meds-list">
      {medications.map((item) => (
        <HistoryMed key={item.id} item={item} />
      ))}
    </ol>
  );
};

export default CompleteMedHistory;
