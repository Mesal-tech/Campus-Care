import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EmergencyBanner from "../components/EmergencyBanner";

const MainLayout: React.FC = () => {
  const { user } = useUser();

  useEffect(() => {
    const createUserDoc = async () => {
      if (!user) return;

      const userRef = doc(db, "users", user.id);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.fullName || "anonymous",
          email: user.primaryEmailAddress?.emailAddress || "",
          profileImage: user.imageUrl || "",
          role: "user",
        });
        console.log("User document created in Firestore");
      }
    };

    createUserDoc();
  }, [user]);

  return (
    <>
      <SignedIn>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
        </div>
      </SignedIn>

      <SignedOut>
        <Navigate to="/auth/sign-in" />
      </SignedOut>
    </>
  );
};

export default MainLayout;
