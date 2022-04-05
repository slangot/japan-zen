import React from "react";
import Video1 from "./assets/video/video1.mp4";

export const Video = () => {
  return (
    <div className="video-container">
      <video controls className="video">
        <source src={Video1} type="video/mp4" />
      </video>
    </div>
  );
};
