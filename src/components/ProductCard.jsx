import React, { useState } from 'react';
import { StarIcon, SparklesIcon, ScaleIcon, CheckCircleIcon, AlertCircleIcon, ArrowRightIcon } from './Icons';
import { formatINR, evaluateBudget } from '../utils/aiAnalyzer';

export function ProductCard({
  product,
  userBudget,
  onAnalyze,
  onToggleCompare,
  isCompared
}) {
  const [imgError, setImgError] = useState(false);

  const budgetInfo = evaluateBudget(product.price, userBudget);
  const discountPercent = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  // Graceful fallback SVG generator if remote image fails or is blocked
  const fallbackImg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%230c1228"/><text x="50%" y="45%" fill="%2300f2fe" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">${encodeURIComponent(product.categoryName)}</text><text x="50%" y="60%" fill="%2394a3b8" font-size="14" font-family="sans-serif" text-anchor="middle">${encodeURIComponent(product.name.slice(0, 24))}...</text></svg>`;

  return (
    <div className="glass-card product-card">
      {/* Top Media Wrap */}
      <div className="product-media">
        <img
          src={imgError ? fallbackImg : product.image}
          alt={product.name}
          className="product-img"
          onError={() => setImgError(true)}
          loading="lazy"
        />

        {/* Category Pill Over Image */}
        <div className="media-overlay-badges">
          <span className="badge badge-purple">{product.categoryName}</span>
          {product.badge && (
            <span className="badge badge-cyan">{product.badge}</span>
          )}
        </div>

        {/* Compare Quick Toggle Pill */}
        <button
          className={`quick-compare-btn ${isCompared ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product);
          }}
          title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
        >
          <ScaleIcon size={14} />
          <span>{isCompared ? 'Compared' : '+ Compare'}</span>
        </button>
      </div>

      {/* Product Content Body */}
      <div className="product-body">
        {/* Rating and Demo Tag */}
        <div className="product-meta-row">
          <div className="rating-pill">
            <StarIcon size={13} className="text-amber" />
            <span className="rating-score">{product.rating}</span>
            <span className="reviews-count">({product.reviewsCount.toLocaleString()})</span>
          </div>
          <span className="badge-demo">Demo Data</span>
        </div>

        {/* Title */}
        <h4 className="product-title" title={product.name}>
          {product.name}
        </h4>

        <p className="product-short-desc">
          {product.shortDescription}
        </p>

        {/* Price & MRP Row */}
        <div className="price-row">
          <div className="price-main">
            <span className="price-current">{formatINR(product.price)}</span>
            {product.mrp && (
              <span className="price-mrp">{formatINR(product.mrp)}</span>
            )}
          </div>
          {discountPercent > 0 && (
            <span className="discount-tag">{discountPercent}% OFF</span>
          )}
        </div>

        {/* AI Scores Meters */}
        <div className="ai-scores-bar">
          <div className="score-item" title="AI assessed hardware quality and reliability">
            <span className="score-name">Quality:</span>
            <div className="score-meter-wrap">
              <div
                className="score-fill fill-cyan"
                style={{ width: `${(product.qualityScore / 10) * 100}%` }}
              ></div>
            </div>
            <span className="score-digit">{product.qualityScore}</span>
          </div>

          <div className="score-item" title="AI calculated value-for-money score">
            <span className="score-name">Value:</span>
            <div className="score-meter-wrap">
              <div
                className="score-fill fill-purple"
                style={{ width: `${(product.valueScore / 10) * 100}%` }}
              ></div>
            </div>
            <span className="score-digit">{product.valueScore}</span>
          </div>
        </div>

        {/* Budget Status Badge (if user has set budget) */}
        {userBudget > 0 && (
          <div className={`budget-status-pill ${budgetInfo.bg}`}>
            {budgetInfo.isWithin ? (
              <>
                <CheckCircleIcon size={14} className="text-emerald" />
                <span>Within Budget (Saves {budgetInfo.diffFormatted})</span>
              </>
            ) : (
              <>
                <AlertCircleIcon size={14} className="text-rose" />
                <span>Exceeds Budget by +{budgetInfo.diffFormatted}</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Card Actions Footer */}
      <div className="product-card-footer">
        <button
          className="btn-cyan-outline btn-card-analyze"
          onClick={() => onAnalyze(product)}
        >
          <SparklesIcon size={15} />
          <span>Analyze with AI</span>
        </button>

        <button
          className="btn-card-more"
          onClick={() => onAnalyze(product)}
          title="View specs & alternatives"
        >
          <ArrowRightIcon size={16} />
        </button>
      </div>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
        }
        .product-media {
          position: relative;
          width: 100%;
          height: 200px;
          background: #0B1124;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .media-overlay-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 2;
        }
        .quick-compare-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(7, 11, 24, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #cbd5e1;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .quick-compare-btn:hover,
        .quick-compare-btn.active {
          background: #8b5cf6;
          border-color: #a855f7;
          color: #ffffff;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
        }
        .product-body {
          padding: 18px 20px 12px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .product-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .rating-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .text-amber {
          color: #f59e0b;
        }
        .rating-score {
          color: #ffffff;
        }
        .reviews-count {
          color: #64748b;
          font-size: 0.75rem;
        }
        .product-title {
          font-size: 1.08rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-short-desc {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.4;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .price-main {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .price-current {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #00f2fe;
        }
        .price-mrp {
          font-size: 0.85rem;
          color: #64748b;
          text-decoration: line-through;
        }
        .discount-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 2px 7px;
          border-radius: 4px;
        }
        .ai-scores-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(0, 0, 0, 0.25);
          padding: 8px 12px;
          border-radius: 10px;
          margin-bottom: 12px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .score-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
        }
        .score-name {
          width: 50px;
          color: #94a3b8;
          font-weight: 600;
        }
        .score-meter-wrap {
          flex-grow: 1;
          height: 5px;
          background: #1e293b;
          border-radius: 9999px;
          overflow: hidden;
        }
        .score-fill {
          height: 100%;
          border-radius: 9999px;
        }
        .fill-cyan {
          background: linear-gradient(90deg, #00f2fe, #4facfe);
        }
        .fill-purple {
          background: linear-gradient(90deg, #a855f7, #ec4899);
        }
        .score-digit {
          font-family: var(--font-heading);
          font-weight: 700;
          color: #ffffff;
          width: 26px;
          text-align: right;
        }
        .budget-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid transparent;
          margin-bottom: 8px;
        }
        .product-card-footer {
          padding: 12px 20px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .btn-card-analyze {
          flex-grow: 1;
        }
        .btn-card-more {
          width: 40px;
          height: 38px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-card-more:hover {
          background: rgba(0, 242, 254, 0.15);
          color: #00f2fe;
          border-color: #00f2fe;
        }
      `}</style>
    </div>
  );
}

