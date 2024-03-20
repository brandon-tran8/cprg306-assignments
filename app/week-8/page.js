"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import React from "react";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in, Please try again: ", error);
    }
  }

  // Sign out of Firebase
  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  // Display some of the user's information
  return (
    <>
      <div>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            <p>You are not logged in.</p>
            <button onClick={handleSignIn}>Sign In with GitHub</button>
          </div>
        )}
        <p>
          <Link href="/week-8/shopping-list">Go to Shopping List</Link>
        </p>
      </div>
    </>
  );
}
