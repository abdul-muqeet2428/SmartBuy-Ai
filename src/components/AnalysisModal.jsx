import React, { useState } from 'react';
import {
  CloseIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ExternalLinkIcon,
  ScaleIcon,
  ZapIcon
} from './Icons';
import { formatINR } from '../utils/aiAnalyzer';

export function AnalysisModal({
  analyzedProduct,
  onClose,
  onSelectProduct,
  onToggleCompare,
  isCompared
}) {
  const [imgError, setImgError] = useState(false);

  if (!analyzedProduct) return null;

  const {
    name,
    categoryName,
    price,
    mrp,
    rating,
    reviewsCount,
    qualityScore,
    valueScore,
    badge,
    image,
    shortDescription,
    specs,
    pros,
    cons,
    aiVerdict,
    budgetEvaluation,
    resolvedAlternatives,
    shoppingLinks,
    valueVerdict
  } = analyzedProduct;

  const fallbackImg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%230c1228"/><text x="50%" y="50%" fill="%2300f2fe" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">${encodeURIComponent(name.slice(0, 20))}</text></svg>`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-left">
            <div className="modal-ai-tag">
              <SparklesIcon size={14} className="text-cyan" />
              <span>SmartBuy AI • In-Depth Specification & Budget Audit</span>
            </div>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Analysis"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="modal-demo-banner">
          <span className="badge-demo">Academic Demo Mode</span>
          <span>All technical specifications, quality scores, and prices are simulated local sample data for college evaluation.</span>
        </div>

        <div className="modal-scroll-body">
          {/* Main Product Overview Hero */}
          <div className="analysis-hero-grid">
            <div className="analysis-media-box">
              <img
                src={imgError ? fallbackImg : image}
                alt={name}
                className="analysis-img"
                onError={() => setImgError(true)}
              />
              <div className="analysis-media-badges">
                <span className="badge badge-purple">{categoryName}</span>
                {badge && <span className="badge badge-cyan">{badge}</span>}
              </div>
            </div>

            <div className="analysis-details-box">
              <div className="title-and-rating">
                <h2 className="analysis-title">{name}</h2>
                <div className="analysis-rating-row">
                  <div className="rating-pill">
                    <StarIcon size={14} className="text-amber" />
                    <span className="rating-score">{rating}</span>
                    <span className="reviews-count">({reviewsCount.toLocaleString()} reviews)</span>
                  </div>
                  <span className="ai-verdict-badge">{valueVerdict}</span>
                </div>
              </div>

              {/* Price & Discount Display */}
              <div className="analysis-price-box">
                <div className="price-tag-large">
                  <span className="main-price">{formatINR(price)}</span>
                  {mrp && <span className="mrp-price">{formatINR(mrp)}</span>}
                </div>
                {mrp && (
                  <span className="save-badge">
                    Save {formatINR(mrp - price)} ({Math.round(((mrp - price) / mrp) * 100)}% OFF)
                  </span>
                )}
              </div>

              {/* AI Scores Radar / Meters */}
              <div className="analysis-meters-card">
                <div className="meter-col">
                  <div className="meter-label-row">
                    <span className="meter-title">Hardware Quality:</span>
                    <span className="meter-val text-cyan">{qualityScore} / 10</span>
                  </div>
                  <div className="meter-track">
                    <div
                      className="meter-bar bg-gradient-cyan"
                      style={{ width: `${(qualityScore / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="meter-sub">Build durability, components & benchmarks</span>
                </div>

                <div className="meter-col">
                  <div className="meter-label-row">
                    <span className="meter-title">Value for Money:</span>
                    <span className="meter-val text-purple">{valueScore} / 10</span>
                  </div>
                  <div className="meter-track">
                    <div
                      className="meter-bar bg-gradient-purple"
                      style={{ width: `${(valueScore / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="meter-sub">Feature yield per Indian Rupee spent</span>
                </div>
              </div>

              <p className="analysis-summary-text">{shortDescription}</p>

              {/* Quick Action Button */}
              <div className="analysis-top-actions">
                <button
                  className={`btn-secondary ${isCompared ? 'active' : ''}`}
                  onClick={() => onToggleCompare(analyzedProduct)}
                >
                  <ScaleIcon size={16} />
                  <span>{isCompared ? 'Added to Compare ✓' : '+ Add to Compare'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Budget Analyzer Result */}
          <div className="analysis-budget-card">
            <div className="budget-eval-header">
              <div className="eval-status-indicator">
                {budgetEvaluation.isWithin === true && (
                  <>
                    <CheckCircleIcon size={24} className="text-emerald" />
                    <div>
                      <h4 className="eval-status-title text-emerald">Within Budget Limit</h4>
                      <p className="eval-status-desc">{budgetEvaluation.message}</p>
                    </div>
                  </>
                )}
                {budgetEvaluation.isWithin === false && (
                  <>
                    <AlertCircleIcon size={24} className="text-rose" />
                    <div>
                      <h4 className="eval-status-title text-rose">Exceeds Budget Limit</h4>
                      <p className="eval-status-desc">{budgetEvaluation.message}</p>
                    </div>
                  </>
                )}
                {budgetEvaluation.isWithin === null && (
                  <>
                    <ZapIcon size={24} className="text-cyan" />
                    <div>
                      <h4 className="eval-status-title text-cyan">Budget Analysis Ready</h4>
                      <p className="eval-status-desc">{budgetEvaluation.message}</p>
                    </div>
                  </>
                )}
              </div>

              {budgetEvaluation.isWithin !== null && (
                <div className="budget-diff-pill">
                  <span className="diff-title">
                    {budgetEvaluation.isWithin ? 'Savings Kept' : 'Extra Amount Needed'}
                  </span>
                  <span className={`diff-amount ${budgetEvaluation.isWithin ? 'text-emerald' : 'text-rose'}`}>
                    {budgetEvaluation.diffFormatted}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Hardware Specs Table */}
          {specs && Object.keys(specs).length > 0 && (
            <div className="analysis-section-block">
              <h3 className="section-block-title">Key Specifications & Technical Features</h3>
              <div className="specs-table-grid">
                {Object.entries(specs).map(([key, val]) => (
                  <div key={key} className="spec-row-item">
                    <span className="spec-key">{key}</span>
                    <span className="spec-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Pros, Cons & AI Verdict */}
          <div className="analysis-section-block">
            <h3 className="section-block-title">AI Purchase Assessment: Pros, Cons & Verdict</h3>
            <div className="pros-cons-grid">
              <div className="pros-card">
                <h4 className="pros-title text-emerald">
                  <CheckCircleIcon size={16} /> Why You Should Buy This
                </h4>
                <ul className="bullet-list">
                  {pros && pros.map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div className="cons-card">
                <h4 className="cons-title text-rose">
                  <AlertCircleIcon size={16} /> Drawbacks to Consider
                </h4>
                <ul className="bullet-list">
                  {cons && cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Summary Verdict Callout */}
            <div className="ai-verdict-box">
              <div className="verdict-icon-box">
                <SparklesIcon size={20} className="text-cyan" />
              </div>
              <div className="verdict-text-wrap">
                <h4 className="verdict-heading">SmartBuy AI Purchase Verdict</h4>
                <p className="verdict-paragraph">{aiVerdict}</p>
              </div>
            </div>
          </div>

          {/* Section 5: Smarter / Cheaper Alternative Recommendations */}
          {resolvedAlternatives && resolvedAlternatives.length > 0 && (
            <div className="analysis-section-block">
              <div className="alternatives-header">
                <div>
                  <h3 className="section-block-title" style={{ marginBottom: '4px' }}>
                    Smarter & Cheaper Recommended Alternatives
                  </h3>
                  <p className="alternatives-subtitle">
                    Carefully chosen alternatives providing better value, budget fits, or spec perks.
                  </p>
                </div>
              </div>

              <div className="alternatives-grid">
                {resolvedAlternatives.map((alt) => (
                  <div key={alt.id} className="glass-card alternative-item-card">
                    <div className="alt-img-wrap">
                      <img src={alt.image} alt={alt.name} className="alt-img" />
                      <span className="alt-price-pill">{formatINR(alt.price)}</span>
                    </div>

                    <div className="alt-body">
                      <span className="badge badge-purple" style={{ alignSelf: 'flex-start' }}>
                        {alt.categoryName}
                      </span>
                      <h4 className="alt-title">{alt.name}</h4>
                      
                      {/* Reason Pill */}
                      <div className="alt-reason-box">
                        <span className="alt-reason-text">💡 {alt.reason}</span>
                      </div>

                      {/* Main specs snippet */}
                      <div className="alt-specs-snippet">
                        {Object.entries(alt.specs || {}).slice(0, 2).map(([k, v]) => (
                          <span key={k} className="alt-spec-chip">
                            <strong>{k}:</strong> {v}
                          </span>
                        ))}
                      </div>

                      <div className="alt-actions-row">
                        <button
                          className="btn-cyan-outline btn-sm"
                          onClick={() => onSelectProduct(alt)}
                        >
                          Analyze This Alternative →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 6: External Live Shopping Search Links */}
          <div className="analysis-section-block">
            <h3 className="section-block-title">Search & Verify on Live Marketplaces</h3>
            <p className="shopping-links-desc">
              SmartBuy AI provides direct query search buttons for leading Indian e-commerce platforms. Click below to verify real-time market prices:
            </p>

            <div className="marketplace-buttons-grid">
              {shoppingLinks && Object.entries(shoppingLinks).map(([key, link]) => (
                <a
                  key={key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="marketplace-btn"
                  style={{ '--brand-color': link.color }}
                >
                  <span className="market-brand-name">{link.name}</span>
                  <ExternalLinkIcon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(11, 17, 36, 0.95);
        }
        .modal-ai-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #00f2fe;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .modal-close-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close-btn:hover {
          background: rgba(244, 63, 94, 0.2);
          color: #fb7185;
          border-color: #f43f5e;
        }
        .modal-demo-banner {
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 10px 26px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .modal-scroll-body {
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .analysis-hero-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 26px;
        }
        @media (max-width: 768px) {
          .analysis-hero-grid {
            grid-template-columns: 1fr;
          }
        }
        .analysis-media-box {
          position: relative;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          background: #070B18;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .analysis-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .analysis-media-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .analysis-details-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .analysis-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .analysis-rating-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .ai-verdict-badge {
          background: rgba(0, 242, 254, 0.12);
          border: 1px solid rgba(0, 242, 254, 0.3);
          color: #00f2fe;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 9999px;
        }
        .analysis-price-box {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .price-tag-large {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .main-price {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #00f2fe;
        }
        .mrp-price {
          font-size: 1.1rem;
          color: #64748b;
          text-decoration: line-through;
        }
        .save-badge {
          font-size: 0.82rem;
          font-weight: 700;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .analysis-meters-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: rgba(7, 11, 24, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 14px 18px;
          margin-bottom: 16px;
        }
        @media (max-width: 600px) {
          .analysis-meters-card {
            grid-template-columns: 1fr;
          }
        }
        .meter-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .meter-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .meter-title {
          color: #cbd5e1;
        }
        .meter-val {
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .meter-track {
          width: 100%;
          height: 8px;
          background: #1e293b;
          border-radius: 9999px;
          overflow: hidden;
        }
        .meter-bar {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s ease;
        }
        .bg-gradient-cyan {
          background: linear-gradient(90deg, #00f2fe, #4facfe);
        }
        .bg-gradient-purple {
          background: linear-gradient(90deg, #a855f7, #ec4899);
        }
        .meter-sub {
          font-size: 0.72rem;
          color: #64748b;
        }
        .analysis-summary-text {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .analysis-top-actions {
          display: flex;
          gap: 10px;
        }
        .analysis-budget-card {
          background: rgba(14, 22, 45, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 18px 24px;
        }
        .budget-eval-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }
        .eval-status-indicator {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .eval-status-title {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .eval-status-desc {
          font-size: 0.85rem;
          color: #94a3b8;
        }
        .budget-diff-pill {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .diff-title {
          font-size: 0.72rem;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 600;
        }
        .diff-amount {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
        }
        .analysis-section-block {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
        }
        .section-block-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .specs-table-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }
        .spec-row-item {
          background: rgba(7, 11, 24, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .spec-key {
          font-size: 0.76rem;
          color: #00f2fe;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .spec-value {
          font-size: 0.9rem;
          color: #e2e8f0;
          font-weight: 500;
        }
        .pros-cons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .pros-cons-grid {
            grid-template-columns: 1fr;
          }
        }
        .pros-card, .cons-card {
          border-radius: 14px;
          padding: 18px;
        }
        .pros-card {
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .cons-card {
          background: rgba(244, 63, 94, 0.06);
          border: 1px solid rgba(244, 63, 94, 0.2);
        }
        .pros-title, .cons-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.4;
        }
        .bullet-list li {
          position: relative;
          padding-left: 14px;
        }
        .bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #94a3b8;
        }
        .ai-verdict-box {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(139, 92, 246, 0.08));
          border: 1px solid rgba(0, 242, 254, 0.25);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .verdict-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .verdict-heading {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .verdict-paragraph {
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.5;
        }
        .alternatives-subtitle {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-bottom: 18px;
        }
        .alternatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .alternative-item-card {
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .alt-img-wrap {
          position: relative;
          height: 140px;
          border-radius: 10px;
          overflow: hidden;
          background: #070B18;
        }
        .alt-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .alt-price-pill {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(7, 11, 24, 0.85);
          color: #00f2fe;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.88rem;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(0, 242, 254, 0.3);
        }
        .alt-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }
        .alt-reason-box {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 8px;
          padding: 8px 10px;
        }
        .alt-reason-text {
          font-size: 0.78rem;
          color: #d8b4fe;
          line-height: 1.3;
          display: block;
        }
        .alt-specs-snippet {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .alt-spec-chip {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        .alt-spec-chip strong {
          color: #cbd5e1;
        }
        .alt-actions-row {
          margin-top: auto;
          padding-top: 8px;
        }
        .shopping-links-desc {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-bottom: 16px;
        }
        .marketplace-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
        }
        .marketplace-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .marketplace-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--brand-color);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
          color: var(--brand-color);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

