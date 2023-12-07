"use client";
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditProject = ({ project, onSave, onCancel }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  useEffect(() => {
    if (project) {
      setProjectName(project.Name);
      setProjectDescription(project.Description);
    }
  }, [project]);

  const handleSave = () => {
    onSave({
      ...project,
      Name: projectName,
      Description: projectDescription
    });
  };

  return (
    <Modal isOpen={!!project} toggle={onCancel}>
      <ModalHeader toggle={onCancel}>Edit Project</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Project Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={projectName} 
              onChange={e => setProjectName(e.target.value)} 
              name="projectName" 
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              rows="5" 
              className="form-control" 
              value={projectDescription} 
              onChange={e => setProjectDescription(e.target.value)} 
              name="projectDescription" 
            />
          </div>
        </form>            
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Save Changes</Button>
        <Button color="secondary" onClick={onCancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditProject;
