"use client";
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditProject = ({ project, onSave, onCancel }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    if (project) {
      setProjectName(project.Name);
      setProjectDescription(project.Description);
      setDueDate(project.Duedate || '');
      setTeamMembers(project.Teammember ? project.Teammember.join(', ') : '');
      setProgress(project.Progress || 0);

    }
  }, [project]);

  const handleSave = () => {
    const updatedProject = {
      ...project,
      Name: projectName,
      Description: projectDescription,
      Duedate: dueDate,
      Teammember: teamMembers.split(',').map(member => member.trim()),
      Progress: parseInt(progress, 10)
    };
    onSave(updatedProject); // Call onSave with the updated project
  };

  return (
    <Modal isOpen={!!project} toggle={onCancel}>
      <ModalHeader toggle={onCancel} className='text-black font-medium'>Edit Project</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className='text-blue-700 font-medium'>Project Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={projectName} 
              onChange={e => setProjectName(e.target.value)} 
              name="projectName" 
            />
          </div>
          <div className="form-group">
            <label className='text-blue-700 font-medium'>Description</label>
            <textarea 
              rows="5" 
              className="form-control" 
              value={projectDescription} 
              onChange={e => setProjectDescription(e.target.value)} 
              name="projectDescription" 
            />
          </div>
        {/* New field for due date */}
        <div className="form-group">
            <label className='text-blue-700 font-medium'>Due Date</label>
            <input 
              type="date" 
              className="form-control" 
              value={dueDate} 
              onChange={e => setDueDate(e.target.value)} 
              name="dueDate" 
            />
          </div>
          {/* New field for team members */}
          <div className="form-group">
            <label className='text-blue-700 font-medium'>Team Members</label>
            <input 
              type="text" 
              className="form-control" 
              value={teamMembers} 
              onChange={e => setTeamMembers(e.target.value)} 
              name="teamMembers" 
              placeholder="Enter names separated by commas"
            />
          </div>
          
          <div className="form-group">
            <label className='text-blue-700 font-medium'>Progress (%)</label>
            <input 
              type="number" 
              className="form-control" 
              value={progress} 
              onChange={e => setProgress(e.target.value)} 
              name="progress" 
              min="0" 
              max="100"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter className='flex justify-between'>
        <Button className='bg-blue-700 w-28' onClick={handleSave}>Save</Button>
        <Button className='bg-blue-700' onClick={onCancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditProject;

