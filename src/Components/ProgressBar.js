import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarContainer = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgressBarContainer;