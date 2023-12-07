import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Dashboard() {
  const projects = [
    {
      name: 'Project 1',
      description: 'This is project 1',
      dueDate: '2022-12-31',
      teamMembers: ['Alice', 'Bob'],
      progress: 50,
    },
    // other projects...
  ];

  return (
    <main>
      <NavBar/>
      <div>
        <p>Dashboard</p>
        <p>-</p>
        <Link href="/">Home/Log in page</Link>

        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Due date: {project.dueDate}</p>
            <p>Team members: {project.teamMembers.join(', ')}</p>
            <p>Progress: {project.progress}%</p>
          </div>
        ))}
      </div>
    </main>
  )
}