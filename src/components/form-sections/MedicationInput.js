const MedicationInput = ({ errors, register }) => {
  return (
    <section className="grid-row-start-1">
      <div className="grid grid-rows-4 grid-cols-2">
        <div className="row-start-1 col-start-1 w-6/12">
          <div className="input-group">
            <label>Generic Name*:</label>
            <input
              className={`text-field ${
                errors.genericName && "invalid"
              } input-field form-text-input`}
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
        </div>
        <div className="row-start-1 col-start-2 w-6/12">
          <div className="input-group" controlId="brandName">
            <label>Brand Name*:</label>
            <input
              className={`${
                errors.brandName && "invalid"
              } input-field form-text-input`}
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
        </div>
        <div className="row-start-2 col-start-1 w-6/12">
          <div className="input-group">
            <label>Strength*:</label>
            <input
              className={`${
                errors.strength && "invalid"
              } input-field form-text-input`}
              type="text"
              {...register("strength", {
                required: { value: true, message: "Please enter a number." },
                validate: {
                  isANumber: (v) =>
                    isNaN(parseFloat(v)) === false || "Please enter a number.",
                  isGreaterThanZero: (v) =>
                    parseFloat(v) > 0 ||
                    "Please enter a number greater than 0.",
                },
              })}
              placeholder="Strength"
            ></input>
            <small className="error-message">
              {errors?.strength && errors.strength.message}
            </small>
          </div>
        </div>

        <div className="row-start-2 col-start-2">
          <div className="input-group">
            <label>Strength Units*:</label>
            <select
              id="strength-units"
              className={`${
                errors.strengthUnits && "invalid"
              } form-select-input input-field`}
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
        </div>
        <div className="row-start-3 col-start-1 w-6/12">
          <div className="input-group">
            <label>Quantity*:</label>
            <input
              className={`text-field ${
                errors.quantity && "invalid"
              } input-field`}
              type="text"
              {...register("quantity", {
                required: { value: true, message: "Please enter a number" },
                validate: {
                  isANumber: (v) =>
                    isNaN(parseFloat(v)) === false || "Please enter a number.",
                  isGreaterThanZero: (v) =>
                    parseFloat(v) > 0 ||
                    "Please enter a number greater than 0.",
                },
              })}
              placeholder="Quantity"
            ></input>
            <small className="error-message">
              {errors?.quantity && errors.quantity.message}
            </small>
          </div>
        </div>
        <div className="row-start-3 col-start-2">
          <div className="input-group">
            <label> Quantity Units*:</label>
            <select
              className={`text-field ${
                errors.quantityUnits && "invalid"
              } form-select-input input-field`}
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
        </div>
        <div className="row-start-4">
          <div className="input-group">
            <label>Medication Form*:</label>
            <select
              className={`text-field ${
                errors.medForms && "invalid"
              } form-select-input input-field`}
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
        </div>
        <div className="row-start-4 col-start-2">
          <div className="input-group">
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
              className="form-select-input input-field"
            >
              <option value="">---</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicationInput;
