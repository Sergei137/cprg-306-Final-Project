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
    // Load projects from local storage
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  const handleSaveProject = (projectObj) => {
    let updatedProjects = [];

    // Check if we are editing an existing project
    if (editingProject) {
      updatedProjects = projects.map(p => 
        p.id === editingProject.id ? { ...p, ...projectObj } : p
      );
    } else {
      // Add a new project
      const newProject = { ...projectObj, id: Date.now() };
      updatedProjects = [...projects, newProject];
    }

    // Update the state and local storage
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
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
        <CreateProject save={handleSaveProject} />
        {projects.map((project, index) => (
          <div key={index}>
            <p><strong>Project Name:</strong> {project.Name}</p>
            <p><strong>Description:</strong> {project.Description}</p>
            <p><strong>Due Date:</strong> {project.Duedate}</p>
            <p><strong>Team Member:</strong> {project.Teammember}</p>
            <p><strong>Progress:</strong> {project.Progress}%</p>
            <progress value={project.Progress} max="100"></progress>
            <button onClick={() => handleEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
        ))}
        <Link href="/">Home Page</Link>
      </div>
      {editingProject && (
        <EditProjectModal 
          project={editingProject} 
          onSave={handleSaveProject} 
          onCancel={() => setEditingProject(null)} 
        />
      )}
    </main>
  );
};

export default ProjectDetailsPage;
