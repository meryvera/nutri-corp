import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalLogin = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogin;
