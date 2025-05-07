import { Outlet, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const AuthLayout = () => {
  return (
    <>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
      <SignedOut>
        <section className="flex flex-1 justify-center items-center flex-col">
          <Outlet />
        </section>
      </SignedOut>
    </>
  );
}

export default AuthLayout;