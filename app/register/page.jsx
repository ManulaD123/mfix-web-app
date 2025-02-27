import { auth } from "@/lib/auth";
import RegisterForm from "./register-form";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="container mx-auto">
      <RegisterForm />
    </div>
  );
}
