import NavBar from '@/components/NavBar';
import Link from 'next/link';
// import Image from 'next/image';
// import ToDoList from './components/ToDoList';
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){
  return(
    <div>
      <NavBar/>
      <p>home page, login, registration</p>
      <p>"Welcome to our ProPlan"<br /> "Collaborative Project Management"</p>
    </div>
  )
}
