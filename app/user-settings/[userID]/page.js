"use client";

import SubmitButton from "@/app/_components/SubmitButton";
import { useCon } from "@/app/_contexts/emailAndPasswordContext";

function page() {
  const {
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
  } = useCon();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d).{8,}$/;

  function handleEmail(e) {
    const emailValue = e.target.value;

    setEmail(emailValue);

    setIsEmailValid(email === "" ? true : emailRegex.test(emailValue));
  }

  function handlePassword(e) {
    const passwordValue = e.target.value;

    setPassword(passwordValue);

    console.log(passwordValue);
    setIsPasswordValid(passwordRegex.test(passwordValue));
  }

  function handleSubmit() {
    setEmail("");
    setPassword("");
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);

    console.log(e.target.value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="text-black flex flex-col w-[720px] bg-white rounded-3xl">
        <div className="flex items-center justify-center border-b border-gray-600 p-4 pb-6 ">
          <label className="text-7xl font-bold">User data</label>
        </div>

        <div className="flex justify-center items-center flex-col mb-6 border-b border-gray-600 p-10">
          <div className="space-x-[56px] mb-2 flex-row">
            <label className="font-bold text-2xl">Name:</label>
            <input
              type="text"
              className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
            />
          </div>

          <div className="space-x-[10px] mb-2 flex-row">
            <label className="font-bold text-2xl mr-[6px]">Surname: </label>
            <input
              type="text"
              className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
            />
          </div>

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
                Password must contain nums and 8 chars atleast!
              </p>
            )}
          </div>

          <div className="space-x-2 py-2">
            <label className="font-bold text-2xl -ml-[96px]">
              Confirm Password:{" "}
            </label>
            <input
              type="password"
              placeholder="Confirm password.."
              className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
              onChange={handleConfirmPassword}
              value={confirmPassword}
            />
          </div>

          <div className=" mb-2 flex-row">
            <label className="font-bold text-2xl">Created at: </label>
            <input
              type="text"
              className="rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
              disabled
              value="10.07.2003"
            />
          </div>
        </div>

        <div className="w-fit self-center">
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default page;
