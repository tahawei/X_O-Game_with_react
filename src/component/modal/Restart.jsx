import React from "react";
import "./restart.css";

const Restart = () => {
  return (
    <div className="restart">
      <div className="restart__title">restart game ?</div>
      <div className="restart__btns">
        <button className="btn btn-sm">no, cancel</button>
        <button className="btn btn-sm btn-yellow">yes restart</button>
      </div>
    </div>
  );
};

export default Restart;
