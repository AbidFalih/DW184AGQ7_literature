import React from "react";
import { Modal } from "react-bootstrap";

const ModalNotif = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide} centered>
      <Modal.Body>
        <p className="text-success text-center">{props.message}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNotif;
