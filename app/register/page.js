import RegisterForm from "../_components/RegisterForm";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <RegisterForm title={"Register"} buttonText={"Register now!"} />
    </div>
  );
}

export default Page;
