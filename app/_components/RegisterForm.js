"use client";

import { useRouter } from "next/navigation";
import { useCon } from "../_contexts/emailAndPasswordContext";
import { handleRegisterUser, handleUpdateUser } from "../services/usersApi";

import ConfirmPassword from "./_form-components/ConfirmPassword";
import Email from "./_form-components/Email";
import FormButton from "./_form-components/FormButton";
import Label from "./_form-components/Label";
import Name from "./_form-components/Name";
import Password from "./_form-components/Password";
import Surname from "./_form-components/Surname";

function RegisterForm({ title, buttonText, user, token }) {
  const router = useRouter();

  const {
    isEmailValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
  } = useCon();

  let { name, surname, email, setName, setSurname, setEmail } = useCon();

  return (
    <form
      className="text-black flex flex-col w-[720px] bg-white rounded-3xl"
      onSubmit={
        !user
          ? (e) =>
              handleRegisterUser(
                e,
                isEmailValid,
                isPasswordValid,
                password,
                confirmPassword,
                name,
                surname,
                setPassword,
                email,
                setName,
                setSurname,
                setEmail,
                router
              )
          : (e) => handleUpdateUser(e, user, router, token)
      }
    >
      <div className="flex items-center justify-center border-b border-gray-600 p-4 pb-6 ">
        <Label>{title}</Label>
      </div>

      <div className="flex justify-center items-center flex-col mb-6 border-b border-gray-600 p-10">
        <Name defName={user?.name ?? ""} />

        <Surname defSurname={user?.surname ?? ""} />

        <Email defEmail={user?.email ?? ""} />

        {!user ? <Password defPassword={user?.password} /> : ""}

        {!user ? <ConfirmPassword /> : ""}
      </div>

      <div className="w-fit self-center">
        <FormButton>{buttonText}</FormButton>
      </div>
    </form>
  );
}

export default RegisterForm;
