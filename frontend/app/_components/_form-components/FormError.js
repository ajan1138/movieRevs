function FormError({ children }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl font-bold justify-center items-center text-red-600 underline p-3">
        {children}
      </h1>
    </div>
  );
}

export default FormError;
