import { useState, useContext } from "react";
import { useForm, useController } from "react-hook-form";
import * as yup from "yup";
import RxContext from "../context/RxContext";
const NewMedForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      medName: "",
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
      appearance: "",
      currentlyTaking: "",
      startDate: "",
      sideEffects: "",
    },
  });
  const { addMed } = useContext(RxContext);
  const [medName, setMedName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    if (medName === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (medName !== "" && medName.trim().length <= 3) {
      setMessage("Medication name must contain at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setMedName(e.target.value);
  };

  const onSubmit = (formValues) => {
    // if (medName.trim().length > 10) {
    //   const newMed = {
    //     medName,
    //   };
    //   addMed(newMed);
    // }
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("medName")}
        // {...register("medName", {
        //   required: { value: true, message: "Medication Name is Required" },
        // },
        // {minLength: {
        //   value: 3,
        //   message: "Medication names must be longer than 3 characters"
        // }})}
        onChange={handleTextChange}
        placeholder="Medication Name"
      ></input>
      <input
        type="number"
        {...register("strength")}
        // {...register(
        //   "strength",
        //   { required: { value: true, message: "Please enter a number." } },
        //   {
        //     valueAsNumber: {
        //       value: true,
        //       message: "Please enter a valid number.",
        //     },
        //   },
        //   {
        //     min: {
        //       value: 0,
        //       message: "Medication strengths must be greater than 0."
        //     }
        //   }
        // )}
        onChange={handleTextChange}
        placeholder="Strength"
      ></input>
      <label htmlFor="strength-units">Units:</label>
      <select
        id="strength-units"
        {...register("strengthUnits")}
        // {...register("strengthUnits", {
        //   required: {
        //     value: true,
        //     message: "Please select units",
        //   },
        // })}
      >
        <option value="">---</option>
        <option value="mg">mg</option>
        <option value="mL">mL</option>
      </select>
      <input
        onChange={handleTextChange}
        type="number"
        {...register("quantity")}
        // {...register(
        //   "quantity",
        //   { required: { value: true, message: "Please enter a number" } },
        //   {
        //     valueAsNumber: {
        //       value: true,
        //       message: "Please enter a valid number",
        //     },
        //   },
        //   {
        //     min: {
        //       value: 0,
        //       message: "Medication strengths must be greater than 0."
        //     }
        //   }
        // )}
        placeholder="Quantity"
      ></input>
      <label htmlFor="quanity-units">Units:</label>
      <select
        id="quantity-units"
        {...register("quantityUnits")}
        // {...register("quantityUnits", {
        //   required: {
        //     value: true,
        //     message: "Please select a units option",
        //   },
        // })}
      >
        <option value="base">---</option>
        <option value="tablet">Tablet</option>
        <option value="capsule">Capsule</option>
        <option value="caplet">Caplet</option>
        <option value="mL">mL</option>
        <option value="dropper">Dropper</option>
        <option value="suppository">Suppository</option>
        <option value="box">Box</option>
        <option value="packet">Packet</option>
      </select>
      <label htmlFor="med-forms">Medication Form:</label>
      <select
        id="med-forms"
        {...register("medForms")}
        // {...register("medForms", {
        //   required: {
        //     value: true,
        //     message: "Please select the form of the medication",
        //   },
        // })}
      >
        <option value="tablet">Tablet</option>
        <option value="capsule">Capsule</option>
        <option value="caplet">Caplet</option>
        <option value="liquid">Liquid</option>
        <option value="dropper">Dropper</option>
        <option value="suppository">Suppository</option>
      </select>
      <input
        onChange={handleTextChange}
        type="text"
        {...register("prescribedFor")}
        placeholder="What was the medication prescribed/taken for?"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        {...register("instructions")}
        placeholder="Instructions"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        {...register("prescriber")}
        placeholder="Prescriber"
      ></input>
      {/* @todo - create dropdown of user's commonly used pharmacies + allow them to add another */}
      <input
        onChange={handleTextChange}
        type="text"
        {...register("pharmacy")}
        placeholder="Pharmacy"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        {...register("manufacturer")}
        placeholder="Manufacturer"
      ></input>
      {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
      <input
        onChange={handleTextChange}
        type="text"
        {...register("appearance")}
        placeholder="Appearance"
      ></input>
      <label htmlFor="currently-taking">Taking Currently?:</label>
      <select
        id="currently-taking"
        {...register("currentlyTaking")}
        // {...register("currentlyTaking", {
        //   required: {
        //     value: true,
        //     message:
        //       "Please indicate if you are currently taking the medication",
        //   },
        // })}
      >
        <option value="">---</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {/* @todo - reformat to date and not just a string */}
      <input
        onChange={handleTextChange}
        type="text"
        {...register("startDate")}
        // {...register(
        //   "startDate",
        //   {
        //     required: {
        //       value: true,
        //       message: "Please indicated when the medication was started.",
        //     },
        //   },
        //   {
        //     valueAsDate: {
        //       value: true,
        //       message: "Please provide a valid date",
        //     },
        //   }
        // )}
        placeholder="Date Medication Started"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Side Effects"
        {...register("sideEffects")}
      ></input>
      <button type="submit">Submit Medication</button>
      <div>{message && <div className="message">{message}</div>}</div>
    </form>
  );
};

export default NewMedForm;
