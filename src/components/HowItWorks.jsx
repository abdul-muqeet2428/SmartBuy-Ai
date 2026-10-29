import React from 'react';
import { SearchIcon, SparklesIcon, WalletIcon, ArrowRightIcon, ZapIcon } from './Icons';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Search & Set Budget',
      icon: SearchIcon,
      desc: 'Type any product name or gadget and optionally set your spending limit in Indian Rupees (₹).',
      tag: 'Step 1'
    },
    {
      num: '02',
      title: 'Automated Category & Spec Scan',
      icon: ZapIcon,
      desc: 'Our local AI identifies product taxonomy and extracts critical technical specifications and features instantly.',
      tag: 'Step 2'
    },
    {
      num: '03',
      title: 'Budget & Value Indexing',
      icon: WalletIcon,
      desc: 'SmartBuy AI evaluates hardware quality (out of 10) and flags whether the purchase is within budget or over-priced.',
      tag: 'Step 3'
    },
    {
      num: '04',
      title: 'Smart Alternatives & Verification',
      icon: SparklesIcon,
      desc: 'Get curated recommendations that save you thousands, with direct search links to Amazon, Flipkart, and Croma.',
      tag: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="header-badge">
            <ZapIcon size={14} />
            <span>Under The Hood</span>
          </div>
          <h2 className="section-title">
            How <span className="gradient-text">SmartBuy AI</span> Works
          </h2>
          <p className="section-subtitle">
            A transparent 4-stage pipeline that eliminates buyer remorse and cuts through marketing jargon.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.num} className="glass-card step-card">
                <div className="step-top-row">
                  <span className="step-number">{step.num}</span>
                  <div className="step-icon-box">
                    <IconComp size={20} className="text-cyan" />
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <div className="step-footer">
                  <span className="badge badge-cyan">{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          padding: 60px 0;
          position: relative;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 992px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
        .step-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          position: relative;
        }
        .step-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .step-number {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.12);
        }
        .step-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .step-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .step-footer {
          margin-top: auto;
          display: flex;
        }
      `}</style>
    </section>
  );
}

