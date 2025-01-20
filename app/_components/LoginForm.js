"use client";

import { useRouter } from "next/navigation";
import { useCon } from "../_contexts/emailAndPasswordContext";
import Email from "./_form-components/Email";
import FormButton from "./_form-components/FormButton";
import Label from "./_form-components/Label";
import Password from "./_form-components/Password";

function LoginForm() {
  const { email, password } = useCon();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        router.push("/");
      } else {
        console.error("Login failed", data.message);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <form
      className="text-black flex flex-col w-[720px] bg-white rounded-3xl"
      onSubmit={handleLogin}
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
    </form>
  );
}

export default LoginForm;
