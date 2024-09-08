import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center 4px">
        <div className="text-center space-y-4 pt-14">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back</h1>
          <p>Log in or Create account to get back your dashboard</p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
