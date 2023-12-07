"use client";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProject = ({ save }) => {
  const [modal, setModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'projectName') {
      setProjectName(value);
    } else if (name === 'projectDescription') {
      setProjectDescription(value);
    }
  };

  const handleSave = () => {
    let projectObj = {
      Name: projectName,
      Description: projectDescription
    };
    save(projectObj);
    setProjectName('');
    setProjectDescription('');
    toggle();
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>Create Project</Button>
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
