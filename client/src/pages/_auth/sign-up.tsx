import { SignUp } from '@clerk/clerk-react';

export default function SiginUpPage() {
  return (
    <main className="flex h-[100dvh] w-full items-center justify-center">
      <SignUp fallbackRedirectUrl="/dashboard" />
    </main>
  );
}
