import Link from 'next/link';
//import Image from 'next/image';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '@/components/NavBar';
import './css/toDoList.css'

export default function ToDoListPage(){
  return(
    <main>
      <NavBar/>  
      <div className="flex flex-col items-center " >
        <ToDoList/>
        
      </div>
    </main>
  )
}
