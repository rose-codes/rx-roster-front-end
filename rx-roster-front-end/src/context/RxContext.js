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

  useEffect(() => {
    getMedications();
  }, []);

  const getMedications = async () => {
    const response = await fetch("/medications");
    const data = await response.json();
    setMedications(data);
  };

  // const getMedicationById = async (id) => {
  //   const response = await fetch(`/medications/${id}`);
  //   const data = await response.json();
  //   setMedications(data)
  // }
  const addMed = async (newMed) => {
    const response = await fetch("/medications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMed),
    });
    const data = await response.json();
    setMedications([data, ...medications]);
  };

  const deleteMed = async (id) => {
    await fetch(`/medications/${id}`, { method: "DELETE" });
  };

  const updateMed = async (id, updItem) => {
    const response = await fetch(`/medications/${id}`, {
      method: "UPDATE",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setMedications(
      medications.map((med) => {
        return med._id === id ? { ...med, ...data } : med;
      })
    );
  };

  return (
    <RxContext.Provider
      value={{
        medications,
      }}
    >
      {children}
    </RxContext.Provider>
  );
};

export default RxContext;
