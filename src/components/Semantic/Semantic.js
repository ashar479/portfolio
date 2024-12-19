import React from 'react';
import './Semantic.css';
import Ui from './UI_Home.png';
import Hotspot from './Hotspots.png';
import Temporal from './Temporal.png';
import Arrest from './Police_Impact.png';
import CrossCity from './Cross City.png';
import Graphdb from './GraphDb.png';
import Ttl from './TTLs.png';

const Semantic = () => {
  return (
    <div className="semantic-container">
      {/* Header Section */}
      <header className="header">
        <h1>CrimeWare - Semantic Web Technology for Crime Analysis</h1>
        <p>
          A data-driven solution leveraging Semantic Web technologies to
          analyze, visualize, and prevent crime trends across cities.
        </p>
      </header>

      {/* Zigzag Layout Section */}
      <section className="zigzag-section">
        {/* Block 1 */}
        <div className="zigzag-block">
          <div className="zigzag-text">
            <h2>Contextual Analysis of Crime Hotspots</h2>
            <p>
              Identify high-crime areas with detailed spatial analysis, enabling
              law enforcement to optimize resource allocation and implement
              preventive measures.
            </p>
          </div>
          <div className="zigzag-image">
            <img src={Hotspot} alt="Crime Hotspot Map" />
          </div>
        </div>

        {/* Block 2 */}
        <div className="zigzag-block reverse">
          <div className="zigzag-image">
            <img src={Temporal} alt="Temporal Analysis" />
          </div>
          <div className="zigzag-text">
            <h2>Temporal Analysis of Crime Trends</h2>
            <p>
              Understand yearly crime patterns to identify seasonal peaks and
              shifts, aiding predictive policing and better strategic planning.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="zigzag-block">
          <div className="zigzag-text">
            <h2>Yearly Arrest Analysis</h2>
            <p>
              Analyze yearly arrest counts by crime type to evaluate law
              enforcement effectiveness and identify areas needing greater
              focus.
            </p>
          </div>
          <div className="zigzag-image">
            <img src={Arrest} alt="Arrest Count Analysis" />
          </div>
        </div>

        {/* Block 4 */}
        <div className="zigzag-block reverse">
          <div className="zigzag-image">
            <img src={CrossCity} alt="Cross-City Comparison" />
          </div>
          <div className="zigzag-text">
            <h2>Cross-City Crime Benchmarking</h2>
            <p>
              Compare crime statistics between cities like Chicago and Los
              Angeles to identify trends, patterns, and successful intervention
              strategies.
            </p>
          </div>
        </div>

        {/* TTL Files and GraphDB Section */}
        <section className="zigzag-section">
          <div className="zigzag-block">
            <div className="zigzag-text">
              <h2>TTL Files Integration</h2>
              <p>
                TTL files (Turtle) were used to define the crime ontology in RDF
                format. These files capture entities like crime types,
                locations, and temporal patterns, which are stored in GraphDB as
                triples for seamless querying and visualization.
              </p>
            </div>
            <div className="zigzag-image">
              <img src={Graphdb} alt="GraphDB TTL Integration" />
            </div>
          </div>

          <div className="zigzag-block reverse">
            <div className="zigzag-image">
              <img src={Ttl} alt="GraphDB Visualization" />
            </div>
            <div className="zigzag-text">
              <h2>GraphDB and SPARQL</h2>
              <p>
                GraphDB serves as the backbone of our project, enabling the
                storage of RDF triples and running SPARQL queries to fetch
                crime-related insights. It helps identify patterns and trends
                through semantic relationships between crime entities.
              </p>
            </div>
          </div>
        </section>

        {/* GitHub and YouTube Links */}
        <div className="zigzag-block">
          <div className="zigzag-text">
            <h2>Explore the Code</h2>
            <p>
              Access the full source code on GitHub and explore how the
              knowledge graph, SPARQL queries, and React UI work seamlessly
              together.
            </p>
            <a
              title="Source Code"
              href="https://github.com/ashar479/SER531_Group18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              View on GitHub
            </a>
          </div>
          <div className="zigzag-image">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
            />
          </div>
        </div>

        <div className="zigzag-block reverse">
          <div className="zigzag-image">
            <img src={Ui} alt="YouTube Demo" />
          </div>
          <div className="zigzag-text">
            <h2>Watch the Demo</h2>
            <p>
              Check out a live demonstration of the CrimeWare application,
              showcasing key features like crime hotspots, temporal analysis,
              and cross-city benchmarking.
            </p>
            <a
              title="Project Demo"
              href="https://youtu.be/vsOfqYMOX8A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 CrimeWare | Designed with Semantic Web and React</p>
      </footer>
    </div>
  );
};

export default Semantic;
