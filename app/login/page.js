import Link from "next/link";
import LoginForm from "../_components/LoginForm";

import { FaRegHandPointRight } from "react-icons/fa6";

function Page() {
  return (
    <div className="flex items-center justify-center p-3 min-h-screen flex-col">
      <LoginForm />

      <div className="text-white flex flex-row mt-6">
        <p>If you don't have an account yet click </p>
        <span className="ml-1">{<FaRegHandPointRight />}</span>
        <span className="px-1">
          <Link href="register" className="underline font-bold">
            {" "}
            HERE!!
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Page;
