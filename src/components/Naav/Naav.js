import React from 'react';
import './Naav.css';

export default function Naav() {
  return (
    <div className="naav-card">
      <div className="naav-badges">
        <span className="naav-badge-primary">Compiler Design</span>
        <span className="naav-badge-secondary">NAAV Language</span>
      </div>
      <h2 className="naav-title">
        Compiler Design: <span className="naav-highlight">NAAV</span>
      </h2>
      <p className="naav-desc">
        <span role="img" aria-label="lightbulb">
          💡
        </span>
        &nbsp;Designed and built a new programming language called{' '}
        <strong>NAAV</strong> — complete with a compiler and interpreter, as
        part of SER502 at ASU.
      </p>
      <div className="naav-buttons">
        <a
          href="https://www.youtube.com/watch?v=bbO3-azC7eQ"
          target="_blank"
          rel="noopener noreferrer"
          className="naav-btn naav-btn-demo"
        >
          🎬 Demo Video
        </a>
        <a
          href="https://github.com/atharva-date/SER502-NAAV-Team17"
          target="_blank"
          rel="noopener noreferrer"
          className="naav-btn naav-btn-source"
        >
          💻 Source Code
        </a>
      </div>
      <div className="naav-section">
        <span className="naav-section-title">Key Tools Used:</span>
        <ul className="naav-list">
          <li>SWI-Prolog 9.2.1 (x64, Windows &amp; Mac supported)</li>
          <li>Python 3.11.4</li>
          <li>Pyswip 0.2.11</li>
          <li>Ply 3.11</li>
        </ul>
      </div>
      <div className="naav-section">
        <span className="naav-section-title">Setup &amp; Run:</span>
        <ol className="naav-list-ol">
          <li>
            Install <strong>Python3</strong> and <strong>SWI-Prolog</strong>
          </li>
          <li>
            Clone the repo:
            <pre className="naav-code">
              git clone https://github.com/atharva-date/SER502-NAAV-Team17.git
            </pre>
          </li>
          <li>
            Move to runtime dir:
            <pre className="naav-code">cd src cd runtime</pre>
          </li>
          <li>
            Install dependencies:
            <pre className="naav-code">
              pip install git+https://github.com/yuce/pyswip@master#egg=pyswip
              pip install ply
            </pre>
          </li>
          <li>
            Run the interpreter:
            <pre className="naav-code">
              python executor.py &lt;file_path&gt; # e.g. python executor.py
              ./data/boolean.naav
            </pre>
          </li>
        </ol>
      </div>
      <p className="naav-footer">
        🖥️ Tested on <b>Windows</b> (build) and <b>Mac OS</b> (runtime).
      </p>
    </div>
  );
}
