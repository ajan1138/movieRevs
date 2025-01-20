"use client";

import Email from "./_form-components/Email";
import FormButton from "./_form-components/FormButton";
import Label from "./_form-components/Label";
import Password from "./_form-components/Password";

function LoginForm() {
  return (
    <form className="text-black flex flex-col w-[720px] bg-white rounded-3xl">
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
