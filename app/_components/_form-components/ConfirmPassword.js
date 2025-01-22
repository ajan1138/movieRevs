import { useCon } from "@/app/_contexts/emailAndPasswordContext";

function ConfirmPassword() {
  const { password, confirmPassword, setConfirmPassword } = useCon();
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  return (
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
      {password !== confirmPassword && confirmPassword !== "" ? (
        <p className="text-red-600 font-semibold mb-1 items-end  my-3">
          Password is not the same!
        </p>
      ) : null}
    </div>
  );
}

export default ConfirmPassword;
