'use client';
import React, { useState } from 'react';
import '../css/SignIn.css'

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ onLogInSuccess }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const signIn = async (e) => {
    
    // 
    e.preventDefault();

    // clear error message on new sign in
    setErrorMessage(''); 

    // sign in user
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage(''); // clear error message on successful sign in
      console.log(userCredential);
    }
    catch (error) {
      setErrorMessage('Failed to login. Incorrect email or password.'); // set error message on failed sign in
      console.log(error);
    }
  };

  return (
    <div className='sign-in-container shadow-lg '>
      <form onSubmit={signIn}>
        <h1 className='text-blue-200'>Log In</h1>
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
        <button class ="sign-in-button" type='submit' className='bg-white bg-opacity-70 text-gray-700   hover:text-blue-700'>Log In</button>
      </form>
    </div>
  );
};

export default SignIn;