import React from 'react';
import './Nst.css';
import NstResult from './NST_Results.jpeg';

const Nst = () => {
  return (
    <div className="nst-container">
      {/* Header Section */}
      <header className="nst-header">
        <h1>Neural Style Transfer for Art Generation</h1>
        <p>
          Combining the content of one image with the artistic style of another
          using deep learning.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="nst-intro">
        <h2>Overview</h2>
        <p>
          Neural Style Transfer (NST) is a deep learning technique that uses
          convolutional neural networks to apply the artistic style of one image
          onto the content of another. This project demonstrates the power of
          NST for generating unique, AI-powered artwork.
        </p>
      </section>

      {/* Features Section */}
      <section className="nst-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Content Preservation</h3>
            <p>Retains the structural content of the original image.</p>
          </div>
          <div className="feature-item">
            <h3>Artistic Styling</h3>
            <p>Applies intricate artistic details from a style image.</p>
          </div>
          <div className="feature-item">
            <h3>Customizable</h3>
            <p>Supports multiple style images and blending configurations.</p>
          </div>
          <div className="feature-item">
            <h3>Powered by CNNs</h3>
            <p>
              Utilizes pre-trained convolutional neural networks for efficient
              style transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="nst-image">
        <h2>Generated Artwork</h2>
        <img src={NstResult} alt="Neural Style Transfer Result" />
        <p>
          Example of blending the structural content of an image with a famous
          artistic style.
        </p>
      </section>

      {/* GitHub Section */}
      <section className="nst-github">
        <h2>Explore the Code</h2>
        <p>
          Access the complete implementation of Neural Style Transfer, including
          the pre-trained models and Python scripts, on GitHub.
        </p>
        <a
          title="Source Code"
          href="https://github.com/anshsharma120601/NST"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          View on GitHub
        </a>
      </section>

      {/* Footer Section */}
      <footer className="nst-footer">
        <p>© 2024 Neural Style Transfer | Developed by Ansh Sharma</p>
      </footer>
    </div>
  );
};

export default Nst;
