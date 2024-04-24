import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <SignIn path="/sign-in" />
    </div>
  );
}
