import { useContext } from "react";
import { useForm } from "react-hook-form";
import RxContext from "../context/RxContext";

let renderCount = 0;

const NewMedForm = () => {
  const { addMed } = useContext(RxContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      brandName: "",
      genericName: "",
      strength: 0,
      strengthUnits: "",
      quantity: 0,
      medForm: "",
      quantityUnits: "",
      instructions: "",
      prescribedFor: "",
      prescriber: "",
      pharmacyFilled: "",
      manufacturer: "",
      startDate: "",
      datePrescribed: "",
      appearance: "",
      currentlyTaking: "",
      sideEffects: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (formValues) => {
    addMed(formValues);
    // reset();
  };
  renderCount++;
  // @todo: separate each field + label into separate divs
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{renderCount}</div>
      <div className="field">
        <label htmlFor="genericName">Generic Name*:</label>
        <input
          className={`text-field ${errors.genericName && "invalid"}`}
          type="text"
          {...register(
            "genericName",
            {
              required: { value: true, message: "Generic Name is Required" },
              minLength: { value: 3, message: "test" },
            },
            {
              minLength: {
                value: 3,
                message: "Medication names must be longer than 3 characters",
              },
            }
          )}
          placeholder="Generic Name"
        ></input>
        <small className="error-message">
          {errors?.genericName && errors.genericName.message}
        </small>
      </div>
      <div className="field">
        <label htmlFor="brandName">Brand Name*:</label>
        <input
          className={`text-field ${errors.brandName && "invalid"}`}
          type="text"
          {...register(
            "brandName",
            {
              required: { value: true, message: "Brand Name is Required" },
              minLength: { value: 3, message: "test" },
            },
            {
              minLength: {
                value: 3,
                message: "Medication names must be longer than 3 characters",
              },
            }
          )}
          placeholder="Brand Name"
        ></input>
        <small className="error-message">
          {errors?.brandName && errors.brandName.message}
        </small>
      </div>
      <div className="field">
        <label htmlFor="strength">Strength*:</label>
        <input
          className={`text-field ${errors.strength && "invalid"}`}
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
      <div className="field"></div>
      <label htmlFor="strength-units">Strength Units*:</label>
      <select
        id="strength-units"
        className={`text-field ${errors.strengthUnits && "invalid"}`}
        {...register("strengthUnits", {
          required: {
            value: true,
            message: "Please select valid units",
          },
        })}
      >
        <option value="">---</option>
        <option value="mg">mg</option>
        <option value="mL">mL</option>
        <option value="%">%</option>
      </select>
      <small className="error-message">
        {errors?.strengthUnits && errors.strengthUnits.message}
      </small>
      <div className="field">
        <label htmlFor="quantity">Quantity*:</label>
        <input
          className={`text-field ${errors.quantity && "invalid"}`}
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
      <div className="field">
        <label htmlFor="quanity-units"> Quantity Units*:</label>
        <select
          className={`text-field ${errors.quantityUnits && "invalid"}`}
          id="quantity-units"
          {...register("quantityUnits", {
            required: {
              value: true,
              message: "Please select a units option",
            },
          })}
        >
          <option value="base">---</option>
          <option value="tablet">Tablet</option>
          <option value="capsule">Capsule</option>
          <option value="caplet">Caplet</option>
          <option value="mg">mg</option>
          <option value="g">g</option>
          <option value="mL">mL</option>
          <option value="dropper">Dropper</option>
          <option value="suppository">Suppository</option>
          <option value="box">Box</option>
          <option value="packet">Packet</option>
          <option value="tube">Tube</option>
        </select>
        <small className="error-message">
          {errors?.quantityUnits && errors.quantityUnits.message}
        </small>
      </div>
      <div className="field">
        <label htmlFor="med-form">Medication Form*:</label>
        {/* @todo: alphabetize options */}
        <select
          className={`text-field ${errors.medForms && "invalid"}`}
          id="med-form"
          {...register("medForm", {
            required: {
              value: true,
              message: "Please select the form of the medication",
            },
          })}
        >
          <option value="">---</option>
          <option value="tablet">Tablet</option>
          <option value="capsule">Capsule</option>
          <option value="caplet">Caplet</option>
          <option value="liquid">Liquid</option>
          <option value="dropper">Dropper</option>
          <option value="suppository">Suppository</option>
          <option value="cream">Cream</option>
          <option value="ointment">Ointment</option>
        </select>
        <small className="error-message">
          {errors?.medForms && errors.medForms.message}
        </small>
      </div>
      <div className="field">
        <label htmlFor="prescribedFor">Prescribed For:</label>
        <input
          type="text"
          {...register("prescribedFor")}
          placeholder="What was the medication prescribed/taken for?"
        ></input>
      </div>
      <div className="field">
        <label htmlFor="instructions">Instructions:</label>
        <input
          type="text"
          {...register("instructions")}
          placeholder="Instructions"
        ></input>
        <div className="field"></div>
        <label htmlFor="prescriber">Prescriber:</label>
        <input
          type="text"
          {...register("prescriber")}
          placeholder="Prescriber"
        ></input>
      </div>
      {/* @todo - create dropdown of user's commonly used pharmacies + allow them to add another */}
      <div className="field">
        <label htmlFor="pharmacyField">Pharmacy:</label>
        <input
          type="text"
          {...register("pharmacyFilled")}
          placeholder="Pharmacy"
        ></input>
        <div className="field"></div>
        <label htmlFor="manufacturer">Manufacturer:</label>
        <input
          type="text"
          {...register("manufacturer")}
          placeholder="Manufacturer"
        ></input>
      </div>
      {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
      <div className="field">
        <label htmlFor="appearance">Appearance:</label>
        <input
          type="text"
          {...register("appearance")}
          placeholder="Appearance"
        ></input>
      </div>
      <div className="field">
        <label htmlFor="currently-taking">Taking Currently?*:</label>
        <select
          id="currently-taking"
          {...register("currentlyTaking", {
            required: {
              value: true,
              message:
                "Please indicate if you are currently taking the medication",
            },
          })}
        >
          <option value="">---</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="datePrescribed">Date Medication Was Prescribed:</label>
        <input
          className={`text-field ${errors.datePrescribed && "invalid"}`}
          type="text"
          {...register("datePrescribed", {
            // required: {
            //   value: true,
            //   message: "Please indicated when the medication was started.",

            // },
            valueAsDate: {
              value: true,
              message: "Please provide a valid date",
            },
          })}
          placeholder="Date Medication Started"
        ></input>
      </div>
      <div className="field">
        <label htmlFor="startDate">Date Medication Was Started:</label>
        <input
          className={`text-field ${errors.startDate && "invalid"}`}
          type="text"
          {...register("startDate", {
            // required: {
            //   value: true,
            //   message: "Please indicated when the medication was started.",

            // },
            valueAsDate: {
              value: true,
              message: "Please provide a valid date",
            },
          })}
          placeholder="Date Medication Started"
        ></input>
      </div>
      <div className="field">
        <label htmlFor="sideEffects">Side Effects:</label>
        <input
          type="text"
          placeholder="Side Effects"
          {...register("sideEffects")}
        ></input>
      </div>

      <button type="submit" disabled={!isValid}>
        Submit Medication
      </button>
    </form>
  );
};

export default NewMedForm;
