import React from "react";
import "./modal.css";
import Win from "./Win";
import "../modal/modal.css";
import Restart from "./Restart";
const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
          {/* <Win /> */}
          {/* <Restart /> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
