import LogingForm from "./login-form";
export default function loginPage() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen text-black">
      <LogingForm title="Sign in to MFLIX" />
    </div>
  );
}
