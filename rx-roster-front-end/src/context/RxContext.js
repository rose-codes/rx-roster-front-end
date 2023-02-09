import { createContext, useState, useEffect } from "react";
import axios from "axios";

const RxContext = createContext();

export const RxProvider = ({ children }) => {
  const [medications, setMedications] = useState([
    {
      _id: "63d35e4981b2bae4f688e492",
      brandName: "Tylenol",
      genericName: "Acetaminophen",
      form: "tablet",
      strength: 500,
      strengthUnits: "mg",
      prescribedFor: "pain",
      instructions:
        "take 1-2 tablets by mouth every 4-6 hours, do not exceed 12 tablets per day",
      prescriber: "Dr. Grey, M",
      pharmacyFilled: "CVS",
      manufacturer: "Amneal",
      appearance: "white rectangle with rounded corners",
      currentlyTaking: true,
      datePrescribed: "2023-01-26T00:00:00.000Z",
      __v: 0,
    },
  ]);

  const [currentMeds, setCurrentMeds] = useState([]);
  const backendURI = process.env.BACKEND_URI;
  console.log(backendURI);

  useEffect(() => {
    getMedications();
    getCurrentMedications();
  }, []);

  useEffect(() => {
    getCurrentMedications();
  }, [medications]);

  // @todo: refactor routes with Axios
  const getMedications = async () => {
    console.log(`${process.env.BACKEND_URI}/medications`);
    const response = await fetch(`${process.env.BACKEND_URI}/medications`);
    const data = await response.json();
    setMedications(data);
  };

  const getCurrentMedications = async () => {
    const response = await fetch(
      `${backendURI}/medications?` +
        new URLSearchParams({ currentlyTaking: true })
    );
    const data = await response.json();
    setCurrentMeds(data);
  };

  const addMed = async (newMed) => {
    const response = await fetch(`${backendURI}/medications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMed),
    });
    if (response.status !== 201) {
      const err = await response.json();
      return console.log(err);
    }
    const data = await response.json();
    setMedications([...medications, data]);
    // axios
    //   .post("/medications", newMed)
    //   .then((res) => {
    //     setMedications([...medications, res.data]);
    //   })
    //   .catch((err) => console.log(err));
  };

  const deleteMed = async (id) => {
    await fetch(`${backendURI}/medications/${id}`, { method: "DELETE" });
  };

  const updateMedsList = (medsList, res, id) => {
    return medications.map((med) => {
      return med._id === id ? { ...med, ...res } : med;
    });
  };

  const updateMed = async (id, updKey) => {
    console.log("Inside updateMed, updKey:", JSON.stringify(updKey));
    const response = await fetch(`${backendURI}/medications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updKey),
    });
    const data = await response.json();
    console.log("inside UpdateMed fxn data", data);
    setMedications(updateMedsList(medications, data, id));
    getCurrentMedications();
  };

  return (
    <RxContext.Provider
      value={{
        medications,
        currentMeds,
        addMed,
        getCurrentMedications,
        updateMed,
      }}
    >
      {children}
    </RxContext.Provider>
  );
};

export default RxContext;
