import { cookies } from "next/headers";
import RegisterForm from "../_components/RegisterForm";

async function Page() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  return (
    <div className="flex items-center justify-center min-h-screen">
      {token ? (
        <h1 className="text-6xl text-white italic">
          You already have an account!
        </h1>
      ) : (
        <RegisterForm title={"Register"} buttonText={"Register now!"} />
      )}
    </div>
  );
}

export default Page;
