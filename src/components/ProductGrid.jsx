import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SparklesIcon, SearchIcon } from './Icons';

export function ProductGrid({
  products,
  selectedCategory,
  userBudget,
  searchQuery,
  onAnalyzeProduct,
  onToggleCompare,
  compareList,
  onResetFilters,
  onlyWithinBudget: controlledOnlyWithinBudget,
  setOnlyWithinBudget: controlledSetOnlyWithinBudget
}) {
  const [sortBy, setSortBy] = useState('value'); // 'value', 'quality', 'price-asc', 'price-desc', 'rating'
  const [internalOnlyWithinBudget, setInternalOnlyWithinBudget] = useState(false);

  const onlyWithinBudget = controlledOnlyWithinBudget !== undefined ? controlledOnlyWithinBudget : internalOnlyWithinBudget;
  const setOnlyWithinBudget = controlledSetOnlyWithinBudget || setInternalOnlyWithinBudget;

  // Filter by budget checkbox if enabled
  let displayed = [...products];

  if (onlyWithinBudget && userBudget > 0) {
    displayed = displayed.filter((p) => p.price <= userBudget);
  }

  // Sort logic
  displayed.sort((a, b) => {
    if (sortBy === 'value') return b.valueScore - a.valueScore;
    if (sortBy === 'quality') return b.qualityScore - a.qualityScore;
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="trending" className="products-grid-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="grid-controls-header">
          <div className="grid-title-wrap">
            <div className="header-badge">
              <SparklesIcon size={14} />
              <span>Live Catalog Engine</span>
            </div>
            <h2 className="grid-heading">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Trending & Top Value Products'}
            </h2>
            <p className="grid-subtitle">
              Showing {displayed.length} AI-evaluated {displayed.length === 1 ? 'item' : 'items'}
              {selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}
              {userBudget > 0 && onlyWithinBudget ? ` within ₹${userBudget.toLocaleString('en-IN')}` : ''}
              <span className="badge-demo" style={{ marginLeft: '10px' }}>Simulated Demo Prices (₹)</span>
            </p>
          </div>

          {/* Sorter & Filters Controls Bar */}
          <div className="grid-actions-toolbar">
            {userBudget > 0 && (
              <label className="budget-filter-toggle">
                <input
                  type="checkbox"
                  checked={onlyWithinBudget}
                  onChange={(e) => setOnlyWithinBudget(e.target.checked)}
                />
                <span className="toggle-text">Only Within Budget</span>
              </label>
            )}

            <div className="sort-dropdown-wrap">
              <span className="sort-label">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="value">Highest Value Score</option>
                <option value="quality">Hardware Quality</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {displayed.length > 0 ? (
          <div className="grid-products">
            {displayed.map((product) => {
              const isCompared = compareList.some((p) => p.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  userBudget={userBudget}
                  onAnalyze={onAnalyzeProduct}
                  onToggleCompare={onToggleCompare}
                  isCompared={isCompared}
                />
              );
            })}
          </div>
        ) : (
          /* Empty / Not Found State with Helpful Guidance */
          <div className="glass-card not-found-card">
            <div className="not-found-icon-wrap">
              <SearchIcon size={36} className="text-cyan" />
            </div>
            <h3 className="not-found-title">No Matching Products Found</h3>
            <p className="not-found-desc">
              {searchQuery
                ? `We couldn't find an exact catalog item for "${searchQuery}". But don't worry! Click "Analyze Product" above and our AI will dynamically evaluate it!`
                : 'No products match your current budget or category filter criteria.'}
            </p>

            <div className="not-found-actions">
              {searchQuery && (
                <button
                  className="btn-primary"
                  onClick={() => onAnalyzeProduct(searchQuery)}
                >
                  <SparklesIcon size={16} />
                  <span>Generate AI Analysis for "{searchQuery}"</span>
                </button>
              )}

              <button
                className="btn-secondary"
                onClick={onResetFilters}
              >
                Reset All Filters & View All
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .products-grid-section {
          padding: 40px 0 60px;
        }
        .grid-controls-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .grid-title-wrap {
          max-width: 650px;
        }
        .grid-heading {
          font-size: 2rem;
          font-weight: 700;
          margin: 6px 0 4px;
        }
        @media (max-width: 640px) {
          .grid-heading {
            font-size: 1.6rem;
          }
        }
        .grid-subtitle {
          color: #94a3b8;
          font-size: 0.95rem;
        }
        .grid-actions-toolbar {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .budget-filter-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 9999px;
          cursor: pointer;
          user-select: none;
        }
        .budget-filter-toggle input {
          accent-color: #10b981;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .sort-dropdown-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 6px 14px;
        }
        .sort-label {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 600;
        }
        .sort-select {
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 600;
          font-family: var(--font-body);
          outline: none;
          cursor: pointer;
        }
        .sort-select option {
          background: #0B1124;
          color: #ffffff;
        }
        .not-found-card {
          padding: 60px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 640px;
          margin: 40px auto;
        }
        .not-found-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .not-found-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .not-found-desc {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 26px;
        }
        .not-found-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}

