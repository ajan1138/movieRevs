"use client";

import { createContext, useContext, useState } from "react";

const EmailAndPasswordContext = createContext();

function EmPassProvider({ children }) {
  const initialState = true;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(initialState);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(initialState);

  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <EmailAndPasswordContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        email,
        setEmail,
        isEmailValid,
        setIsEmailValid,
        password,
        setPassword,
        isPasswordValid,
        setIsPasswordValid,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </EmailAndPasswordContext.Provider>
  );
}

function useCon() {
  const context = useContext(EmailAndPasswordContext);
  if (context === undefined)
    throw new Error("Context was used out of its provider");

  return context;
}

export { EmPassProvider, useCon };
