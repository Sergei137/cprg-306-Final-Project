'use client';
import React, { useState, useEffect, useContext, createContext } from 'react';
import Link from 'next/link';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const authContext = createContext();

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
    return () => { listen(); }
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
    <AuthContext.Provider value={authUser}>
      <div className='auth-details-container'>
        <div>
          { authUser ? (
            <div className='flex flex-col justify-center'>
              <p className='text-center mt-3'>Signed in as {authUser.email}</p>
              <p className="text-blue-500 underline text-center mt-3 mb-3"><Link href="/dashboard">Go to Dashboard Page</Link></p>
              <button  onClick={userSignOut} className=' sign-out-button m-auto w-28  hover:bg-blue-700 text-gray-700 hover:text-white'>Sign Out</button>
            </div>
          ) : (
            <>
              <p className="text-blue-500 underline text-center"><Link href="/signUp">Go to Sign Up Page </Link></p>
              <p className="text-red-600 text-center">Signed out</p>
            </>
          )}
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthDetails;

export const useAuth = () => {
  return useContext(authContext);
}