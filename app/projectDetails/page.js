import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function ProjectDetailsPage() {
  return (
    <main>
      <NavBar/>
      <div>
        <p>Project Details</p>
        <p>-</p>
        <Link href="/">Home Page</Link>
      </div>
    </main>
  )
}
