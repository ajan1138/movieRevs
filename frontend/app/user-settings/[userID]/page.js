import LoginRequired from "@/frontend/app/_components/LoginRequired";
import RegisterForm from "@/frontend/app/_components/RegisterForm";
import { cookies } from "next/headers";

async function page({ params }) {
  const { userID } = await params;
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  if (!token) return <LoginRequired />;

  const url = `http://localhost:8080/user-settings/${userID}`;

  const dataRaw = await fetch(url, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  const data = await dataRaw.json();

  return (
    <div className="flex justify-center items-center min-h-screen">
      {token ? (
        <RegisterForm
          title={"Your data:"}
          buttonText={"Update!"}
          user={data}
          token={token}
        />
      ) : (
        <LoginRequired />
      )}
    </div>
  );
}

export default page;
