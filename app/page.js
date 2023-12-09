'use client';

import React, { useState } from 'react';


import SignIn from './_utils/SignIn';
import AuthDetails from './_utils/AuthDetails';




export default function Home(){

  return(
    <div className='w-100 h-auto '>  
      
      <h1 className='font-bold text-3xl mt-24 text-slate-200'>Welcome to our ProPlan</h1>
  
      <h2 className='font-medium text-xl text-center mt-1 text-slate-200'> Collaborative Project Management</h2>
      <div className='mt-5'>
      <SignIn />
      </div>
      
      <AuthDetails />
    </div>
  )
}
