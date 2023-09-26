export const PharmacyInput = ({ errors, register }) => {
  return (
    <section className="grid-row-start-3">
      <div className="grid grid-rows-4 grid-cols-2">
        <div className="row-start-1 w-6/12">
          <div className="input-group">
            <label>Date Prescribed:</label>
            <input
              className={`${
                errors.datePrescribed && "invalid"
              } form-text-input`}
              type="text"
              {...register("datePrescribed", {
                valueAsDate: {
                  value: true,
                  message: "Please provide a valid date",
                },
              })}
              placeholder="Date Prescribed"
            ></input>
          </div>
        </div>
        <div className="row-start-1 col-start-2 w-6/12">
          {/* <FormInput
            inputType="text"
            label="Date Started:"
            formName="startDate"
            placeholder="Date Medication Started"
            validation={{
              valueAsDate: {
                value: true,
                message: "Please provide a valid date",
              },
            }}
          /> */}
          <div className="input-group">
            <label>Date Started:</label>
            <input
              className={`${errors.startDate && "invalid"} form-text-input`}
              type="text"
              {...register("startDate", {
                valueAsDate: {
                  value: true,
                  message: "Please provide a valid date",
                },
              })}
              placeholder="Date Medication Started"
            ></input>
          </div>
        </div>
        <div className="row-start-2 w-6/12">
          <div className="input-group">
            <label>Pharmacy:</label>
            <input
              type="text"
              {...register("pharmacyFilled")}
              placeholder="Pharmacy"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
        <div className="row-start-2 col-start-2 w-6/12">
          <div className="input-group">
            <label>Manufacturer:</label>
            <input
              type="text"
              {...register("manufacturer")}
              placeholder="Manufacturer"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
        <div className="row-start-3 w-6/12">
          <div className="input-group">
            <label>Side Effects:</label>
            <input
              type="text"
              placeholder="Side Effects"
              {...register("sideEffects")}
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
        <div className="row-start-4 w-6/12">
          {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
          <div className="input-group">
            <label>Appearance:</label>
            <input
              type="text"
              {...register("appearance")}
              placeholder="Appearance"
              className="input-field form-text-input"
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
};
