'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    }
  }, []);

  const userSignOut = () => {

    signOut(auth)

    .then(() => {
      console.log('User signed out');
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='auth-details-container'>
      <div>
        { authUser ? (
          <>
            <p>Signed in as {authUser.email}</p>
            <p><Link href="/dashboard">Go to Dashboard Page (Link)</Link></p>
            <button onClick={userSignOut}>Sign Out (Button)</button>
          </>
        ) : (
          <>
            <p><Link href="/signUp">Go to Sign Up Page (Link)</Link></p>
            <p>Signed out</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthDetails;