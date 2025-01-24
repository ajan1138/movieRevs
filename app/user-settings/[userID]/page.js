import RegisterForm from "@/app/_components/RegisterForm";

async function page({ params }) {
  const { userID } = await params;

  const url = `http://localhost:8080/user-settings/${userID}`;

  const dataRaw = await fetch(url, {
    credentials: "include",
  });

  const data = await dataRaw.json();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <RegisterForm title={"Your data:"} buttonText={"Update!"} user={data} />
    </div>
  );
}

export default page;
