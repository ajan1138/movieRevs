import { useCon } from "@/frontend/app/_contexts/emailAndPasswordContext";

function Name({ defName }) {
  const { name, setName } = useCon();

  function handleName(e) {
    const nameValue = e.target.value;

    setName(nameValue);
  }
  return (
    <div className="space-x-[56px] mb-2 flex-row">
      <label className="font-bold text-2xl">Name:</label>
      <input
        type="text"
        className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
        placeholder="Enter name.."
        onChange={handleName}
        defaultValue={defName ? defName : name}
      />
    </div>
  );
}

export default Name;
