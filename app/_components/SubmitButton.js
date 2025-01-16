function SubmitButton({ handleSubmit }) {
  return (
    <button
      className="bg-blue-900 text-white text-2xl font-bold py-2 px-6 rounded  mb-6"
      onClick={handleSubmit}
    >
      Update!
    </button>
  );
}

export default SubmitButton;
