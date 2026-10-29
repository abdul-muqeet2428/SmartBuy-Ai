import React from 'react';
import { SparklesIcon, WalletIcon } from './Icons';
import { CATEGORIES } from '../data/categories';

export function Footer({ onSelectCategory, onNavigateSection }) {
  return (
    <footer className="site-footer">
      <div className="content-wrapper footer-content">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-box">
                <SparklesIcon size={20} className="text-cyan" />
              </div>
              <span className="footer-brand-name">
                SmartBuy <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="footer-tagline">
              <strong>Tagline:</strong> Shop Smart. Save More. Choose Better.
            </p>
            <p className="footer-description">
              An intelligent, responsive shopping assistant that audits real-world specifications, matches budgets in ₹ INR, and reveals high-value alternatives without commercial bias.
            </p>
            <div className="academic-badge-wrap">
              <span className="badge badge-purple">College Project Submission • 2026</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}>Home</a></li>
              <li><a href="#categories" onClick={(e) => { e.preventDefault(); onNavigateSection('categories'); }}>Categories</a></li>
              <li><a href="#trending" onClick={(e) => { e.preventDefault(); onNavigateSection('trending'); }}>Trending Products</a></li>
              <li><a href="#budget-section" onClick={(e) => { e.preventDefault(); onNavigateSection('budget-section'); }}>Budget Analyzer</a></li>
              <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); onNavigateSection('how-it-works'); }}>How It Works</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); onNavigateSection('why-us'); }}>Why SmartBuy AI</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">8 Key Categories</h4>
            <ul className="footer-links-list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    className="footer-cat-btn"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigateSection('trending');
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Transparency & Disclaimer */}
          <div className="footer-nav-col disclaimer-col">
            <h4 className="footer-col-title">Demo Disclaimer</h4>
            <p className="disclaimer-text">
              SmartBuy AI is an educational project developed for academic evaluation. All product data, prices, ratings, and specifications are simulated sample data.
            </p>
            <p className="disclaimer-text">
              External shopping search buttons redirect to real queries on Amazon, Flipkart, Myntra, and Croma for live consumer verification.
            </p>
            <div className="tech-stack-pills">
              <span className="badge-demo">React 18</span>
              <span className="badge-demo">Vite</span>
              <span className="badge-demo">Modern CSS</span>
              <span className="badge-demo">Local AI Logic</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 SmartBuy AI — College Project. Designed with precision and dark navy cyberpunk aesthetics.</p>
          <p className="footer-sub-note">Shop Smart. Save More. Choose Better.</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #040711;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 60px 0 30px;
          position: relative;
          z-index: 2;
        }
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
          gap: 36px;
          margin-bottom: 50px;
        }
        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 600px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
        }
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .footer-logo-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00f2fe, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-tagline {
          font-size: 0.85rem;
          color: #00f2fe;
          margin-bottom: 12px;
        }
        .footer-description {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .academic-badge-wrap {
          margin-top: 6px;
        }
        .footer-col-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-list a,
        .footer-cat-btn {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }
        .footer-links-list a:hover,
        .footer-cat-btn:hover {
          color: #00f2fe;
        }
        .disclaimer-text {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.45;
          margin-bottom: 10px;
        }
        .tech-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.8rem;
          color: #64748b;
        }
        .footer-sub-note {
          color: #94a3b8;
          font-weight: 500;
        }
      `}</style>
    </footer>
  );
}

