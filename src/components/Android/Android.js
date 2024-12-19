import React from 'react';
import './Android.css';
import ServerImage from './android_server_terminal.jpg';

const Android = () => {
  return (
    <div className="android-container">
      {/* Header Section */}
      <header className="android-header">
        <h1>Mobile Application - Exam Marks App</h1>
        <p>
          A React Native-based mobile application designed for students to
          access their exam marks and performance analysis effortlessly.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="android-intro">
        <h2>Overview</h2>
        <p>
          This mobile application simplifies the way students access their
          academic performance data. Built using React Native, it provides
          real-time results through a seamless connection with the server. The
          app is lightweight, intuitive, and accessible on both iOS and Android
          devices.
        </p>
      </section>

      {/* Features Section */}
      <section className="android-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Real-Time Results</h3>
            <p>View exam marks immediately after they are published.</p>
          </div>
          <div className="feature-item">
            <h3>Performance Analysis</h3>
            <p>Analyze subject-wise performance trends and averages.</p>
          </div>
          <div className="feature-item">
            <h3>Cross-Platform</h3>
            <p>Runs seamlessly on both Android and iOS devices.</p>
          </div>
          <div className="feature-item">
            <h3>Secure</h3>
            <p>Ensures data privacy with secure communication protocols.</p>
          </div>
        </div>
      </section>

      {/* Server QR Code Section */}
      <section className="android-qr-section">
        <h2>Server Setup</h2>
        <img src={ServerImage} alt="Server Terminal with QR Code" />
        <p>
          Scan the QR code above with the Expo app to launch the application
          directly on your mobile device.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="android-footer">
        <p>© 2024 Exam Marks App | Developed by Ansh Sharma</p>
      </footer>
    </div>
  );
};

export default Android;
