import React from "react";
import "./Options.css";

export const Options = () => {
  return (
    <div className="options-container">
      <div className="full-screen-container">
        <button
          className="full-screen-button"
          title="Mode plein écran"
        ></button>
      </div>
      <div className="reduce-screen-container">
        <button className="reduce-screen-button" title="Réduire la fenêtre">
          <div className="small-square"></div>
        </button>
      </div>
    </div>
  );
};
