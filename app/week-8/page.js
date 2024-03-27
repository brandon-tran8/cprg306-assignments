"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import React from "react";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <div>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={() => firebaseSignOut()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <p>You are not logged in.</p>
            <button onClick={() => gitHubSignIn()}>Sign In with GitHub</button>
          </div>
        )}
        <p>
          <Link href="/week-8/shopping-list">Go to Shopping List</Link>
        </p>
      </div>
    </main>
  );
}
