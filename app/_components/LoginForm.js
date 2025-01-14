"use client";

import { useCon } from "../_contexts/emailAndPasswordContext";

function LoginForm() {
  const {
    email,
    setEmail,
    isEmailValid,
    setIsEmailValid,
    password,
    setPassword,
    isPasswordValid,
    setIsPasswordValid,
  } = useCon();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;

  function handleEmail(e) {
    const emailValue = e.target.value;

    setEmail(emailValue);

    setIsEmailValid(emailRegex.test(emailValue));
  }

  function handlePassword(e) {
    const passwordValue = e.target.value;

    setPassword(passwordValue);

    setIsPasswordValid(passwordRegex.test(passwordValue));
  }

  return (
    <form className="text-black flex flex-col w-[720px] bg-white rounded-3xl">
      <div className="flex items-center justify-center border-b border-gray-600 p-4 pb-6 ">
        <label className="text-7xl font-bold">Login</label>
      </div>

      <div className="flex justify-center items-center flex-col mb-6 border-b border-gray-600 p-10">
        <div className="space-x-[56px] mb-2 flex-row">
          <label className="font-bold text-2xl">Email: </label>
          <input
            type="text"
            className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
            placeholder="Enter email.."
            value={email}
            onChange={handleEmail}
          />
          {!isEmailValid && (
            <p className="text-red-600 font-semibold mb-1 items-end pl-[72px] my-3">
              Please enter a valid email!
            </p>
          )}
        </div>

        <div className="space-x-2">
          <label className="font-bold text-2xl">Password: </label>
          <input
            type="password"
            className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
            placeholder="Enter password.."
            value={password}
            onChange={handlePassword}
          />
          {!isPasswordValid && (
            <p className="text-red-600 font-semibold mb-1 items-end  my-3">
              Enter a password with 8 characters at least!
            </p>
          )}
        </div>
      </div>

      <div className="w-fit self-center">
        <button className="bg-blue-900 text-white text-2xl font-bold py-2 px-6 rounded  mb-6">
          LOG IN
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
