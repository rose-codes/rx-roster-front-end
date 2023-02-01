import { createContext, useState } from "react";

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
