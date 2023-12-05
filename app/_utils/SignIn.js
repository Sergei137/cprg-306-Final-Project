'use client';
import React, { useState } from 'react';

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const signIn = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      setErrorMessage(''); // clear error message on successful sign in
      console.log(userCredential);
    }) 
    .catch((error) => {
      setErrorMessage('Failed to login. Incorrect email or password.'); // set error message on failed sign in
      console.log(error);
    });
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In Form</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <input 
          type='email' 
          placeholder='Enter your email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='password' 
          placeholder='Enter your password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log In (Button)</button>
      </form>
    </div>
  );
};

export default SignIn;

/*
const signIn = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};
*/