import { UserProfile } from "@clerk/nextjs";

function UserProfilePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <UserProfile path="/user-profile" />
    </main>
  );
}

export default UserProfilePage;
