import React, { useState, useEffect } from 'react';
import { SearchIcon, SparklesIcon, ZapIcon, WalletIcon } from './Icons';
import { identifyCategory } from '../data/categories';
import { formatINR } from '../utils/aiAnalyzer';

export function Hero({
  searchQuery,
  setSearchQuery,
  userBudget,
  setUserBudget,
  onAnalyzeProduct,
  onSelectProduct
}) {
  const [detectedCategory, setDetectedCategory] = useState(null);

  // Automatically detect product category as user types
  useEffect(() => {
    if (searchQuery && searchQuery.trim().length >= 2) {
      const match = identifyCategory(searchQuery);
      setDetectedCategory(match);
    } else {
      setDetectedCategory(null);
    }
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onAnalyzeProduct(searchQuery);
    }
  };

  const handleQuickTagClick = (tag) => {
    setSearchQuery(tag);
    onAnalyzeProduct(tag);
  };

  const handleBudgetPreset = (amount) => {
    setUserBudget(amount);
  };

  const quickPicks = [
    'Apple iPhone 15',
    'Sony WH-1000XM5',
    'Philips Air Fryer',
    'Nike Air Jordan',
    'ON Whey Protein',
    'Ergonomic Chair'
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="content-wrapper hero-content">
        {/* Top Glowing Tag */}
        <div className="hero-pill-badge">
          <ZapIcon size={14} className="badge-sparkle" />
          <span>Next-Gen College AI Project • Instant Spec & Value Evaluation</span>
        </div>

        {/* Main Headings */}
        <h1 className="hero-heading">
          Shop Smarter. <br />
          <span className="gradient-text">Choose Better.</span>
        </h1>

        <p className="hero-subtitle">
          SmartBuy AI analyzes real-world hardware & product specifications, verifies your budget in ₹, reveals true value-for-money, and recommends smarter, cheaper alternatives without bias.
        </p>

        {/* Futuristic Search & Budget Box */}
        <div className="hero-search-card glass-card-static">
          <form onSubmit={handleSubmit} className="hero-search-form">
            {/* Product Name Input */}
            <div className="input-group-search">
              <label className="input-field-label">
                <SearchIcon size={16} className="text-cyan" />
                <span>Search Product or Gadget</span>
              </label>
              <div className="input-field-inner">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. iPhone 15, Whey Protein, Sony XM5, Air Fryer..."
                  className="hero-text-input"
                  required
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="input-clear-btn"
                    onClick={() => setSearchQuery('')}
                    title="Clear input"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Budget Input in INR */}
            <div className="input-group-budget">
              <label className="input-field-label">
                <WalletIcon size={16} className="text-purple" />
                <span>Your Budget in ₹ (INR)</span>
              </label>
              <div className="input-field-inner">
                <span className="currency-prefix">₹</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={userBudget || ''}
                  onChange={(e) => setUserBudget(e.target.value ? Number(e.target.value) : '')}
                  placeholder="e.g. 25000"
                  className="hero-budget-input"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="submit-action-wrap">
              <button type="submit" className="btn-primary hero-submit-btn">
                <SparklesIcon size={18} />
                <span>Analyze Product</span>
              </button>
            </div>
          </form>

          {/* Auto-detected Category Indicator Banner */}
          {detectedCategory && (
            <div className="category-detected-bar">
              <span className="indicator-dot"></span>
              <span className="detected-text">
                Auto-Detected Category: <strong>{detectedCategory.name}</strong>
              </span>
              <span className="detected-hint">({detectedCategory.description})</span>
            </div>
          )}

          {/* Budget Presets & Quick Suggestions */}
          <div className="search-helpers-row">
            <div className="budget-presets-wrap">
              <span className="helpers-label">Quick Budget:</span>
              <button
                type="button"
                className={`preset-chip ${userBudget === 2000 ? 'active' : ''}`}
                onClick={() => handleBudgetPreset(2000)}
              >
                ₹2,000
              </button>
              <button
                type="button"
                className={`preset-chip ${userBudget === 10000 ? 'active' : ''}`}
                onClick={() => handleBudgetPreset(10000)}
              >
                ₹10,000
              </button>
              <button
                type="button"
                className={`preset-chip ${userBudget === 30000 ? 'active' : ''}`}
                onClick={() => handleBudgetPreset(30000)}
              >
                ₹30,000
              </button>
              <button
                type="button"
                className={`preset-chip ${userBudget === 75000 ? 'active' : ''}`}
                onClick={() => handleBudgetPreset(75000)}
              >
                ₹75,000
              </button>
              {userBudget ? (
                <button
                  type="button"
                  className="preset-chip chip-clear"
                  onClick={() => setUserBudget('')}
                >
                  Clear Budget
                </button>
              ) : null}
            </div>

            <div className="quick-tags-wrap">
              <span className="helpers-label">Try Searching:</span>
              {quickPicks.map((pick) => (
                <button
                  key={pick}
                  type="button"
                  className="tag-chip"
                  onClick={() => handleQuickTagClick(pick)}
                >
                  {pick}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Highlights Pills */}
        <div className="hero-metrics-grid">
          <div className="metric-card">
            <span className="metric-number">100%</span>
            <span className="metric-desc">Unbiased Local AI Logic</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">8+</span>
            <span className="metric-desc">Curated Categories</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">₹ INR</span>
            <span className="metric-desc">Real-time Budget Matching</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">Instant</span>
            <span className="metric-desc">Alternative Recommendations</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 60px 0 40px;
          position: relative;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.15);
          color: #00f2fe;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .badge-sparkle {
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          from { opacity: 0.6; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1.15); }
        }
        .hero-heading {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          max-width: 900px;
        }
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.6rem;
          }
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: #94a3b8;
          max-width: 720px;
          line-height: 1.6;
          margin-bottom: 40px;
        }
        @media (max-width: 768px) {
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 30px;
          }
        }
        .hero-search-card {
          width: 100%;
          max-width: 960px;
          padding: 28px;
          border-radius: var(--radius-xl);
          background: rgba(13, 20, 42, 0.82);
          border: 1px solid rgba(0, 242, 254, 0.25);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.12);
        }
        @media (max-width: 640px) {
          .hero-search-card {
            padding: 18px;
          }
        }
        .hero-search-form {
          display: grid;
          grid-template-columns: 1.8fr 1.2fr auto;
          gap: 16px;
          align-items: flex-end;
          text-align: left;
        }
        @media (max-width: 860px) {
          .hero-search-form {
            grid-template-columns: 1fr;
          }
        }
        .input-field-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .text-purple {
          color: #c084fc;
        }
        .input-field-inner {
          display: flex;
          align-items: center;
          background: rgba(7, 11, 24, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 4px 14px;
          transition: all 0.2s ease;
        }
        .input-field-inner:focus-within {
          border-color: #00f2fe;
          box-shadow: 0 0 16px rgba(0, 242, 254, 0.3);
        }
        .hero-text-input,
        .hero-budget-input {
          width: 100%;
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 1.05rem;
          padding: 10px 4px;
          outline: none;
        }
        .hero-text-input::placeholder,
        .hero-budget-input::placeholder {
          color: #475569;
          font-size: 0.95rem;
        }
        .input-clear-btn {
          background: transparent;
          border: none;
          color: #64748b;
          font-size: 1.3rem;
          cursor: pointer;
          padding: 0 4px;
        }
        .input-clear-btn:hover {
          color: #ffffff;
        }
        .currency-prefix {
          font-size: 1.15rem;
          font-weight: 700;
          color: #00f2fe;
          margin-right: 6px;
        }
        .submit-action-wrap {
          display: flex;
        }
        .hero-submit-btn {
          width: 100%;
          height: 52px;
          white-space: nowrap;
          padding: 0 28px;
          font-size: 1rem;
        }
        .category-detected-bar {
          margin-top: 16px;
          padding: 8px 16px;
          background: rgba(0, 242, 254, 0.08);
          border-radius: 8px;
          border: 1px solid rgba(0, 242, 254, 0.2);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          text-align: left;
          animation: fadeIn 0.2s ease-out;
        }
        .indicator-dot {
          width: 8px;
          height: 8px;
          background: #00f2fe;
          border-radius: 50%;
          box-shadow: 0 0 8px #00f2fe;
        }
        .detected-text strong {
          color: #00f2fe;
        }
        .detected-hint {
          color: #94a3b8;
          font-size: 0.8rem;
        }
        .search-helpers-row {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        .budget-presets-wrap,
        .quick-tags-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .helpers-label {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
          margin-right: 4px;
        }
        .preset-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 0.8rem;
          padding: 4px 11px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .preset-chip:hover,
        .preset-chip.active {
          background: rgba(0, 242, 254, 0.15);
          border-color: #00f2fe;
          color: #00f2fe;
        }
        .chip-clear {
          color: #f43f5e;
          border-color: rgba(244, 63, 94, 0.3);
        }
        .tag-chip {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: #d8b4fe;
          font-size: 0.8rem;
          padding: 4px 12px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tag-chip:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: #c084fc;
          color: #ffffff;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 960px;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        .metric-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .metric-number {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: #00f2fe;
        }
        .metric-desc {
          font-size: 0.78rem;
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
}

