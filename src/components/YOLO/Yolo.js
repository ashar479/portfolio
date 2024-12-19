import React from 'react';
import './Yolo.css';
import YoloResult from './Yolo_Results_Detected.jpeg';

const Yolo = () => {
  return (
    <div className="yolo-container">
      {/* Header Section */}
      <header className="yolo-header">
        <h1>You Only Look Once (YOLO) for Car Detection</h1>
        <p>
          A high-performance object detection system leveraging the YOLO
          algorithm to identify and classify vehicles in real time.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="yolo-intro">
        <h2>Overview</h2>
        <p>
          YOLO is a state-of-the-art object detection algorithm that processes
          images in real time with incredible accuracy. In this project, we
          implemented YOLO for detecting cars, motorbikes, and people in parking
          and urban environments.
        </p>
      </section>

      {/* Features Section */}
      <section className="yolo-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Real-Time Detection</h3>
            <p>
              Identify and classify objects in milliseconds using the YOLO
              algorithm.
            </p>
          </div>
          <div className="feature-item">
            <h3>High Accuracy</h3>
            <p>
              Achieve precise detection with bounding boxes and confidence
              scores.
            </p>
          </div>
          <div className="feature-item">
            <h3>Optimized for Edge Devices</h3>
            <p>
              Run on lightweight systems, making it ideal for IoT and
              surveillance applications.
            </p>
          </div>
          <div className="feature-item">
            <h3>Multi-Class Detection</h3>
            <p>
              Simultaneously detect multiple classes like cars, motorbikes, and
              pedestrians.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="yolo-image">
        <h2>Detection Results</h2>
        <img src={YoloResult} alt="YOLO Detection Results" />
        <p>
          Example of YOLO detecting cars, motorbikes, and pedestrians in a busy
          parking lot.
        </p>
      </section>

      {/* GitHub Section */}
      <section className="yolo-github">
        <h2>Explore the Code</h2>
        <p>
          Access the complete implementation of YOLO for car detection,
          including model training and inference code.
        </p>
        <a
          title="Source Code"
          href="https://github.com/anshsharma120601/yolo_project"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          View on GitHub
        </a>
      </section>

      {/* Footer Section */}
      <footer className="yolo-footer">
        <p>© 2024 YOLO Project | Developed by Ansh Sharma</p>
      </footer>
    </div>
  );
};

export default Yolo;
