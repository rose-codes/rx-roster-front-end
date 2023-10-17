export const DashboardCurrentMed = ({ med }) => {
  const { genericName, strength, strengthUnits, medForm, medId } = med;
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <section
      className="medication grid grid-cols-2 bg-base-200 border-b-2 border-dashed border-slate-500 py-3 pl-3"
      data-theme="pastel"
    >
      <h5 className="row-start-1 col-start-1 font-extrabold">
        {capitalize(genericName)}
      </h5>
      <div className="medication-details row-start-2 col-start-1 flex gap-2 text-info-content -mt-2">
        <span>
          {strength}
          {strengthUnits}
        </span>
        <span>{capitalize(medForm)}</span>
      </div>
      <div className="button-wrapper flex justify-center row-span-2 self-center">
        <button
          className="row-start-1 col-start-2 w-3/4 du-btn du-btn-primary"
          onClick={() =>
            document.getElementById(`current-med-modal-${medId}`).showModal()
          }
        >
          See More
        </button>
        <dialog id={`current-med-modal-${medId}`} className="du-modal">
          <div className="du-modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="du-btn du-btn-sm du-btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <span>
              <h3 className="font-bold text-lg">{genericName}</h3>
            </span>
            <span>
              <h4 className="font-bold text-md">
                {strength} {capitalize(strengthUnits)}
              </h4>
            </span>
          </div>
        </dialog>
      </div>
    </section>
  );
};
