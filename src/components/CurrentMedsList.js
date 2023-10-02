import { DashboardCurrentMed } from "./shared/DashboardCurrentMed";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CurrentMedsList = ({ medications }) => {
  const location = useLocation();
  return (
    <section data-theme="pastel">
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
    </section>
    // <ol className="current-meds-list">
    //   {medications.map((med) => (
    //     <CardAccordion key={med.medId} med={med} />
    //   ))}
    // </ol>
  );
};

export default CurrentMedsList;
