"use client";

import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@repo/ui/components/ui/button';
import { redirect } from 'next/navigation';

export default function Page() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-7xl h-screen flex flex-col items-center justify-center w-full gap-6">
        <h1>Dashboard</h1>
        <Button>
          <SignOutButton />
        </Button>
      </div>
    </div>
  );
}
