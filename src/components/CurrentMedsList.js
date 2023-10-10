import { DashboardCurrentMed } from "./shared/DashboardCurrentMed";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { NoMedications } from "./shared/NoMedications";

const CurrentMedsList = ({ medications }) => {
  const location = useLocation();
  return (
    <section data-theme="pastel">
      {medications.length < 1 && <NoMedications />}
      {location.pathname === "/" &&
        medications.map((med) => (
          <DashboardCurrentMed key={med.medId} med={med} />
        ))}
      <button className="flex gap-1.5 items-center mt-3">
        <span>All Current Medications</span>
        <span>
          <FaArrowRightLong />
        </span>
      </button>
      <button className="flex gap-1.5 items-center mt-3">
        <span>Medication History</span>
        <span>
          <FaArrowRightLong />
        </span>
      </button>
      <button className="flex gap-1.5 items-center mt-3">
        <span>Add a New Medication</span>
        <span>
          <FaArrowRightLong />
        </span>
      </button>
    </section>
  );
};

export default CurrentMedsList;
