import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center !bg-slate-900">
      <SignUp />
    </div>
  );
}