"use client";

import { useRouter } from "next/navigation";
import { useCon } from "../_contexts/emailAndPasswordContext";
import ConfirmPassword from "./_form-components/ConfirmPassword";
import Email from "./_form-components/Email";
import FormButton from "./_form-components/FormButton";
import Label from "./_form-components/Label";
import Name from "./_form-components/Name";
import Password from "./_form-components/Password";
import Surname from "./_form-components/Surname";

function RegisterForm({ title, buttonText, user }) {
  const router = useRouter();

  const { name: firstName, surname: lastName, email: userEmail } = user;

  const {
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    isEmailValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
  } = useCon();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      isEmailValid &&
      isPasswordValid &&
      password === confirmPassword &&
      name
    ) {
      const userData = {
        email,
        password,
        name,
        ...(surname ? { surname } : ""),
      };

      fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User registered:", data);
          router.push("/login");
          setName("");
          setSurname("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <form
      className="text-black flex flex-col w-[720px] bg-white rounded-3xl"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-center border-b border-gray-600 p-4 pb-6 ">
        <Label>{title}</Label>
      </div>

      <div className="flex justify-center items-center flex-col mb-6 border-b border-gray-600 p-10">
        <Name firstName={firstName} />

        <Surname lastName={lastName} />

        <Email userEmail={userEmail} />

        <Password />

        <ConfirmPassword />
      </div>

      <div className="w-fit self-center">
        <FormButton>{buttonText}</FormButton>
      </div>
    </form>
  );
}

export default RegisterForm;
