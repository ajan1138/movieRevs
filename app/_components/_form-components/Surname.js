import { useCon } from "@/app/_contexts/emailAndPasswordContext";

function Surname({ defSurname }) {
  const { surname, setSurname } = useCon();

  function handleSurname(e) {
    const surnameValue = e.target.value;

    setSurname(surnameValue);
  }

  return (
    <div className="space-x-[20px] mb-2 flex-row">
      <label className="font-bold text-2xl">Surname:</label>
      <input
        type="text"
        className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
        placeholder="Optional"
        defaultValue={defSurname ?? ""}
        onChange={handleSurname}
      />
    </div>
  );
}

export default Surname;
