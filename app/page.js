'use client';

import React, { useState } from 'react';


import SignIn from './_utils/SignIn';
import AuthDetails from './_utils/AuthDetails';


export default function Home(){

  return(
    // <div>
    //   <NavBar/>
    //   <p>home page, login, registration</p>
    //   <p>"Welcome to our ProPlan"<br /> "Collaborative Project Management"</p>

    //   <p>LOGIN PAGE</p>
    //   <p>-</p>
    //   <SignIn />
    //   <AuthDetails />
    // </div>
    <div>
      <NavBar />

    <div className="container mx-auto mt-8 p-4 flex flex-col justify-center">
    </div>
    <p className="text-2xl font-bold mb-4 text-center">Welcome to our ProPlan</p>
    <p className="text-lg text-center">Collaborative Project Management</p>

    <div className="mt-8 flex flex-col justify-center">      
      
    </div>
  </div>
  )
}
