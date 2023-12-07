'use client';

import React, { useState } from 'react';

import NavBar from '@/components/NavBar';
import SignIn from './_utils/SignIn';
import AuthDetails from './_utils/AuthDetails';


export default function Home(){

  return(
    <div>
      <NavBar/>
      <p>home page, login, registration</p>
      <p>"Welcome to our ProPlan"<br /> "Collaborative Project Management"</p>

      <p>LOGIN PAGE</p>
      <p>-</p>
      <SignIn />
      <AuthDetails />
    </div>
  )
}
