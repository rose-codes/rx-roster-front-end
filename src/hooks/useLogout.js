"use client";
import { useAuthContext } from "./useAuthContext";
import { useRxContext } from "./useRxContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: medicationDispatch } = useRxContext();
  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    medicationDispatch({ type: "SET_MEDICATIONS", payload: [] });
  };
  return { logout };
};
