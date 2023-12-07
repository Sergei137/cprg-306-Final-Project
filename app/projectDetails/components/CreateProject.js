"use client";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProject = ({ save }) => {
  const [modal, setModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [progress, setProgress] = useState(0);


  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'projectName':
        setProjectName(value);
        break;
      case 'projectDescription':
        setProjectDescription(value);
        break;
      case 'dueDate':
        setDueDate(value);
        break;
      case 'teamMembers':
        setTeamMembers(value);
        break;
      case 'progress':
        setProgress(value);
        break;
      default:
        break;

    }
  };

  const handleSave = () => {
    let projectObj = {
      Name: projectName,
      Description: projectDescription,
      Duedate: dueDate,
      Teammember: teamMembers.split(',').map(member => member.trim()), // Assuming team members are comma-separated
      Progress: parseInt(progress, 10)

    };
    save(projectObj);
    setProjectName('');
    setProjectDescription('');
    setDueDate('');
    setTeamMembers('');
    setProgress(0);

    toggle();
  };

  return (
    <>
      <Button className='w-40' onClick={toggle}>Create Project</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New Project</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Project Name</label>
              <input 
                type="text" 
                className="form-control" 
                value={projectName} 
                onChange={handleChange} 
                name="projectName" 
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea 
                rows="5" 
                className="form-control" 
                value={projectDescription} 
                onChange={handleChange} 
                name="projectDescription" 
              />
            </div>

          {/* Existing fields for name and description */}
            {/* New field for due date */}
            <div className="form-group">
              <label>Due Date</label>
              <input 
                type="date" 
                className="form-control" 
                value={dueDate} 
                onChange={handleChange} 
                name="dueDate" 
              />
            </div>
            {/* New field for team members */}
            <div className="form-group">
              <label>Team Members</label>
              <input 
                type="text" 
                className="form-control" 
                value={teamMembers} 
                onChange={handleChange} 
                name="teamMembers" 
                placeholder="Enter names separated by commas"
              />
            </div>
            {/* New field for progress */}
            <div className="form-group">
              <label>Progress (%)</label>
              <input 
                type="number" 
                className="form-control" 
                value={progress} 
                onChange={handleChange} 
                name="progress" 
                min="0"
                max="100"
              />
            </div>

          </form>            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Create</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


export default CreateProject;

