import React from "react";
import "./win.css";
import Xicon from "../icons/Xicon";

const Win = () => {
  return (
    <div className="score">
      <p>you win!</p>
      <h3 className="score__title">
        <Xicon /> takes the round
      </h3>
      <div className="score__btns">
        <button className="btn btn-sm">quit</button>
        <button className="btn btn-sm btn-yellow">next round</button>
      </div>
    </div>
  );
};

export default Win;
