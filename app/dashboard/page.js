import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Dashboard() {
  return (
    <main>
      <NavBar/>
      <div>
        <p>Dashboard</p>
        <p>-</p>
        <Link href="/">Home Page</Link>
      </div>
    </main>
  )
}