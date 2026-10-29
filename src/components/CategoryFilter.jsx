import React from 'react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { CategoryIconRenderer, SparklesIcon } from './Icons';

export function CategoryFilter({ selectedCategory, onSelectCategory }) {
  // Compute product count per category
  const getCount = (catId) => {
    return PRODUCTS.filter((p) => p.category === catId).length;
  };

  return (
    <section id="categories" className="categories-section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="header-badge">
            <SparklesIcon size={14} />
            <span>Intelligent Taxonomy</span>
          </div>
          <h2 className="section-title">
            Explore Curated <span className="gradient-text-cyan">Product Categories</span>
          </h2>
          <p className="section-subtitle">
            Browse through 8 essential categories with AI-calculated value indexes and spec comparisons.
          </p>
        </div>

        {/* Categories Bar / Tabs for mobile & quick toggle */}
        <div className="categories-quick-tabs">
          <button
            className={`quick-tab ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`quick-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.name} ({getCount(cat.id)})
            </button>
          ))}
        </div>

        {/* 8 Glassmorphism Category Cards Grid */}
        <div className="grid-categories">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = getCount(cat.id);

            return (
              <div
                key={cat.id}
                className={`glass-card category-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
                role="button"
                tabIndex={0}
              >
                <div className="category-top">
                  <div className={`category-icon-box ${isSelected ? 'icon-active' : ''}`}>
                    <CategoryIconRenderer name={cat.icon} size={24} />
                  </div>
                  <span className="badge badge-purple">{cat.badge}</span>
                </div>

                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>

                <div className="category-footer">
                  <span className="product-count-text">{count} Products</span>
                  <span className="view-action-text">
                    {isSelected ? 'Active Filter ✓' : 'Explore →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .categories-section {
          padding: 60px 0;
          position: relative;
        }
        .section-header {
          text-align: center;
          margin-bottom: 36px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c084fc;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
        .section-title {
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        @media (max-width: 640px) {
          .section-title {
            font-size: 1.8rem;
          }
        }
        .section-subtitle {
          color: #94a3b8;
          font-size: 1.05rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .categories-quick-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 16px;
          margin-bottom: 24px;
          scrollbar-width: none;
        }
        .categories-quick-tabs::-webkit-scrollbar {
          display: none;
        }
        .quick-tab {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .quick-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }
        .quick-tab.active {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(79, 172, 254, 0.1));
          border-color: #00f2fe;
          color: #00f2fe;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
        }
        .category-card {
          padding: 22px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
        }
        .category-card.selected {
          border-color: #00f2fe;
          background: rgba(14, 28, 60, 0.85);
          box-shadow: 0 0 25px rgba(0, 242, 254, 0.3), inset 0 0 15px rgba(0, 242, 254, 0.1);
        }
        .category-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .category-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00f2fe;
          transition: all 0.3s ease;
        }
        .category-card:hover .category-icon-box,
        .category-icon-box.icon-active {
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(139, 92, 246, 0.2));
          border-color: #00f2fe;
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
        }
        .category-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .category-desc {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.4;
          margin-bottom: 14px;
          flex-grow: 1;
        }
        .category-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 12px;
          font-size: 0.8rem;
        }
        .product-count-text {
          color: #64748b;
          font-weight: 600;
        }
        .view-action-text {
          color: #00f2fe;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}

