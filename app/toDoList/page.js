import Link from 'next/link';
//import Image from 'next/image';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ToDoListPage(){
  return(
    <main>  
      <div>
        <ToDoList/>
        <Link href="/">Home Page</Link>
      </div>
    </main>
  )
}
