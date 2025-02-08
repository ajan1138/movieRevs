import Link from "next/link";

function LoginRequired() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-11 font-bold">
      <h1 className="text-6xl italic p-11">
        You have to be logged in for this feature!
      </h1>
      <div className="flex flex-col items-center py-11">
        <h1 className="text-xl py-8">Click the "key" bellow to login!</h1>
        <Link href="/login" className="text-6xl bg-black border rounded-3xl">
          🔑
        </Link>
      </div>
    </div>
  );
}

export default LoginRequired;
