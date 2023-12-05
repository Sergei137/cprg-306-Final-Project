'use client';
import React, { useState } from 'react';
 
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [SignUpMessage, setSignUpMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signUp = (e) => {
    e.preventDefault();

    // clear sign up message on new sign up
    setSignUpMessage('');

    // check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setErrorMessage(''); // clear error message on successful sign up
      setSignUpMessage('New account has been created.');
      console.log(userCredential);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('That email address is already in use. Please try a different email address.');
        console.log(error);
      } else {
        setErrorMessage(error.message);
      }
      console.log(error);
    });
  };

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
        <h1>Sign Up Form</h1>
        {errorMessage && <p>{errorMessage}</p>}
        {SignUpMessage && <p>{SignUpMessage}</p>}
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
        <input 
          type='password' 
          placeholder='Confirm your password' 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit'>Sign Up (Button)</button>
      </form>
    </div>
  );
};

export default SignUp;