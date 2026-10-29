# 🛍️ SmartBuy AI — Next-Gen AI Shopping Assistant

**Tagline:** *Shop Smart. Save More. Choose Better.*

> **College Project Submission (2026)**  
> Built with **React.js + Vite**, JavaScript, and modern CSS. Zero external API keys or server setup needed — 100% functional out of the box.

---

## 🌟 Overview
**SmartBuy AI** is a premium, futuristic shopping-assistant web application designed to help consumers make intelligent, data-driven buying decisions. Rather than relying on biased ads or manipulative retail discounts, SmartBuy AI analyzes real-world hardware & product specifications, cross-checks prices against user budgets in **Indian Rupees (₹)**, assesses true value-for-money, and recommends smarter or cheaper alternatives.

---

## 🎨 Design & Aesthetic
- **Color Palette:** Dark navy background (`#070B18`) with electric blue (`#00f2fe`) and neon cyan accents, complemented by purple gradient highlights (`#8b5cf6`).
- **Glassmorphism:** Frosted translucent cards with `backdrop-filter: blur(16px)` and delicate luminous borders.
- **Micro-Interactions:** Ambient animated background glow orbs, hover lift transitions, and glowing buttons.
- **Typography:** Built with `Space Grotesk` (headings) and `Plus Jakarta Sans` (body) for a sleek cyberpunk tech aesthetic.
- **Fully Responsive:** Seamlessly adapts to desktop monitors, tablets, and mobile smartphones.

---

## 🚀 Key Features

### 1. 🔍 Intelligent Product Search & Taxonomy Identifier
- Real-time search across product names, categories, descriptions, and technical specifications.
- **Automated Category Identification:** Automatically classifies search queries into the correct category using local keyword heuristics.
- Dynamic fallback generation: If an uncataloged product is searched (e.g. *Mechanical Keyboard*), the built-in local AI dynamically generates an estimated analysis and matches it against category baselines!

### 2. 💰 Indian Rupee (₹) Budget Analyzer
- Set your shopping budget in ₹ via the hero bar, quick preset chips (`₹2,000`, `₹10,000`, `₹30,000`, `₹75,000`), slider, or navbar pill.
- **Instant Budget Status:**
  - 🟢 **Within Budget:** Shows exact amount saved within your target.
  - 🔴 **Above Budget:** Shows exact extra allocation needed.
- One-click filter to view only items you can afford.

### 3. 🧠 Comprehensive AI Product Audit
Clicking **"Analyze with AI"** opens a full-screen audit modal containing:
- Sample pricing in ₹ labeled clearly as **Academic Demo Data**.
- **Hardware Quality Score (out of 10)** and **Value-for-Money Score (out of 10)** with visual progress meters.
- **Key Specifications Table:** Detailed specs (Processors, Battery, Materials, Certifications).
- **AI Purchase Assessment:** Pros ("Why You Should Buy This"), Cons ("Drawbacks to Consider"), and an AI Verdict paragraph.
- **Smarter / Cheaper Alternatives:** Curated recommendations with specific reasons (e.g. *"Saves ₹19,000 with 80% noise cancellation performance"*).
- **Direct Marketplace Search Links:** One-click search buttons for **Amazon India**, **Flipkart**, **Myntra**, and **Croma**.

### 4. ⚖️ Interactive Head-to-Head Product Comparison
- Compare 2 to 3 products side-by-side in a matrix table.
- Compares:
  - Prices in ₹
  - Quality and Value scores
  - Budget suitability
  - Specification breakdown
  - Customer ratings
- Automatically highlights an **AI Smart Choice Winner 🏆** based on composite value and budget optimization.

### 5. 🗂️ 8 Curated Categories
1. **Electronics:** Smartphones, Laptops, ANC Headphones, OLED displays.
2. **Groceries:** Extra virgin olive oil, cold pressed mustard oil, basmati rice, organic pulses.
3. **Food & Beverages:** Artisan specialty coffee, green tea, California almonds.
4. **Home Appliances:** Digital air fryers, robotic vacuums, copper motor mixer grinders.
5. **Fashion:** Air Jordans, casual sneakers, chronograph watches, slim stretch jeans.
6. **Personal Care:** Titanium trimmers, electric toothbrushes, sunscreen gels.
7. **Furniture:** Ergonomic high-back chairs, motorized standing desks.
8. **Sports & Fitness:** Whey protein isolate, home dumbbell kits, anti-tear yoga mats.

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 18 (Hooks, State Management, Memoization)
- **Build Tool:** Vite 5 (Lightning-fast HMR)
- **Styling:** Custom Modern CSS (CSS Variables, Flexbox/Grid, Glassmorphism, Neon Glow Filters)
- **Icons:** Custom high-res SVG icon components (Zero third-party icon font dependencies)
- **Analysis Engine:** Pure local JavaScript (Zero external API dependencies, zero cost, completely offline-capable)

---

## 💻 How to Run and Test the Project

### Prerequisites
- Node.js (v18.0.0 or higher) and npm installed on your machine.

### Terminal Commands

1. **Open terminal** in the project directory:
   ```bash
   cd "SmartBuy Ai"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the browser:**
   Open [http://localhost:3000](http://localhost:3000) (or the port Vite prints in your terminal) to explore SmartBuy AI!

5. **Build for Production (Optional):**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🧪 Quick Test Checklist for Evaluation
1. **Search Test:** Type `"iPhone 15"`, `"Air Fryer"`, or `"Protein"` in the search bar and press `Enter` or click **"Analyze Product"**.
2. **Category Auto-Detection:** Notice the *"Auto-Detected Category"* chip dynamically updates as you type.
3. **Budget Matching:** Set your budget to `₹10,000`. Notice how product cards immediately display green *"Within Budget"* or red *"Above Budget"* status with exact rupee calculations.
4. **View Alternatives:** Inside any product analysis, scroll to *"Smarter & Cheaper Recommended Alternatives"* and click to switch analysis.
5. **Head-to-Head Comparison:** Click **"Compare"** in the top navigation bar to inspect the side-by-side comparison matrix with AI winner badge.
6. **Shopping Platform Links:** Click the Amazon, Flipkart, or Croma buttons in the analysis modal to verify live query redirection.

---

## 📄 Academic Transparency & Disclaimer
SmartBuy AI is a demonstration web application engineered for college examination and evaluation. All product specifications, ratings, and prices represent simulated sample data for local demonstration. Live purchase links redirect to real search results on respective retailer platforms.

---
**Made with precision for College Submission • 2026**

