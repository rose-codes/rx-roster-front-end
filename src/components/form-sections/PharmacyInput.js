export const PharmacyInput = ({ errors, register }) => {
  return (
    <div className="grid">
      <div className="input-field row-start-1" controlId="datePrescribed">
        <label>Date Prescribed:</label>
        <input
          className={`text-field ${errors.datePrescribed && "invalid"}`}
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
      <div
        className="input-field row-start-1 col-start-2"
        controlId="startDate"
      >
        <label>Date Started:</label>
        <input
          className={`text-field ${errors.startDate && "invalid"}`}
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
      <div className="input-field row-start-2" controlId="pharmacy">
        <label>Pharmacy:</label>
        <input
          type="text"
          {...register("pharmacyFilled")}
          placeholder="Pharmacy"
        ></input>
      </div>
      <div
        className="input-field row-start-2 col-start-2"
        controlId="manufacturer"
      >
        <label>Manufacturer:</label>
        <input
          type="text"
          {...register("manufacturer")}
          placeholder="Manufacturer"
        ></input>
      </div>

      <div className="input-field row-start-3" controlId="sideEffects">
        <label>Side Effects:</label>
        <input
          type="text"
          placeholder="Side Effects"
          {...register("sideEffects")}
        ></input>
      </div>
      {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
      <div className="input-field row-start-4" controlId="appearance">
        <label>Appearance:</label>
        <input
          type="text"
          {...register("appearance")}
          placeholder="Appearance"
        ></input>
      </div>
    </div>
  );
};
