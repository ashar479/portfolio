import React from 'react';
import './Android.css';
import HomeImg from './Images/Home.png';
import InvestmentsImg from './Images/Invest.png';
import CoinDetailsImg from './Images/CoinDetails.png';

const GITHUB_BACKEND_URL = 'https://github.com/ashar479/cryptopulse-backend';
const GITHUB_FRONTEND_URL = 'https://github.com/ashar479/cryptopulse-frontend';
const APK_URL =
  'https://expo.dev/accounts/anshsharma1206/projects/CryptoPulse/builds/3618094c-e83f-4f09-ae4a-3e33aee091f8';

const Android = () => {
  return (
    <div className="android-container">
      <header className="android-header">
        <h1>
          <span className="logo-gradient">CryptoPulse</span>
          <span style={{ fontWeight: 400 }}> — Crypto Portfolio & Tracker</span>
        </h1>
        <p className="android-header-desc">
          The modern way to track your crypto portfolio, monitor real-time
          prices, record buys & sells, and instantly view your profit/loss.
        </p>
        <div className="cta-buttons">
          <a
            className="cta-btn"
            href={GITHUB_FRONTEND_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Code
          </a>
          <a
            className="cta-btn"
            href={GITHUB_BACKEND_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend Code
          </a>
          <a
            className="cta-btn cta-btn-download"
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
        </div>
      </header>

      <section className="android-screenshots">
        <h2>App Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-item">
            <img src={HomeImg} alt="Home" />
            <p>
              <b>Home:</b> Live prices & trending coins
            </p>
          </div>
          <div className="screenshot-item">
            <img src={InvestmentsImg} alt="Investments" />
            <p>
              <b>Investments:</b> Add & manage your crypto records
            </p>
          </div>
          <div className="screenshot-item">
            <img src={CoinDetailsImg} alt="Coin Details" />
            <p>
              <b>Coin Details:</b> Charts, stats & analytics
            </p>
          </div>
        </div>
      </section>

      <section className="android-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>📈 Live Prices</h3>
            <p>Real-time crypto data for all top coins</p>
          </div>
          <div className="feature-item">
            <h3>📝 Investments</h3>
            <p>Record all your crypto buys and sells</p>
          </div>
          <div className="feature-item">
            <h3>💰 Profit & Loss</h3>
            <p>Instantly see how much you’ve earned/lost</p>
          </div>
          <div className="feature-item">
            <h3>📊 Charts & Analytics</h3>
            <p>Clean price charts for every coin</p>
          </div>
        </div>
      </section>

      <footer className="android-footer">
        <p>© 2024 CryptoPulse App | Developed by Ansh Sharma</p>
      </footer>
    </div>
  );
};

export default Android;
