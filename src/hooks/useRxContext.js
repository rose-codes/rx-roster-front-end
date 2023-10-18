"use client";
import { RxContext } from "../context/RxContext";
import { useContext } from "react";

export const useRxContext = () => {
  const context = useContext(RxContext);

  if (!context) {
    throw Error("useRxContext must be used inside a RxContext Provider");
  }

  return context;
};
