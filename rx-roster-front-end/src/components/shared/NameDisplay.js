const NameDisplay = ({ med }) => {
  if (!med.genericName) {
    return (
      <div className="card-section">
        <label>Medication Name</label>
        <div>{med.brandName}</div>
      </div>
    );
  } else if (!med.brandName) {
    return (
      <div className="card-section">
        <label>Medication Name</label>
        <div>{med.genericName}</div>
      </div>
    );
  } else {
    return (
      <div className="names-display">
        <div className="card-section">
          <label>Generic Name</label>
          <div>{med.genericName}</div>
        </div>
        <div className="card-section">
          <label>Brand Name</label>
          <div>{med.brandName}</div>
        </div>
      </div>
    );
  }
};

export default NameDisplay;
