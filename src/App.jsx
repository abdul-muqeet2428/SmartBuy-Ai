import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { BudgetBar } from './components/BudgetBar';
import { ProductGrid } from './components/ProductGrid';
import { AnalysisModal } from './components/AnalysisModal';
import { CompareModal } from './components/CompareModal';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { CloseIcon, WalletIcon, SparklesIcon } from './components/Icons';

import { PRODUCTS, searchProducts } from './data/products';
import { analyzeProduct, formatINR } from './utils/aiAnalyzer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userBudget, setUserBudget] = useState(30000); // Default friendly budget in INR for demo
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyWithinBudget, setOnlyWithinBudget] = useState(false);
  
  // Modal states
  const [analyzedProduct, setAnalyzedProduct] = useState(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [budgetInputDraft, setBudgetInputDraft] = useState('');

  // Pre-seed compare list with 2 popular flagships so comparison works right out of the box!
  const [compareList, setCompareList] = useState([
    PRODUCTS[0], // iPhone 15
    PRODUCTS[1]  // OnePlus 12
  ]);

  // Compute filtered products based on search query and selected category
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    // Filter by search query
    if (searchQuery.trim()) {
      list = searchProducts(searchQuery);
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    return list;
  }, [searchQuery, selectedCategory]);

  // Update analyzed product dynamically if budget changes while modal is open
  useEffect(() => {
    if (analyzedProduct) {
      setAnalyzedProduct(prev => (prev ? analyzeProduct(prev, userBudget) : null));
    }
  }, [userBudget]);

  // Handle Analyzing a product
  const handleAnalyzeProduct = (productOrName) => {
    const analysis = analyzeProduct(productOrName, userBudget);
    if (analysis) {
      setAnalyzedProduct(analysis);
    }
  };

  // Add / Remove from Compare
  const handleToggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 products at a time. Remove one item first!');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const handleRemoveCompare = (productId) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleAddCompare = (product) => {
    setCompareList((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      if (prev.length >= 3) {
        alert('You can compare up to 3 products at a time.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleOpenBudgetModal = () => {
    setBudgetInputDraft(userBudget ? String(userBudget) : '');
    setIsBudgetModalOpen(true);
  };

  const handleSaveBudgetDraft = (e) => {
    e.preventDefault();
    const val = Number(budgetInputDraft);
    setUserBudget(val > 0 ? val : '');
    setIsBudgetModalOpen(false);
  };

  const handleNavigateSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setOnlyWithinBudget(false);
  };

  return (
    <div className="app-container">
      {/* Background Animated Neon Orbs */}
      <div className="ambient-glow-wrap">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
        <div className="glow-orb-3"></div>
      </div>

      {/* Cyber Grid Lines */}
      <div className="cyber-grid-overlay"></div>

      {/* Navigation Bar */}
      <Navbar
        userBudget={userBudget}
        onOpenBudgetModal={handleOpenBudgetModal}
        compareList={compareList}
        onOpenCompareModal={() => setIsCompareOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="main-content">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          userBudget={userBudget}
          setUserBudget={setUserBudget}
          onAnalyzeProduct={handleAnalyzeProduct}
        />

        {/* 8 Product Categories Section */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            handleNavigateSection('trending');
          }}
        />

        {/* Dedicated Budget Analyzer Section */}
        <BudgetBar
          userBudget={userBudget}
          setUserBudget={setUserBudget}
          onFilterWithinBudget={() => handleNavigateSection('trending')}
        />

        {/* Trending & Filtered Products Grid */}
        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          userBudget={userBudget}
          searchQuery={searchQuery}
          onAnalyzeProduct={handleAnalyzeProduct}
          onToggleCompare={handleToggleCompare}
          compareList={compareList}
          onResetFilters={handleResetFilters}
        />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Why Choose SmartBuy AI Section */}
        <WhyChooseUs />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Analysis Modal */}
      {analyzedProduct && (
        <AnalysisModal
          key={analyzedProduct.id}
          analyzedProduct={analyzedProduct}
          onClose={() => setAnalyzedProduct(null)}
          onSelectProduct={(alt) => {
            setAnalyzedProduct(analyzeProduct(alt, userBudget));
          }}
          onToggleCompare={handleToggleCompare}
          isCompared={compareList.some((p) => p.id === analyzedProduct.id)}
        />
      )}

      {/* Comparison Modal */}
      {isCompareOpen && (
        <CompareModal
          compareList={compareList}
          onClose={() => setIsCompareOpen(false)}
          onRemoveProduct={handleRemoveCompare}
          onAddProduct={handleAddCompare}
          userBudget={userBudget}
        />
      )}

      {/* Quick Budget Setter Modal */}
      {isBudgetModalOpen && (
        <div className="modal-overlay" onClick={() => setIsBudgetModalOpen(false)}>
          <div className="modal-container budget-quick-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <div className="modal-ai-tag">
                <WalletIcon size={16} className="text-cyan" />
                <span>Adjust Shopping Budget</span>
              </div>
              <button className="modal-close-btn" onClick={() => setIsBudgetModalOpen(false)}>
                <CloseIcon size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveBudgetDraft} className="budget-modal-body">
              <p className="budget-modal-prompt">
                Enter your total shopping budget in Indian Rupees (₹). SmartBuy AI will immediately recalculate whether products are within budget and display exact savings:
              </p>

              <div className="budget-modal-input-wrap">
                <span className="currency-prefix" style={{ fontSize: '1.4rem' }}>₹</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  placeholder="e.g. 25000"
                  value={budgetInputDraft}
                  onChange={(e) => setBudgetInputDraft(e.target.value)}
                  className="hero-budget-input"
                  style={{ fontSize: '1.4rem' }}
                  autoFocus
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="modal-presets-grid">
                {[1500, 5000, 15000, 30000, 75000, 100000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="preset-chip"
                    onClick={() => setBudgetInputDraft(String(amt))}
                  >
                    {formatINR(amt)}
                  </button>
                ))}
              </div>

              <div className="budget-modal-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setUserBudget('');
                    setIsBudgetModalOpen(false);
                  }}
                >
                  Clear Budget
                </button>
                <button type="submit" className="btn-primary">
                  Save & Apply Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .budget-quick-modal {
          max-width: 480px;
        }
        .budget-modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .budget-modal-prompt {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }
        .budget-modal-input-wrap {
          display: flex;
          align-items: center;
          background: rgba(7, 11, 24, 0.95);
          border: 1px solid #00f2fe;
          border-radius: 14px;
          padding: 8px 16px;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
        }
        .modal-presets-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .budget-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
