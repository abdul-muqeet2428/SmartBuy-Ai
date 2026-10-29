import React from 'react';
import { WalletIcon, CheckCircleIcon, AlertCircleIcon, SparklesIcon } from './Icons';
import { formatINR } from '../utils/aiAnalyzer';
import { PRODUCTS } from '../data/products';

export function BudgetBar({ userBudget, setUserBudget, onFilterWithinBudget }) {
  const numericBudget = Number(userBudget) || 0;

  // Calculate statistics based on current budget
  const productsWithin = PRODUCTS.filter((p) => p.price <= numericBudget);
  const productsAbove = PRODUCTS.filter((p) => p.price > numericBudget);

  const bestValueUnderBudget = productsWithin.length > 0
    ? [...productsWithin].sort((a, b) => b.valueScore - a.valueScore)[0]
    : null;

  return (
    <section id="budget-section" className="budget-section">
      <div className="content-wrapper">
        <div className="budget-analyzer-card glass-card-static">
          <div className="budget-card-header">
            <div className="budget-header-left">
              <div className="budget-icon-ring">
                <WalletIcon size={24} className="text-cyan" />
              </div>
              <div>
                <span className="badge badge-cyan">Smart Calculator</span>
                <h3 className="budget-heading">AI Budget Analyzer & Matcher</h3>
                <p className="budget-subheading">
                  Set your maximum budget in Indian Rupees (₹) to instantly scan which items fit and calculate savings.
                </p>
              </div>
            </div>

            <div className="budget-controls">
              <div className="budget-input-wrapper">
                <span className="rupee-symbol">₹</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  placeholder="Set budget (₹)"
                  value={userBudget || ''}
                  onChange={(e) => setUserBudget(e.target.value ? Number(e.target.value) : '')}
                  className="budget-number-input"
                />
              </div>
              {userBudget && (
                <button
                  type="button"
                  className="btn-secondary btn-sm"
                  onClick={() => setUserBudget('')}
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="slider-container">
            <div className="slider-labels">
              <span>₹500 (Everyday Essentials)</span>
              <span>₹35,000 (Appliances & Audio)</span>
              <span>₹1,00,000 (Flagships & Laptops)</span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={numericBudget || 25000}
              onChange={(e) => setUserBudget(Number(e.target.value))}
              className="budget-slider"
            />
          </div>

          {/* Dynamic Budget Feedback Matrix */}
          {numericBudget > 0 ? (
            <div className="budget-stats-grid">
              <div className="budget-stat-box stat-within">
                <div className="stat-icon-title">
                  <CheckCircleIcon size={20} className="text-emerald" />
                  <span className="stat-label">Within Budget</span>
                </div>
                <div className="stat-value">{productsWithin.length} Products</div>
                <div className="stat-hint">
                  Available to buy without exceeding {formatINR(numericBudget)}
                </div>
                {onFilterWithinBudget && productsWithin.length > 0 && (
                  <button
                    className="stat-action-btn"
                    onClick={() => onFilterWithinBudget(true)}
                  >
                    View affordable items ({productsWithin.length}) →
                  </button>
                )}
              </div>

              <div className="budget-stat-box stat-above">
                <div className="stat-icon-title">
                  <AlertCircleIcon size={20} className="text-rose" />
                  <span className="stat-label">Above Budget</span>
                </div>
                <div className="stat-value">{productsAbove.length} Products</div>
                <div className="stat-hint">
                  Flagships or premium gear requiring extra allocation
                </div>
              </div>

              <div className="budget-stat-box stat-highlight">
                <div className="stat-icon-title">
                  <SparklesIcon size={20} className="text-purple" />
                  <span className="stat-label">AI Best Value Match</span>
                </div>
                {bestValueUnderBudget ? (
                  <>
                    <div className="stat-product-name">{bestValueUnderBudget.name}</div>
                    <div className="stat-highlight-price">
                      {formatINR(bestValueUnderBudget.price)}
                      <span className="stat-score-pill">
                        {bestValueUnderBudget.valueScore}/10 Value
                      </span>
                    </div>
                    <div className="stat-hint">
                      Leaves {formatINR(numericBudget - bestValueUnderBudget.price)} in your pocket
                    </div>
                  </>
                ) : (
                  <div className="stat-hint">
                    No catalog items under {formatINR(numericBudget)}. Try increasing to ₹1,000+!
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="budget-empty-hint">
              💡 Tip: Enter an amount (e.g. <strong>₹10,000</strong> or <strong>₹50,000</strong>) to unlock instant budget tags across every single product card!
            </div>
          )}
        </div>
      </div>

      <style>{`
        .budget-section {
          padding: 20px 0 50px;
        }
        .budget-analyzer-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 242, 254, 0.25);
          background: rgba(11, 18, 38, 0.85);
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 640px) {
          .budget-analyzer-card {
            padding: 20px;
          }
        }
        .budget-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }
        .budget-header-left {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          max-width: 600px;
        }
        .budget-icon-ring {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .budget-heading {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 6px 0 4px;
        }
        .budget-subheading {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        .budget-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .budget-input-wrapper {
          display: flex;
          align-items: center;
          background: rgba(7, 11, 24, 0.95);
          border: 1px solid rgba(0, 242, 254, 0.4);
          border-radius: 12px;
          padding: 8px 16px;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.15);
        }
        .rupee-symbol {
          font-size: 1.3rem;
          font-weight: 800;
          color: #00f2fe;
          margin-right: 8px;
        }
        .budget-number-input {
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 700;
          font-family: var(--font-heading);
          outline: none;
          width: 140px;
        }
        .btn-sm {
          padding: 8px 14px;
          font-size: 0.8rem;
        }
        .slider-container {
          margin: 10px 0 28px;
        }
        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748b;
          margin-bottom: 8px;
        }
        .budget-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #1e293b;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }
        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00f2fe, #4facfe);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 15px #00f2fe;
          transition: transform 0.1s;
        }
        .budget-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .budget-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .budget-stats-grid {
            grid-template-columns: 1fr;
          }
        }
        .budget-stat-box {
          border-radius: 14px;
          padding: 18px;
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-within {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.25);
        }
        .stat-above {
          background: rgba(244, 63, 94, 0.06);
          border-color: rgba(244, 63, 94, 0.2);
        }
        .stat-highlight {
          background: rgba(139, 92, 246, 0.08);
          border-color: rgba(139, 92, 246, 0.25);
        }
        .stat-icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .stat-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
        }
        .stat-hint {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.3;
        }
        .stat-action-btn {
          margin-top: 6px;
          background: transparent;
          border: none;
          color: #34d399;
          font-size: 0.82rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          padding: 0;
        }
        .stat-action-btn:hover {
          text-decoration: underline;
        }
        .stat-product-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .stat-highlight-price {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #c084fc;
        }
        .stat-score-pill {
          font-size: 0.72rem;
          background: rgba(192, 132, 252, 0.2);
          border: 1px solid rgba(192, 132, 252, 0.4);
          padding: 2px 7px;
          border-radius: 9999px;
          color: #ffffff;
        }
        .text-emerald { color: #34d399; }
        .text-rose { color: #fb7185; }
        .budget-empty-hint {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          font-size: 0.9rem;
          text-align: center;
        }
      `}</style>
    </section>
  );
}

