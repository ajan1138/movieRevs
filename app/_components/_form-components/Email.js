import { useCon } from "@/app/_contexts/emailAndPasswordContext";

function Email({ userEmail }) {
  const { email, setEmail, isEmailValid, setIsEmailValid } = useCon();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleEmail(e) {
    const emailValue = e.target.value;

    setEmail(emailValue);

    setIsEmailValid(email === "" ? true : emailRegex.test(emailValue));
  }

  return (
    <div className="space-x-[56px] mb-2 flex-row">
      <label className="font-bold text-2xl">Email: </label>
      <input
        type="text"
        className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
        placeholder="Enter email.."
        value={userEmail}
        onChange={handleEmail}
      />
      {!isEmailValid && (
        <p className="text-red-600 font-semibold mb-1 items-end pl-[72px] my-3">
          Please enter a valid email!
        </p>
      )}
    </div>
  );
}

export default Email;
