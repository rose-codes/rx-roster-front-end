const NameDisplay = ({ med }) => {
  if (!med.genericName) {
    return <div className="card-section">{med.brandName}</div>;
  } else if (!med.brandName) {
    return <div>{med.genericName}</div>;
  } else {
    return (
      <div>
        <span>{med.genericName} </span>
        <span>({med.brandName})</span>
      </div>
    );
  }
};

export default NameDisplay;
