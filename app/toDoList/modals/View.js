//import React, { useEffect, useState } from "react";
//import { useAmp } from "next/amp";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import '../css/toDoList.css';

const ViewTask = ({ modal, toggle, taskObj }) => {
  const handleOk = () => {
    // Add any additional handling needed for the "Ok" button
    toggle(); // Close the modal
  };

  const handleCancel = () => {
    // Add any additional handling needed for the "Cancel" button
    toggle(); // Close the modal
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>View Task</ModalHeader>
      <ModalBody className="h-72">
        <div>
          <strong>Task Name:</strong> {taskObj.Name}
        </div>
        <div>
          <strong>Description:</strong> {taskObj.Description}
        </div>
      </ModalBody>
      <ModalFooter>
      <Button className = "to-do-list-buttons" onClick={handleOk}>
        Ok
      </Button>{' '}
      <Button className = "to-do-list-buttons" onClick={handleCancel}>
        Cancel
      </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewTask;