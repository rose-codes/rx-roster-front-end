import PropTypes from "prop-types";
import HistoryMed from "./HistoryMed";
const CompleteMedHistory = ({ medications }) => {
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

CompleteMedHistory.propTypes = {
  medications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brandName: PropTypes.string.isRequired,
      genericName: PropTypes.string.isRequired,
      form: PropTypes.string.isRequired,
      strength: PropTypes.number.isRequired,
      strengthUnits: PropTypes.string.isRequired,
      prescribedFor: PropTypes.string.isRequired,
      instructions: PropTypes.string.isRequired,
      prescriber: PropTypes.string.isRequired,
      pharmacyFilled: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      appearance: PropTypes.string.isRequired,
      currentlyTaking: PropTypes.bool.isRequired,
      datePrescribed: PropTypes.string.isRequired,
      sideEffects: PropTypes.string.isRequired,
    })
  ),
};

export default CompleteMedHistory;
