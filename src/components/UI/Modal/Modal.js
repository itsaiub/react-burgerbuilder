import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(-50%)" : "translateY(-100vh)",
          opacity: show ? "1" : "0"
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
