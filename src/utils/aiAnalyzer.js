import { PRODUCTS, getProductById, searchProducts } from '../data/products.js';
import { identifyCategory } from '../data/categories.js';

export { searchProducts };

/**
 * Generate external shopping search links for Indian platforms
 */
export function generateShoppingLinks(productName) {
  const query = encodeURIComponent(productName);
  const slugQuery = encodeURIComponent(productName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'));
  return {
    amazon: {
      name: 'Amazon India',
      url: `https://www.amazon.in/s?k=${query}`,
      color: '#FF9900',
      badge: 'Amazon'
    },
    flipkart: {
      name: 'Flipkart',
      url: `https://www.flipkart.com/search?q=${query}`,
      color: '#2874F0',
      badge: 'Flipkart'
    },
    myntra: {
      name: 'Myntra',
      url: `https://www.myntra.com/${slugQuery}?rawQuery=${query}`,
      color: '#FF3F6C',
      badge: 'Myntra'
    },
    croma: {
      name: 'Croma',
      url: `https://www.croma.com/searchB?q=${query}`,
      color: '#00B5B8',
      badge: 'Croma'
    }
  };
}

/**
 * Format currency in Indian Rupees (₹)
 */
export function formatINR(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Calculate budget status and differences
 */
export function evaluateBudget(price, userBudget) {
  if (!userBudget || userBudget <= 0) {
    return {
      status: 'no_budget_set',
      label: 'Budget Not Specified',
      color: 'text-slate-400',
      bg: 'bg-slate-800/40 border-slate-700',
      isWithin: null,
      difference: 0,
      diffFormatted: '₹0',
      percentageOfBudget: 0,
      message: 'Set your budget above to see savings or budget fits.'
    };
  }

  const numericBudget = Number(userBudget);
  const diff = numericBudget - price;
  const isWithin = diff >= 0;
  const percentage = Math.min(Math.round((price / numericBudget) * 100), 200);

  if (isWithin) {
    return {
      status: 'within_budget',
      label: 'Within Budget',
      badgeClass: 'badge-success',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      isWithin: true,
      difference: diff,
      diffFormatted: formatINR(diff),
      percentageOfBudget: percentage,
      message: `You save ${formatINR(diff)} within your ${formatINR(numericBudget)} budget!`
    };
  } else {
    const extraNeeded = Math.abs(diff);
    return {
      status: 'above_budget',
      label: 'Above Budget',
      badgeClass: 'badge-danger',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30',
      isWithin: false,
      difference: extraNeeded,
      diffFormatted: formatINR(extraNeeded),
      percentageOfBudget: percentage,
      message: `Exceeds your ${formatINR(numericBudget)} budget by ${formatINR(extraNeeded)}.`
    };
  }
}

/**
 * Perform comprehensive AI analysis on a product (catalog product or custom query)
 */
export function analyzeProduct(productOrName, userBudget = null) {
  let product = null;

  if (typeof productOrName === 'string') {
    // Attempt exact or partial match in catalog
    const query = productOrName.toLowerCase().trim();
    product = PRODUCTS.find(p => p.id === productOrName) ||
              PRODUCTS.find(p => p.name.toLowerCase() === query) ||
              PRODUCTS.find(p => p.name.toLowerCase().includes(query));

    // If still not found, dynamically generate analysis for unknown item
    if (!product) {
      product = generateSyntheticProductAnalysis(productOrName);
    }
  } else if (typeof productOrName === 'object' && productOrName !== null) {
    product = productOrName;
  }

  if (!product) return null;

  const budgetEval = evaluateBudget(product.price, userBudget);
  const shoppingLinks = generateShoppingLinks(product.name);

  // Retrieve alternatives objects
  let alternativesList = [];
  if (product.alternatives && Array.isArray(product.alternatives)) {
    alternativesList = product.alternatives
      .map(altId => getProductById(altId))
      .filter(Boolean);
  }

  // If no explicit alternatives listed, pick top products from same category
  if (alternativesList.length === 0) {
    alternativesList = PRODUCTS
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }

  // Calculate Value vs Price assessment label
  let valueVerdict = 'Balanced Choice';
  if (product.valueScore >= 9.2) valueVerdict = 'Exceptional Value for Money';
  else if (product.valueScore >= 8.7) valueVerdict = 'High Value Purchase';
  else if (product.qualityScore >= 9.3) valueVerdict = 'Premium Luxury Tier';

  return {
    ...product,
    budgetEvaluation: budgetEval,
    shoppingLinks,
    resolvedAlternatives: alternativesList.map(alt => ({
      ...alt,
      reason: generateAlternativeReason(product, alt),
      budgetEvaluation: evaluateBudget(alt.price, userBudget),
      shoppingLinks: generateShoppingLinks(alt.name)
    })),
    valueVerdict,
    analysisTimestamp: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  };
}

/**
 * Generate human-readable comparison reasoning between two products
 */
function generateAlternativeReason(original, alt) {
  const priceDiff = original.price - alt.price;
  if (priceDiff > 0) {
    const savedPct = Math.round((priceDiff / original.price) * 100);
    return `Saves ${formatINR(priceDiff)} (${savedPct}% cheaper) with comparable ${alt.badge || 'features'}`;
  } else if (priceDiff < 0) {
    return `Premium upgrade with ${alt.qualityScore}/10 build quality and enhanced specifications`;
  } else {
    return `Alternative option in the same price tier with unique design ergonomics`;
  }
}

/**
 * Generates an intelligent synthetic analysis for products not yet in the sample catalog
 */
function generateSyntheticProductAnalysis(queryName) {
  const detectedCategory = identifyCategory(queryName);
  
  // Intelligent mock pricing based on category heuristics
  let basePrice = 2499;
  if (detectedCategory.id === 'electronics') basePrice = 14999;
  else if (detectedCategory.id === 'furniture') basePrice = 8999;
  else if (detectedCategory.id === 'appliances') basePrice = 4500;
  else if (detectedCategory.id === 'groceries') basePrice = 450;
  else if (detectedCategory.id === 'food-beverages') basePrice = 350;
  else if (detectedCategory.id === 'fitness') basePrice = 1800;
  else if (detectedCategory.id === 'fashion') basePrice = 2200;
  else if (detectedCategory.id === 'personal-care') basePrice = 999;

  return {
    id: `custom-${Date.now()}`,
    name: queryName.trim(),
    category: detectedCategory.id,
    categoryName: detectedCategory.name,
    price: basePrice,
    mrp: Math.round(basePrice * 1.35),
    rating: 4.3,
    reviewsCount: 1240,
    qualityScore: 8.5,
    valueScore: 8.8,
    isTrending: false,
    badge: 'AI Estimated Analysis',
    isEstimated: true,
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80',
    shortDescription: `AI analysis generated for "${queryName}" categorized under ${detectedCategory.name}.`,
    specs: {
      'Category': detectedCategory.name,
      'AI Analysis Confidence': '88% High Reliability',
      'Market Segment': 'Mid-range consumer tier',
      'Recommended Usage': 'Daily and academic utility'
    },
    pros: [
      'Matches key market parameters for modern consumer standards',
      'Competitive price-to-feature ratio in this product class',
      'Compatible with leading accessories and ecosystem standards'
    ],
    cons: [
      'Dynamic estimate based on category baselines (verify live retailer specs)',
      'Availability may vary across regional shopping platforms'
    ],
    aiVerdict: `SmartBuy AI evaluated "${queryName}" under ${detectedCategory.name}. It provides reliable baseline specs for this price bracket. Compare with verified alternatives below before buying.`,
    alternatives: PRODUCTS.filter(p => p.category === detectedCategory.id).slice(0, 3).map(p => p.id)
  };
}

/**
 * Compare two or three products side-by-side
 */
export function compareProducts(productIds, userBudget = null) {
  if (!Array.isArray(productIds) || productIds.length < 2) return null;

  const analyzed = productIds
    .map(id => analyzeProduct(id, userBudget))
    .filter(Boolean);

  if (analyzed.length < 2) return null;

  // Determine the AI winner based on combined score: (qualityScore * 0.45) + (valueScore * 0.55)
  let bestProduct = analyzed[0];
  let highestScore = 0;

  analyzed.forEach(p => {
    let composite = (p.qualityScore * 0.45) + (p.valueScore * 0.55);
    // Extra boost if within budget
    if (userBudget && p.budgetEvaluation.isWithin) {
      composite += 1.0;
    }
    if (composite > highestScore) {
      highestScore = composite;
      bestProduct = p;
    }
  });

  return {
    products: analyzed,
    winnerId: bestProduct.id,
    winnerReason: `Top recommended pick based on ${bestProduct.valueScore}/10 value score and balanced durability.`
  };
}
