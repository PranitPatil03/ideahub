import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="max-w-7xl h-screen flex items-center justify-center w-full">
          <SignUp />
        </div>
      </div>
    </>
  );
}
