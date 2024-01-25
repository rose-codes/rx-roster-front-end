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
        className="flex gap-1.5 text-sm items-center justify-center no-underline text-neutral-content border rounded-full p-2 mt-3 sm:mt-6 sm:p-4 sm:gap-2 sm:text-base"
      >
        <span>View More Medications</span>
      </Link>
      <div className="flex">
        <Link
          href="/all-medications"
          className="flex gap-1.5 text-sm items-center no-underline text-neutral-content border rounded-full p-2 sm:p-3 sm:gap-2 sm:text-base"
        >
          <span>Medication History</span>
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
        <Link
          href="/all-medication"
          className="flex gap-1.5 text-sm items-center no-underline text-neutral-content border rounded-full p-2 sm:p-3 sm:gap-2 sm:text-base"
        >
          <span>Add a New Medication</span>
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CurrentMedsList;
