"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const backendURI = process.env.NEXT_PUBLIC_BACKEND_URL;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    console.log("prod backendURI:", backendURI);
    const response = await fetch(`${backendURI}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log("json not", response);
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save user to local storage
      console.log("json", response);
      localStorage.setItem("user", JSON.stringify(json));
      //update Auth Context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
