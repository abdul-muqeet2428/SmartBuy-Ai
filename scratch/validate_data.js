import { PRODUCTS, getProductById, searchProducts, getProductsByCategory, filterProductsByBudget } from '../src/data/products.js';
import { CATEGORIES, identifyCategory } from '../src/data/categories.js';
import { analyzeProduct, evaluateBudget, compareProducts, generateShoppingLinks, formatINR } from '../src/utils/aiAnalyzer.js';

console.log('--- Testing Product Data Integrity ---');
console.log(`Total Products: ${PRODUCTS.length}`);

let issues = [];

// 1. Verify all categories match
const validCatIds = new Set(CATEGORIES.map(c => c.id));
PRODUCTS.forEach(p => {
  if (!validCatIds.has(p.category)) {
    issues.push(`Product "${p.name}" has invalid category "${p.category}"`);
  }
  if (!p.price || p.price <= 0) {
    issues.push(`Product "${p.name}" has invalid price ${p.price}`);
  }
  if (!p.qualityScore || !p.valueScore) {
    issues.push(`Product "${p.name}" is missing qualityScore or valueScore`);
  }
  // Check alternatives
  if (p.alternatives) {
    p.alternatives.forEach(altId => {
      const altProduct = getProductById(altId);
      if (!altProduct) {
        issues.push(`Product "${p.name}" (${p.id}) references missing alternative ID "${altId}"`);
      }
    });
  }
});

// 2. Test identifyCategory on various queries
const testQueries = [
  { q: 'iPhone 15', expected: 'electronics' },
  { q: 'Olive Oil', expected: 'groceries' },
  { q: 'Arabica coffee', expected: 'food-beverages' },
  { q: 'Air fryer', expected: 'appliances' },
  { q: 'Sneakers', expected: 'fashion' },
  { q: 'Beard trimmer', expected: 'personal-care' },
  { q: 'Office chair', expected: 'furniture' },
  { q: 'Whey protein', expected: 'fitness' }
];

testQueries.forEach(t => {
  const cat = identifyCategory(t.q);
  if (cat.id !== t.expected) {
    issues.push(`identifyCategory('${t.q}') returned '${cat.id}' instead of '${t.expected}'`);
  }
});

// 3. Test analyzeProduct on every single product
PRODUCTS.forEach(p => {
  try {
    const analysis = analyzeProduct(p.id, 25000);
    if (!analysis) issues.push(`analyzeProduct failed for ${p.id}`);
    if (!analysis.budgetEvaluation) issues.push(`budgetEvaluation missing for ${p.id}`);
    if (!analysis.shoppingLinks || !analysis.shoppingLinks.amazon) issues.push(`shoppingLinks missing for ${p.id}`);
  } catch (err) {
    issues.push(`analyzeProduct threw error for ${p.id}: ${err.message}`);
  }
});

// 4. Test analyzeProduct on uncataloged dynamic query
try {
  const dynamicAnalysis = analyzeProduct('Mechanical Gaming Keyboard', 5000);
  if (!dynamicAnalysis) issues.push('Dynamic analysis failed for uncataloged item');
  if (dynamicAnalysis.category !== 'electronics') issues.push('Dynamic analysis category detection failed');
} catch (err) {
  issues.push(`Dynamic analysis threw: ${err.message}`);
}

// 5. Test compareProducts
try {
  const cmp = compareProducts(['elec-01', 'elec-02'], 70000);
  if (!cmp || !cmp.winnerId || !cmp.products || cmp.products.length !== 2) {
    issues.push('compareProducts with 2 items failed');
  }
} catch (err) {
  issues.push(`compareProducts threw: ${err.message}`);
}

// 6. Test evaluateBudget
const b1 = evaluateBudget(10000, 15000);
if (!b1.isWithin || b1.difference !== 5000) issues.push('evaluateBudget within failed');

const b2 = evaluateBudget(25000, 15000);
if (b2.isWithin || b2.difference !== 10000) issues.push('evaluateBudget above failed');

const b3 = evaluateBudget(25000, null);
if (b3.isWithin !== null) issues.push('evaluateBudget null budget failed');

console.log(`Validation completed. Issues found: ${issues.length}`);
if (issues.length > 0) {
  issues.forEach(i => console.error('ISSUE:', i));
} else {
  console.log('ALL DATA & ANALYSIS UNIT TESTS PASSED PERFECTLY!');
}

