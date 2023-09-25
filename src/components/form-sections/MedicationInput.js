const MedicationInput = ({ errors, register }) => {
  return (
    <div className="grid grid-rows-4 grid-cols-2">
      <div
        className="input-group row-start-1 col-start-1"
        controlId="genericName"
      >
        <label>Generic Name*:</label>
        <input
          className={`text-field ${
            errors.genericName && "invalid"
          } input-field`}
          type="text"
          {...register("genericName", {
            required: {
              value: true,
              message: "Generic Name is Required",
            },
            minLength: {
              value: 3,
              message: "Medication names must be longer than 3 characters",
            },
          })}
          placeholder="Generic Name"
        ></input>
        <small className="error-message">
          {errors?.genericName && errors.genericName.message}
        </small>
      </div>
      <div
        className="input-group row-start-1 col-start-2"
        controlId="brandName"
      >
        <label>Brand Name*:</label>
        <input
          className={`text-field ${errors.brandName && "invalid"} input-field`}
          type="text"
          {...register("brandName", {
            required: { value: true, message: "Brand Name is Required" },
            minLength: {
              value: 3,
              message: "Medication names must be longer than 3 characters",
            },
          })}
          placeholder="Brand Name"
        ></input>
        <small className="error-message">
          {errors?.brandName && errors.brandName.message}
        </small>
      </div>

      <div className="input-group row-start-2 col-start-1" controlId="strength">
        <label>Strength*:</label>
        <input
          className={`text-field ${
            errors.strength && "invalid"
          } .text-number-input`}
          type="number"
          step="0.001"
          {...register("strength", {
            required: { value: true, message: "Please enter a number." },
            valueAsNumber: {
              value: true,
              message: "Please enter a valid number.",
            },
            min: {
              value: 0,
              message: "Medication strengths must be greater than 0.",
            },
          })}
          placeholder="Strength"
        ></input>
        <small className="error-message">
          {errors?.strength && errors.strength.message}
        </small>
      </div>
      <div
        className="input-field row-start-2 col-start-2"
        controlId="strengthUnits"
      >
        <label>Strength Units*:</label>
        <select
          id="strength-units"
          className={`text-field ${
            errors.strengthUnits && "invalid"
          } form-select-input`}
          {...register("strengthUnits", {
            required: {
              value: true,
              message: "Please select valid units",
            },
          })}
        >
          <option value="">---</option>
          <option value="%">%</option>
          <option value="mg">mg</option>
          <option value="mL">mL</option>
        </select>
        <small className="error-message">
          {errors?.strengthUnits && errors.strengthUnits.message}
        </small>
      </div>

      <div className="input-field row-start-3" controlId="quantity">
        <label>Quantity*:</label>
        <input
          className={`text-field ${
            errors.quantity && "invalid"
          } .text-number-input`}
          type="number"
          {...register("quantity", {
            required: { value: true, message: "Please enter a number" },
            valueAsNumber: {
              value: true,
              message: "Please enter a valid number",
            },
            min: {
              value: 0,
              message: "Medication strengths must be greater than 0.",
            },
          })}
          placeholder="Quantity"
        ></input>
        <small className="error-message">
          {errors?.quantity && errors.quantity.message}
        </small>
      </div>

      <div
        className="input-field row-start-3 col-start-2"
        controlId="quantityUnits"
      >
        <label> Quantity Units*:</label>
        <select
          className={`text-field ${
            errors.quantityUnits && "invalid"
          } form-select-input`}
          id="quantity-units"
          {...register("quantityUnits", {
            required: {
              value: true,
              message: "Please select a units option",
            },
          })}
        >
          <option value="">---</option>
          <option value="box">Box</option>
          <option value="caplet">Caplet</option>
          <option value="capsule">Capsule</option>
          <option value="dropper">Dropper</option>
          <option value="g">g</option>
          <option value="mg">mg</option>
          <option value="mL">mL</option>
          <option value="packet">Packet</option>
          <option value="suppository">Suppository</option>
          <option value="tablet">Tablet</option>
          <option value="tube">Tube</option>
        </select>
        <small className="error-message">
          {errors?.quantityUnits && errors.quantityUnits.message}
        </small>
      </div>

      <div className="input-field row-start-4" controlId="medForm">
        <label>Medication Form*:</label>
        {/* @todo: alphabetize options */}
        <select
          className={`text-field ${
            errors.medForms && "invalid"
          } form-select-input`}
          id="med-form"
          {...register("medForm", {
            required: {
              value: true,
              message: "Please select the form of the medication",
            },
          })}
        >
          <option value="">---</option>
          <option value="caplet">Caplet</option>
          <option value="capsule">Capsule</option>
          <option value="cream">Cream</option>
          <option value="dropper">Dropper</option>
          <option value="liquid">Liquid</option>
          <option value="ointment">Ointment</option>
          <option value="suppository">Suppository</option>
          <option value="tablet">Tablet</option>
        </select>
        <small className="error-message">
          {errors?.medForms && errors.medForms.message}
        </small>
      </div>
      <div
        className="input-field row-start-4 col-start-2"
        controlId="currentlyTaking"
      >
        <label>Taking Currently?*:</label>
        <select
          id="currently-taking"
          {...register("currentlyTaking", {
            required: {
              value: true,
              message:
                "Please indicate if you are currently taking the medication",
            },
          })}
          className="form-select-input"
        >
          <option value="">---</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
  );
};

export default MedicationInput;
