function FormInput() {
  return (
    <input
      type="text"
      className="border border-gray-600 rounded-l w-[250px] px-3 py-1 focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50"
      placeholder="Enter name.."
      value={firstName}
      onChange={handleName}
    />
  );
}

export default FormInput;
