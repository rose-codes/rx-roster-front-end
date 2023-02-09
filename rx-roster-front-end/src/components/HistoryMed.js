import MedCard from "./shared/MedCard";

const HistoryMed = ({ med }) => {
  return (
    <li className="medication-display" key={med._id}>
      <MedCard med={med} />
    </li>
  );
};

export default HistoryMed;
