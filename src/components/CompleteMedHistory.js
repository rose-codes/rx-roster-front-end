import CardAccordion from "./shared/CardAccordion";

const CompleteMedHistory = ({ medications }) => {
  if (!medications || medications.length === 0) {
    return <p>No Medications Yet</p>;
  }
  return (
    <ol className="history-meds-list">
      {medications.map((med) => (
        <li key={med.medId}>
          <CardAccordion key={med.medId} med={med} />
        </li>
      ))}
    </ol>
  );
};

export default CompleteMedHistory;
