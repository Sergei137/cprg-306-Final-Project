"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import CreateProject from './components/CreateProject';
import EditProjectModal from './components/EditProject.js'; 
import './projectDetails.css'

const ProjectDetailsPage = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  
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

  const handleCancelEdit = () => {
    setEditingProject(null); // Reset editing project to null on cancel
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const formatTeamMembers = (teamMembers) => {
    if (Array.isArray(teamMembers)) {
      // If it's an array, join the elements with a comma
      return teamMembers.join(', ');
    } else if (typeof teamMembers === 'string') {
      // If it's a string, return as is
      return teamMembers;
    } else {
      // If it's neither (or undefined), show 'No team members'
      return 'No team members';
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return { truncated: `${text.substring(0, maxLength)}...`, isTruncated: true };
    } else {
      return { truncated: text, isTruncated: false };
    }
  };


  return (
    <main>
    <NavBar />
    <div className='page-name'>
      <h1 className='mt-10 mb-5 font-bold text-3xl text-slate-200'>Welcome To Your Project Details</h1>
      <CreateProject save={handleSaveProject} />
    </div>
    <div className='create-proj-content-container'>
      {projects.map((project, index) => {
        const { truncated, isTruncated } = truncateText(project.Description, 100);
        return (
          <div className='new-proj-contents-container mt-5' key={index}>
            <div className='new-proj-contents'>
              <p><strong  style={{"background-color": colors[index%5].primaryColor}}>Project Name:</strong> </p><p>{project.Name}</p>
              <p className="project-description">
                <strong style={{"background-color": colors[index%5].primaryColor}}>Description:</strong></p><p> {truncated}
                {isTruncated && <button onClick={() => alert(project.Description)}>Read more</button>}
              </p>
              <p><strong style={{"background-color": colors[index%5].primaryColor}}>Due Date:</strong></p><p> {project.Duedate}</p>
              <p><strong style={{"background-color": colors[index%5].primaryColor}}>Team Member:</strong></p><p> {formatTeamMembers(project.Teammember)}</p>
              <p><strong style={{"background-color": colors[index%5].primaryColor}}>Progress:</strong> </p><p>{project.Progress}%</p>
              <progress value={project.Progress} max="100"></progress>
              <div className='edit-delete-buttons'>
                <button onClick={() => handleEditProject(project)} className='project-cont-buttons'>Edit</button>
                <button onClick={() => handleDeleteProject(project.id)} className='project-cont-buttons'>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    {editingProject && (
      <EditProjectModal
        project={editingProject}
        onSave={handleSaveProject}
        onCancel={handleCancelEdit}
      />
    )}
  </main>
);
};

export default ProjectDetailsPage;

