import React, { useState } from 'react';
import {
  CloseIcon,
  ScaleIcon,
  SparklesIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ExternalLinkIcon
} from './Icons';
import { PRODUCTS } from '../data/products';
import { formatINR, evaluateBudget, compareProducts } from '../utils/aiAnalyzer';

export function CompareModal({
  compareList,
  onClose,
  onRemoveProduct,
  onAddProduct,
  userBudget
}) {
  const [selectedToAdd, setSelectedToAdd] = useState('');

  // If fewer than 2 products selected, user can pick from dropdown
  const handleAdd = (e) => {
    e.preventDefault();
    if (selectedToAdd) {
      const found = PRODUCTS.find((p) => p.id === selectedToAdd);
      if (found) {
        onAddProduct(found);
        setSelectedToAdd('');
      }
    }
  };

  // Perform AI comparison calculation if at least 2 items
  const comparisonResult = compareList.length >= 2
    ? compareProducts(compareList.map((p) => p.id), userBudget)
    : null;

  // Compile list of unique spec keys across all compared products
  const allSpecKeys = Array.from(
    new Set(
      compareList.flatMap((p) => (p.specs ? Object.keys(p.specs) : []))
    )
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container compare-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-bar">
          <div className="compare-header-left">
            <div className="compare-icon-badge">
              <ScaleIcon size={18} className="text-cyan" />
            </div>
            <div>
              <h3 className="modal-title">AI Head-to-Head Comparison</h3>
              <p className="modal-sub">Compare specs, build quality, value ratings, and budget suitability side-by-side.</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Picker Tool Bar (if less than 3 products) */}
        {compareList.length < 3 && (
          <div className="compare-add-bar">
            <span className="add-bar-label">Add another item to compare:</span>
            <select
              value={selectedToAdd}
              onChange={(e) => setSelectedToAdd(e.target.value)}
              className="compare-picker-select"
            >
              <option value="">-- Choose a product from catalog --</option>
              {PRODUCTS.filter((p) => !compareList.some((cp) => cp.id === p.id)).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({formatINR(p.price)})
                </option>
              ))}
            </select>
            <button
              className="btn-cyan-outline btn-sm"
              onClick={handleAdd}
              disabled={!selectedToAdd}
            >
              + Add to Comparison
            </button>
          </div>
        )}

        <div className="compare-scroll-body">
          {compareList.length >= 2 ? (
            <>
              {/* AI Winner Banner */}
              {comparisonResult && (
                <div className="compare-winner-banner">
                  <div className="winner-crown-box">
                    <SparklesIcon size={22} className="text-amber" />
                  </div>
                  <div>
                    <span className="badge badge-cyan" style={{ marginBottom: '4px' }}>
                      AI Smart Choice Winner 🏆
                    </span>
                    <h4 className="winner-title">
                      {comparisonResult.products.find((p) => p.id === comparisonResult.winnerId)?.name}
                    </h4>
                    <p className="winner-reason">{comparisonResult.winnerReason}</p>
                  </div>
                </div>
              )}

              {/* Side-by-Side Comparison Table */}
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="feature-col-th">Product Details</th>
                      {compareList.map((product) => {
                        const isWinner = comparisonResult?.winnerId === product.id;
                        return (
                          <th key={product.id} className={`product-col-th ${isWinner ? 'col-winner' : ''}`}>
                            <div className="table-product-card">
                              <button
                                className="remove-col-btn"
                                onClick={() => onRemoveProduct(product.id)}
                                title="Remove from comparison"
                              >
                                ×
                              </button>
                              <div className="table-img-wrap">
                                <img src={product.image} alt={product.name} />
                              </div>
                              <span className="badge badge-purple" style={{ alignSelf: 'center', margin: '6px 0' }}>
                                {product.categoryName}
                              </span>
                              <h4 className="table-product-title">{product.name}</h4>
                              <div className="table-price">{formatINR(product.price)}</div>
                              <span className="badge-demo">Demo Data</span>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody>
                    {/* Budget Suitability Row */}
                    <tr>
                      <td className="row-label-td">Budget Match</td>
                      {compareList.map((product) => {
                        const budgetInfo = evaluateBudget(product.price, userBudget);
                        return (
                          <td key={product.id} className="row-val-td">
                            {budgetInfo.isWithin === true && (
                              <span className="badge badge-success">
                                <CheckCircleIcon size={12} /> Within Budget ({budgetInfo.diffFormatted} saved)
                              </span>
                            )}
                            {budgetInfo.isWithin === false && (
                              <span className="badge badge-danger">
                                <AlertCircleIcon size={12} /> Over Budget (+{budgetInfo.diffFormatted})
                              </span>
                            )}
                            {budgetInfo.isWithin === null && (
                              <span className="text-muted" style={{ fontSize: '0.8rem' }}>Set budget to verify</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Value for Money Score */}
                    <tr>
                      <td className="row-label-td">Value for Money Score</td>
                      {compareList.map((product) => (
                        <td key={product.id} className="row-val-td">
                          <span className="score-badge score-purple">
                            {product.valueScore} / 10
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Hardware Quality Score */}
                    <tr>
                      <td className="row-label-td">Quality Assessment</td>
                      {compareList.map((product) => (
                        <td key={product.id} className="row-val-td">
                          <span className="score-badge score-cyan">
                            {product.qualityScore} / 10
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* User Rating */}
                    <tr>
                      <td className="row-label-td">Customer Rating</td>
                      {compareList.map((product) => (
                        <td key={product.id} className="row-val-td">
                          ⭐ {product.rating} / 5 ({product.reviewsCount?.toLocaleString()} reviews)
                        </td>
                      ))}
                    </tr>

                    {/* Specs Comparison Rows */}
                    {allSpecKeys.map((specKey) => (
                      <tr key={specKey}>
                        <td className="row-label-td">{specKey}</td>
                        {compareList.map((product) => (
                          <td key={product.id} className="row-val-td spec-font">
                            {product.specs?.[specKey] || '—'}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Direct External Search Links */}
                    <tr>
                      <td className="row-label-td">Shopping Search</td>
                      {compareList.map((product) => (
                        <td key={product.id} className="row-val-td">
                          <a
                            href={`https://www.amazon.in/s?k=${encodeURIComponent(product.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cyan-outline btn-sm"
                            style={{ display: 'inline-flex', width: '100%' }}
                          >
                            <span>Search on Retailers</span>
                            <ExternalLinkIcon size={14} />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="compare-empty-state">
              <ScaleIcon size={48} className="text-cyan" />
              <h3>Select At Least 2 Products to Compare</h3>
              <p>
                You currently have {compareList.length} item selected. Pick another product from the dropdown above or click the "+ Compare" button on any product card in the catalog!
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .compare-modal-container {
          max-width: 980px;
        }
        .compare-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .compare-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }
        .modal-sub {
          font-size: 0.82rem;
          color: #94a3b8;
        }
        .compare-add-bar {
          background: rgba(7, 11, 24, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .add-bar-label {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 600;
        }
        .compare-picker-select {
          background: #0B1124;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          outline: none;
          max-width: 320px;
        }
        .compare-scroll-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .compare-winner-banner {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(139, 92, 246, 0.12));
          border: 1px solid rgba(0, 242, 254, 0.4);
          box-shadow: 0 0 25px rgba(0, 242, 254, 0.15);
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .winner-crown-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .winner-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }
        .winner-reason {
          font-size: 0.85rem;
          color: #cbd5e1;
        }
        .comparison-table-wrapper {
          overflow-x: auto;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: rgba(7, 11, 24, 0.6);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .feature-col-th {
          width: 220px;
          padding: 16px;
          background: rgba(14, 22, 45, 0.9);
          font-size: 0.88rem;
          color: #94a3b8;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .product-col-th {
          padding: 16px;
          background: rgba(14, 22, 45, 0.6);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          vertical-align: top;
          min-width: 240px;
        }
        .col-winner {
          background: rgba(0, 242, 254, 0.04);
          border-top: 2px solid #00f2fe;
        }
        .table-product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .remove-col-btn {
          position: absolute;
          top: -6px;
          right: -6px;
          background: rgba(244, 63, 94, 0.2);
          border: 1px solid #f43f5e;
          color: #ffffff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .remove-col-btn:hover {
          background: #f43f5e;
        }
        .table-img-wrap {
          width: 120px;
          height: 90px;
          border-radius: 10px;
          overflow: hidden;
          background: #070B18;
          margin-bottom: 8px;
        }
        .table-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .table-product-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .table-price {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #00f2fe;
          margin-bottom: 4px;
        }
        .row-label-td {
          padding: 12px 16px;
          background: rgba(14, 22, 45, 0.8);
          font-size: 0.82rem;
          font-weight: 600;
          color: #cbd5e1;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .row-val-td {
          padding: 12px 16px;
          font-size: 0.85rem;
          color: #e2e8f0;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .spec-font {
          font-size: 0.82rem;
          line-height: 1.4;
        }
        .score-badge {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 0.85rem;
        }
        .score-cyan {
          background: rgba(0, 242, 254, 0.15);
          color: #00f2fe;
          border: 1px solid rgba(0, 242, 254, 0.3);
        }
        .score-purple {
          background: rgba(139, 92, 246, 0.15);
          color: #c084fc;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }
        .compare-empty-state {
          padding: 60px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #94a3b8;
        }
        .compare-empty-state h3 {
          font-size: 1.3rem;
          color: #ffffff;
        }
        .compare-empty-state p {
          max-width: 500px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

