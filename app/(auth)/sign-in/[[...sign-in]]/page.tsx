import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center pt-12 min-h-screen">
      <SignIn path="/sign-in" />
    </div>
  );
}
