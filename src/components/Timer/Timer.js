import React from "react";
import "./Timer.css";

export const Timer = () => {
  return (
    <div className="timer-container">
      <div className="timer-button-container">
        <button className="timer-button">2</button>
        <p>minutes</p>
      </div>
      <div className="timer-button-container">
        <button className="timer-button">5</button>
        <p>minutes</p>
      </div>
      <div className="timer-button-container">
        <button className="timer-button">10</button>
        <p>minutes</p>
      </div>
    </div>
  );
};
