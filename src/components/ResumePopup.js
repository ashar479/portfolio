import React from 'react';
import './ResumePopup.css';

const ResumePopup = ({ resumeUrl, onClose }) => {
  return (
    <div className="resume-popup">
      <div className="resume-popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <iframe title="Resume" src={resumeUrl}></iframe>
      </div>
    </div>
  );
};

export default ResumePopup;
