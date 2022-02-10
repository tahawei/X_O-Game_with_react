import React from "react";
import "./start.css";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";

const Start = () => {
  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card shadow__gray">
        <h1>Pick player 1'st mark</h1>
        <div className="start__players">
          <span className="start__players--active">
            <Xicon color="dark" />
          </span>
          <span>
            <Oicon color="light" />
          </span>
        </div>
        <p className="text-light">remember: x goes frist</p>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow">new game (vs cpu)</button>
        <button className="btn btn-blue">new game (vs player)</button>
      </div>
    </div>
  );
};

export default Start;
