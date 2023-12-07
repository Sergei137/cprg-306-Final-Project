'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import ProjectDetails from '../projectDetails/page';

import { useAuth } from '../_utils/AuthDetails';

export default function Dashboard() {
  // const projects = [
  //   {
  //     name: 'Project 1',
  //     description: 'This is project 1',
  //     dueDate: '2022-12-31',
  //     teamMembers: ['Alice', 'Bob'],
  //     progress: 50,
  //   },
  //   {
  //     name: 'Project 2',
  //     description: 'This is project 2',
  //     dueDate: '2023-11-23',
  //     teamMembers: ['Alice', 'Rick', 'Bob'],
  //     progress: 75,
  //   },
  // ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  return (
    <main>
      <NavBar/>
      <div>
        <p>Dashboard</p>
        <p>-</p>
        <Link href="/">Home/Log in page</Link>
      </div>
      <div className='content-container'>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.Name}</h2>
            <p>{project.Description}</p>
            <p>Due date: {project.Duedate}</p>
            <p>Team members: {project.Teammember.join(', ')}</p>
            <p>Progress: {project.Progress}%</p>
          </div>
        ))}
      </div>
    </main>
  )
}