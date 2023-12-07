"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import CreateProject from './components/CreateProject';
import EditProjectModal from './components/EditProject.js'; 

const ProjectDetailsPage = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null); 

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  const handleSaveProject = (projectObj) => {
    if (editingProject) {
      
      const updatedProjects = projects.map(p => 
        p.id === editingProject.id ? { ...p, ...projectObj } : p
      );
      setProjects(updatedProjects);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    } else {
      
      const newProjects = [...projects, { ...projectObj, id: Date.now() }];
      setProjects(newProjects);
      localStorage.setItem('projects', JSON.stringify(newProjects));
    }
    setEditingProject(null);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  return (
    <main>
      <NavBar />
      <div className='content-container'>
        <h2>Project Details</h2>
        <CreateProject save={handleSaveProject} project={editingProject} />
        {projects.map((project, index) => (
          <div key={index}>
            <p><strong>Project Name:</strong> {project.Name}</p>
            <p><strong>Description:</strong> {project.Description}</p>
            <button onClick={() => handleEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
        ))}
        <Link href="/">Home Page</Link>
      </div>
      {editingProject && <EditProjectModal project={editingProject} save={handleSaveProject} />}
    </main>
  );
};

export default ProjectDetailsPage;
