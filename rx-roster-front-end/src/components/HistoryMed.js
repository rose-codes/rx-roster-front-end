import MedCard from "./shared/MedCard";

const HistoryMed = ({ med }) => {
  return (
    <li className="medication-display">
      <MedCard med={med} />
    </li>
  );
};

export default HistoryMed;
