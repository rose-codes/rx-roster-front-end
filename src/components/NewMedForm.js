import { useForm } from "react-hook-form";
import { useRxContext } from "../hooks/useRxContext";
import MedicationInput from "./form-sections/MedicationInput";
import { ProviderInput } from "./form-sections/ProviderInput";
import { PharmacyInput } from "./form-sections/PharmacyInput";

const defaultValues = {
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
};

const NewMedForm = () => {
  const { addMed } = useRxContext;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (formValues) => {
    console.log("submission obj", formValues);
    addMed(formValues);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-10">
        <MedicationInput
          errors={errors}
          register={register}
          className="row-start-1"
        />

        <ProviderInput
          errors={errors}
          register={register}
          className="row-start-2"
        />
        {/* @todo - create dropdown of user's commonly used pharmacies + allow them to add another */}

        <PharmacyInput
          errors={errors}
          register={register}
          className="row-start-3"
        />
        <button
          type="submit"
          disabled={!isValid}
          className="submit-button row-start-4"
        >
          Submit Medication
        </button>
      </form>
    </div>
  );
};

export default NewMedForm;
