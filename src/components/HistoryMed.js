import MedCard from "./shared/MedCard";

const HistoryMed = ({ med }) => {
  return (
    <li className="medication-display" key={med.medId}>
      <MedCard med={med} />
    </li>
  );
};

export default HistoryMed;
