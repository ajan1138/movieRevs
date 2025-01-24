import RegisterForm from "@/app/_components/RegisterForm";
import { cookies } from "next/headers";

async function page({ params }) {
  const { userID } = await params;
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  console.log(token);

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
      <RegisterForm title={"Your data:"} buttonText={"Update!"} user={data} />
    </div>
  );
}

export default page;
