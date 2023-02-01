import { useState } from "react";
const NewMedForm = ({ handleAdd }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medName.trim().length > 10) {
      const newMed = {
        medName,
      };
      handleAdd(newMed);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Medication Name"
        value={medName}
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Strength"
      ></input>
      <label htmlFor="strength-units">Units:</label>
      <select id="strength-units" name="strength-units">
        <option value="mg">mg</option>
        <option value="mL">mL</option>
      </select>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Quantity"
      ></input>
      <label htmlFor="quanity-units">Units:</label>
      <select id="quantity-units" name="quantity-units">
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
      <select id="med-forms" name="med-forms">
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
        placeholder="What was the medication prescribed/taken for?"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Instructions"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Prescriber"
      ></input>
      {/* @todo - create dropdown of user's commonly used pharmacies + allow them to add another */}
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Pharmacy"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Manufacturer"
      ></input>
      {/* @todo - if user provides manufacturer and other required fields, may be able to pre-populate with info from API */}
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Appearance"
      ></input>
      <label htmlFor="currently-taking">Taking Currently?:</label>
      <select id="currently-taking" name="currently-taking">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {/* @todo - reformat to date and not just a string */}
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Date Medication Started"
      ></input>
      <input
        onChange={handleTextChange}
        type="text"
        placeholder="Side Effects"
      ></input>
      <button type="submit">Submit Medication</button>
      <div>{message && <div className="message">{message}</div>}</div>
    </form>
  );
};

export default NewMedForm;
