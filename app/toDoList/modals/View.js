//import React, { useEffect, useState } from "react";
//import { useAmp } from "next/amp";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ViewTask = ({ modal, toggle, taskObj }) => {
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
      <Button color="primary" onClick={toggle}>
        Ok
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ViewTask;