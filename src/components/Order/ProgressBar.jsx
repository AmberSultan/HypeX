import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="progress-container">
      <div className="progress-line">
        <div className="progress" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} />
      </div>
      <div className="progress-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? 'active' : ''}`}
          >
            <div className="step-circle">
              {index <= currentStep ? <div className="filled-circle" /> : <div className="empty-circle" />}
            </div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
