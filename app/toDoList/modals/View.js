//import React, { useEffect, useState } from "react";
//import { useAmp } from "next/amp";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      <Button color="primary" onClick={handleOk}>
        Ok
      </Button>{' '}
      <Button color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewTask;