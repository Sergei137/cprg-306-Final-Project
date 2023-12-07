'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import ProjectDetails from '../projectDetails/page';

import { useAuth } from '../_utils/AuthDetails';
import './dashboard.css';

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

  const colors = [
    {
      primaryColor : "#5D93E1",
      secondaryColor : "#ECF3FC"
    },
    {
      primaryColor : "#F9D288",
      secondaryColor : "#FEFAF1"
    },
    {
      primaryColor : "#5DC250",
      secondaryColor : "#F2FAF1"
    },
    {
      primaryColor : "#F48687",
      secondaryColor : "#FDF1F1"
    },
    {
      primaryColor : "#B964F7",
      secondaryColor : "#F3F0FD"
    }
  ]

  return (
    <main>
      <NavBar/>

      <div className='proj-content-container'>
          <div className='proj-info-container'>
          {projects.map((project, index) => (
            <div key={index} className='proj-container'>
              <h2 style={{"background-color": colors[index%5].primaryColor}}>{project.Name}</h2>
              <p style={{"background-color": colors[index%5].secondaryColor}}>{project.Description}</p>
              <p className='font-medium'>Due date:</p><p> {project.Duedate}</p>
              <p className='font-medium'>Team members: </p><p>{project.Teammember.join(', ')}</p>
              <p className='font-medium'>Progress:</p><p> {project.Progress}%</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link href="/">Home/Log in page</Link>
      </div>
    </main>
  )
}