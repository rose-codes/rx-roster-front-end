import { DashboardCurrentMed } from "./shared/DashboardCurrentMed";
import { FaArrowRightLong } from "react-icons/fa6";
import { NoMedications } from "./shared/NoMedications";
import Link from "next/link";

const CurrentMedsList = ({ medications }) => {
  return (
    <section data-theme="pastel">
      {medications.length < 1 && <NoMedications />}
      {medications.map((med) => (
        <DashboardCurrentMed key={med.medId} med={med} />
      ))}
      <Link
        href="/all-medications"
        className="flex gap-1.5 items-center mt-3 no-underline text-neutral-content"
      >
        <span>All Current Medications</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
      <Link
        href="/all-medications"
        className="flex gap-1.5 items-center mt-3 no-underline text-neutral-content"
      >
        <span>Medication History</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
      <Link
        href="/all-medication"
        className="flex gap-1.5 items-center mt-3 no-underline text-neutral-content"
      >
        <span>Add a New Medication</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </section>
  );
};

export default CurrentMedsList;
