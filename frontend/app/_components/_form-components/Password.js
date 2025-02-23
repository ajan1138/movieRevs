import { useCon } from "@/frontend/app/_contexts/emailAndPasswordContext";

function Password() {
  const { password, setPassword, isPasswordValid, setIsPasswordValid } =
    useCon();

  const passwordRegex = /^(?=.*\d).{8,}$/;

  function handlePassword(e) {
    const passwordValue = e.target.value;

    setPassword(passwordValue);

    setIsPasswordValid(passwordRegex.test(passwordValue));
  }

  return (
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
  );
}

export default Password;
