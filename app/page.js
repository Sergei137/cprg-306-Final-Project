import Link from 'next/link';
// import Image from 'next/image';
// import ToDoList from './components/ToDoList';
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home(){
  return(
    <div>
      <p>home page, login, registration</p>
      <p>-</p>
      <p><Link href="/dashboard">Dashboard Page</Link></p>
      <p><Link href="/projectDetails">Project Details Page</Link></p>
      <p><Link href="/toDoList">To Do List Page</Link></p>
      <p><Link href="/visualization">Visualization Page</Link></p>
    </div>
  )
}
