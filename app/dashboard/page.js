import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main>
      <div>
        <p>Dashboard</p>
        <p>-</p>
        <Link href="/">Home Page</Link>
      </div>
    </main>
  )
}