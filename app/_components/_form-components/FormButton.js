function FormButton({ children }) {
  return (
    <button
      className="bg-blue-900 text-white text-2xl font-bold py-2 px-6 rounded  mb-6"
      type="submit"
    >
      {children}
    </button>
  );
}

export default FormButton;
