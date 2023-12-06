
import NavBar from '@/components/NavBar';
import Link from 'next/link';


// import Image from 'next/image';
// import ToDoList from './components/ToDoList';
// import 'bootstrap/dist/css/bootstrap.min.css'

import SignIn from './_utils/SignIn';
//import SignUp from './_utils/SignUp';
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
    <div className="container mx-auto mt-8 p-4 flex flex-col justify-center">
    <p className="text-2xl font-bold mb-4 text-center">Welcome to our ProPlan</p>
    <p className="text-lg text-center">Collaborative Project Management</p>

    <div className="mt-8 flex flex-col justify-center">      
      <SignIn/>
      <AuthDetails />
    </div>
  </div>
  )
}
