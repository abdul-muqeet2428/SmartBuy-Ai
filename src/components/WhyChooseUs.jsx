import React from 'react';
import { SparklesIcon, CheckCircleIcon, CloseIcon, ScaleIcon } from './Icons';

export function WhyChooseUs() {
  const comparisonItems = [
    {
      feature: 'Unbiased Spec Evaluation',
      traditional: 'Biased sponsored ads & affiliate priority',
      smartbuy: '100% objective spec & hardware audit'
    },
    {
      feature: 'Budget Guardrails (₹)',
      traditional: 'Push toward more expensive upsells',
      smartbuy: 'Warns when over-budget & calculates savings'
    },
    {
      feature: 'Alternative Recommendations',
      traditional: 'Limited to in-stock store inventory',
      smartbuy: 'Surfaces 80%-value gear saving up to 50%'
    },
    {
      feature: 'No Sign-in or Trackers',
      traditional: 'Forced logins, cookies & targeted ads',
      smartbuy: 'Local browser-first privacy with instant analysis'
    },
    {
      feature: 'Multi-Store Search Redirection',
      traditional: 'Locked into a single retailer',
      smartbuy: 'Compare across Amazon, Flipkart, Myntra & Croma'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="header-badge">
            <SparklesIcon size={14} />
            <span>The Competitive Edge</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text-cyan">SmartBuy AI</span>?
          </h2>
          <p className="section-subtitle">
            See how an intelligent decision-engine compares to traditional e-commerce browsing.
          </p>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="glass-card matrix-card">
          <div className="matrix-table-wrap">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th className="matrix-th feature-head">Comparison Dimension</th>
                  <th className="matrix-th traditional-head">Traditional Shopping</th>
                  <th className="matrix-th smartbuy-head">SmartBuy AI Assistant</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="matrix-row">
                    <td className="matrix-td font-semibold">{item.feature}</td>
                    <td className="matrix-td text-muted-dim">
                      <div className="status-bullet">
                        <span className="dot-red">✕</span>
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="matrix-td text-cyan-bright">
                      <div className="status-bullet">
                        <span className="dot-green">✓</span>
                        <strong className="text-white-highlight">{item.smartbuy}</strong>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .why-us-section {
          padding: 60px 0;
          position: relative;
        }
        .matrix-card {
          padding: 24px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 242, 254, 0.2);
          background: rgba(11, 17, 36, 0.85);
        }
        .matrix-table-wrap {
          overflow-x: auto;
        }
        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .matrix-th {
          padding: 16px 20px;
          font-size: 0.9rem;
          font-weight: 700;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .feature-head {
          color: #94a3b8;
          width: 28%;
        }
        .traditional-head {
          color: #f43f5e;
          width: 36%;
        }
        .smartbuy-head {
          color: #00f2fe;
          background: rgba(0, 242, 254, 0.06);
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 36%;
        }
        .matrix-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.2s;
        }
        .matrix-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .matrix-td {
          padding: 18px 20px;
          font-size: 0.88rem;
          vertical-align: middle;
        }
        .font-semibold {
          font-weight: 600;
          color: #ffffff;
        }
        .status-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1.4;
        }
        .dot-red {
          color: #f43f5e;
          font-weight: 800;
        }
        .dot-green {
          color: #10b981;
          font-weight: 800;
        }
        .text-muted-dim {
          color: #94a3b8;
        }
        .text-white-highlight {
          color: #e2e8f0;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
