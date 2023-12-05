// import Image from 'next/image';
// import ToDoList from './components/ToDoList';
// import 'bootstrap/dist/css/bootstrap.min.css'

import Link from 'next/link';
import ToDoListPage from './pages/ToDoListPage';

export default function Home(){
  return(
    <div>
      <p>home page</p>
      <Link href="/ToDoListPage">
        <a>to do list</a>
      </Link>
    </div>
  )
}
