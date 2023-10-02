export const DashboardCurrentMed = ({ med }) => {
  return (
    <section
      className="medication grid grid-cols-2 bg-base-200 border-b-2 border-dashed border-slate-500 py-3 pl-3"
      data-theme="pastel"
    >
      <h5 className="row-start-1 col-start-1 font-extrabold">
        {med.genericName}
      </h5>
      <div className="medication-details row-start-2 col-start-1 flex gap-2 text-info-content -mt-2">
        <span>
          {med.strength}
          {med.strengthUnits}
        </span>
        <span>
          {med.medForm.charAt(0).toUpperCase() + med.medForm.slice(1)}
        </span>
      </div>
      <div className="button-wrapper flex justify-center row-span-2 self-center">
        <button className="row-start-1 col-start-2 w-3/4 btn btn-secondary">
          See More
        </button>
      </div>
    </section>
  );
};
