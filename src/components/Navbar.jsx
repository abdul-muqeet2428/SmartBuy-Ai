import React, { useState } from 'react';
import { SparklesIcon, ScaleIcon, WalletIcon } from './Icons';
import { formatINR } from '../utils/aiAnalyzer';

export function Navbar({
  userBudget,
  onOpenBudgetModal,
  compareList,
  onOpenCompareModal,
  onNavigateSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-sticky">
      <div className="content-wrapper nav-container">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => handleNavClick('hero')} role="button" tabIndex={0}>
          <div className="brand-icon-box">
            <SparklesIcon size={22} className="brand-sparkle" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">SmartBuy <span className="brand-ai">AI</span></span>
            <span className="brand-tagline">Shop Smart. Save More.</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-links">
          <button className="nav-link-btn" onClick={() => handleNavClick('hero')}>Home</button>
          <button className="nav-link-btn" onClick={() => handleNavClick('categories')}>Categories</button>
          <button className="nav-link-btn" onClick={() => handleNavClick('trending')}>Trending</button>
          <button className="nav-link-btn" onClick={() => handleNavClick('budget-section')}>Budget Tool</button>
          <button className="nav-link-btn" onClick={() => handleNavClick('how-it-works')}>How It Works</button>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Quick Budget Indicator */}
          <button
            className="nav-budget-pill"
            onClick={onOpenBudgetModal}
            title="Click to set or adjust your shopping budget"
          >
            <WalletIcon size={16} className="text-cyan" />
            <span className="budget-pill-label">
              {userBudget ? formatINR(userBudget) : 'Set Budget'}
            </span>
          </button>

          {/* Compare Badge Button */}
          <button
            className={`nav-compare-btn ${compareList.length > 0 ? 'active' : ''}`}
            onClick={onOpenCompareModal}
            title="Compare selected products side-by-side"
          >
            <ScaleIcon size={18} />
            <span className="compare-label">Compare</span>
            {compareList.length > 0 && (
              <span className="compare-badge-count">{compareList.length}</span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`bar ${mobileMenuOpen ? 'bar-open-1' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'bar-open-2' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'bar-open-3' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <button className="mobile-nav-link" onClick={() => handleNavClick('hero')}>🏠 Home</button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('categories')}>🗂️ Categories</button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('trending')}>🔥 Trending Products</button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('budget-section')}>💰 Budget Analyzer</button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('how-it-works')}>⚡ How It Works</button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('why-us')}>🛡️ Why SmartBuy AI</button>
          <div className="mobile-menu-actions">
            <button className="btn-cyan-outline" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenBudgetModal(); }}>
              <WalletIcon size={16} /> {userBudget ? `Budget: ${formatINR(userBudget)}` : 'Set Budget in ₹'}
            </button>
            <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }} onClick={() => { setMobileMenuOpen(false); onOpenCompareModal(); }}>
              <ScaleIcon size={16} /> Compare ({compareList.length})
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar-sticky {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(7, 11, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
        }
        .brand-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(121, 40, 202, 0.3));
          border: 1px solid rgba(0, 242, 254, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
        }
        .brand-sparkle {
          color: #00f2fe;
          filter: drop-shadow(0 0 4px #00f2fe);
        }
        .brand-text-wrap {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .brand-ai {
          background: linear-gradient(135deg, #00f2fe, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .brand-tagline {
          font-size: 0.68rem;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-link-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-budget-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: #f8fafc;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-budget-pill:hover {
          background: rgba(0, 242, 254, 0.16);
          border-color: #00f2fe;
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.25);
        }
        .text-cyan {
          color: #00f2fe;
        }
        .nav-compare-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #e2e8f0;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-compare-btn:hover,
        .nav-compare-btn.active {
          background: rgba(139, 92, 246, 0.25);
          border-color: #a855f7;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.35);
        }
        .compare-badge-count {
          background: linear-gradient(135deg, #00f2fe, #7928ca);
          color: #070B18;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 1px 7px;
          border-radius: 9999px;
        }
        .mobile-toggle-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .bar {
          width: 100%;
          height: 2px;
          background: #e2e8f0;
          border-radius: 2px;
          transition: 0.3s;
        }
        @media (max-width: 860px) {
          .nav-desktop-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
        .mobile-menu-drawer {
          background: #0B1124;
          border-bottom: 1px solid rgba(0, 242, 254, 0.2);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeIn 0.2s ease-out;
        }
        .mobile-nav-link {
          background: transparent;
          border: none;
          color: #cbd5e1;
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }
        .mobile-nav-link:hover {
          color: #00f2fe;
        }
      `}</style>
    </header>
  );
}

