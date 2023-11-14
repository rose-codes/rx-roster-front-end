import { createContext, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const RxContext = createContext();

export const medicationsReducer = (state, action) => {
  switch (action.type) {
    case "SET_MEDICATIONS":
      return {
        medications: action.payload,
      };
    case "CREATE_MEDICATION":
      return {
        medications: [...state.medications, action.payload],
      };
    case "UPDATE_MEDICATION":
      const updateMedsList = (medsList, res) => {
        return medsList.map((med) => {
          return med.medId === res.medId ? { ...med, ...res } : med;
        });
      };
      return {
        medications: updateMedsList(state.medications, action.payload),
      };
    default:
      return state;
  }
};

export const RxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(medicationsReducer, {
    medications: null,
  });

  const { user } = useAuthContext();
  const backendURI = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("prod backendURI:", backendURI);

  // @todo: refactor routes with Axios
  const getMedications = async () => {
    const response = await fetch(`${backendURI}/api/medications`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "SET_MEDICATIONS", payload: data });
    }
  };

  const getCurrentMedications = async () => {
    const response = await fetch(
      `${backendURI}/api/medications?` +
        new URLSearchParams({ currentlyTaking: true }),
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "SET_MEDICATIONS", payload: data });
    }
  };

  const addMed = async (newMed) => {
    const response = await fetch(`${backendURI}/api/medications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newMed),
    });
    if (response.status !== 201) {
      const err = await response.json();
      return console.log(err);
    }
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "CREATE_MEDICATION", payload: data });
    }
  };

  const deleteMed = async (id) => {
    await fetch(`${backendURI}/api/medications/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });
  };

  const updateMed = async (id, updKey) => {
    console.log("Inside updateMed, updKey:", JSON.stringify(updKey));
    const response = await fetch(`${backendURI}/api/medications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updKey),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      dispatch({ type: "UPDATE_MEDICATION", payload: data });
    }
  };

  return (
    <RxContext.Provider
      value={{
        getMedications,
        addMed,
        getCurrentMedications,
        updateMed,
        ...state,
        dispatch,
      }}
    >
      {children}
    </RxContext.Provider>
  );
};

export default RxContext;
