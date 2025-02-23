"use client";

import { useRouter } from "next/navigation";
import { useCon } from "../_contexts/emailAndPasswordContext";
import Email from "./_form-components/Email";
import FormButton from "./_form-components/FormButton";
import Label from "./_form-components/Label";
import Password from "./_form-components/Password";
import { useState } from "react";
import FormError from "./_form-components/FormError";
import { handleLogin } from "../services/usersApi";

function LoginForm() {
  const [error, setError] = useState();
  const { email, password, setEmail, setPassword } = useCon();
  const router = useRouter();

  return (
    <form
      className="text-black flex flex-col w-[720px] bg-white rounded-3xl"
      onSubmit={(e) =>
        handleLogin(e, setError, email, password, setEmail, setPassword, router)
      }
    >
      <div className="flex items-center justify-center border-b border-gray-600 p-4 pb-6 ">
        <Label>Login</Label>
      </div>

      <div className="flex justify-center items-center flex-col mb-6 border-b border-gray-600 p-10">
        <Email />

        <Password />
      </div>

      <div className="w-fit self-center">
        <FormButton>LOGIN</FormButton>
      </div>
      {error ? <FormError>{error}</FormError> : ""}
    </form>
  );
}

export default LoginForm;
