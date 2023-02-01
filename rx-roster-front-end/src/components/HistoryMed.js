import PropTypes from "prop-types";
const HistoryMed = ({ item }) => {
  return (
    <li>
      <div>{item.genericName}</div>
      <div>{item.strength}</div>
      <div>{item.strengthUnits}</div>
      <div>{item.brandName}</div>
      <div>{item.form}</div>
      <div>{item.prescribedFor}</div>
      <div>{item.prescriber}</div>
      <div>{item.pharmacyFilled}</div>
      <div>{item.manufacturer}</div>
      <div>{item.appearance}</div>
      <div>{item.datePrescribed}</div>
      <div>{item.sideEffects}</div>
    </li>
  );
};

HistoryMed.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HistoryMed;
