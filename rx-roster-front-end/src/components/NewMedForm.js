import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import RxContext from "../context/RxContext";

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

  // @todo: separate each field + Form.Label into separate divs
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="name hstack gap-3">
          <Form.Group className="mb-3" controlId="genericName">
            <Form.Label>Generic Name*:</Form.Label>
            <Form.Control
              className={`text-field ${errors.genericName && "invalid"}`}
              type="text"
              {...register(
                "genericName",
                {
                  required: {
                    value: true,
                    message: "Generic Name is Required",
                  },
                  minLength: { value: 3, message: "test" },
                },
                {
                  minLength: {
                    value: 3,
                    message:
                      "Medication names must be longer than 3 characters",
                  },
                }
              )}
              placeholder="Generic Name"
            ></Form.Control>
            <small className="error-message">
              {errors?.genericName && errors.genericName.message}
            </small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="brandName">
            <Form.Label>Brand Name*:</Form.Label>
            <Form.Control
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
                    message:
                      "Medication names must be longer than 3 characters",
                  },
                }
              )}
              placeholder="Brand Name"
            ></Form.Control>
            <small className="error-message">
              {errors?.brandName && errors.brandName.message}
            </small>
          </Form.Group>
        </Form.Group>

        <Form.Group className="strength hstack gap-3">
          <Form.Group className="mb-3" controlId="strength">
            <Form.Label>Strength*:</Form.Label>
            <Form.Control
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
            ></Form.Control>
            <small className="error-message">
              {errors?.strength && errors.strength.message}
            </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="strengthUnits">
            <Form.Label>Strength Units*:</Form.Label>
            <Form.Select
              id="strength-units"
              className={`text-field ${errors.strengthUnits && "invalid"}`}
              {...register("strengthUnits", {
                required: {
                  value: true,
                  message: "Please Form.Select valid units",
                },
              })}
            >
              <option value="">---</option>
              <option value="%">%</option>
              <option value="mg">mg</option>
              <option value="mL">mL</option>
            </Form.Select>
            <small className="error-message">
              {errors?.strengthUnits && errors.strengthUnits.message}
            </small>
          </Form.Group>
        </Form.Group>
        <Form.Group className="quantity hstack gap-3">
          <Form.Group className="mb-3 " controlId="quantity">
            <Form.Label>Quantity*:</Form.Label>
            <Form.Control
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
            ></Form.Control>
            <small className="error-message">
              {errors?.quantity && errors.quantity.message}
            </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantityUnits">
            <Form.Label> Quantity Units*:</Form.Label>
            <Form.Select
              className={`text-field ${errors.quantityUnits && "invalid"}`}
              id="quantity-units"
              {...register("quantityUnits", {
                required: {
                  value: true,
                  message: "Please Form.Select a units option",
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
            </Form.Select>
            <small className="error-message">
              {errors?.quantityUnits && errors.quantityUnits.message}
            </small>
          </Form.Group>
        </Form.Group>
        <Form.Group className="hstack gap-3">
          <Form.Group className="mb-3" controlId="medForm">
            <Form.Label>Medication Form*:</Form.Label>
            {/* @todo: alphabetize options */}
            <Form.Select
              className={`text-field ${errors.medForms && "invalid"}`}
              id="med-form"
              {...register("medForm", {
                required: {
                  value: true,
                  message: "Please Form.Select the form of the medication",
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
            </Form.Select>
            <small className="error-message">
              {errors?.medForms && errors.medForms.message}
            </small>
          </Form.Group>
          <Form.Group className="mb-3" controlId="currentlyTaking">
            <Form.Label>Taking Currently?*:</Form.Label>
            <Form.Select
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
            </Form.Select>
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3" controlId="prescribedFor">
          <Form.Label>Prescribed For:</Form.Label>
          <Form.Control
            type="text"
            {...register("prescribedFor")}
            placeholder="What was the medication prescribed/taken for?"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="instructions">
          <Form.Label>Instructions:</Form.Label>
          <Form.Control
            type="text"
            {...register("instructions")}
            placeholder="Instructions"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="prescriber">
          <Form.Label>Prescriber:</Form.Label>
          <Form.Control
            type="text"
            {...register("prescriber")}
            placeholder="Prescriber"
          ></Form.Control>
        </Form.Group>
        {/* @todo - create dropdown of user's commonly used pharmacies + allow them to add another */}
        <Form.Group className="mb-3" controlId="pharmacy">
          <Form.Label>Pharmacy:</Form.Label>
          <Form.Control
            type="text"
            {...register("pharmacyFilled")}
            placeholder="Pharmacy"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="manufacturer">
          <Form.Label>Manufacturer:</Form.Label>
          <Form.Control
            type="text"
            {...register("manufacturer")}
            placeholder="Manufacturer"
          ></Form.Control>
        </Form.Group>
        {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
        <Form.Group className="mb-3" controlId="appearance">
          <Form.Label>Appearance:</Form.Label>
          <Form.Control
            type="text"
            {...register("appearance")}
            placeholder="Appearance"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="datePrescribed">
          <Form.Label>Date Medication Was Prescribed:</Form.Label>
          <Form.Control
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
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="startDate">
          <Form.Label>Date Medication Was Started:</Form.Label>
          <Form.Control
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
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sideEffects">
          <Form.Label>Side Effects:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Side Effects"
            {...register("sideEffects")}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" disabled={!isValid}>
          Submit Medication
        </Button>
      </form>
    </div>
  );
};

export default NewMedForm;
