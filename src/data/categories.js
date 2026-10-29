export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'laptop',
    description: 'Smartphones, laptops, audio & tech gear',
    badge: 'High Demand',
    gradient: 'from-blue-500 to-cyan-400',
    keywords: [
      'iphone', 'apple', 'macbook', 'laptop', 'phone', 'smartphone', 'samsung', 'galaxy',
      'headphone', 'earphone', 'airpods', 'earbuds', 'watch', 'smartwatch', 'tv', 'television',
      'tablet', 'ipad', 'camera', 'speaker', 'sony', 'dell', 'hp', 'lenovo', 'asus', 'oneplus'
    ]
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: 'shopping-cart',
    description: 'Daily staples, organic grains & oils',
    badge: 'Daily Best',
    gradient: 'from-emerald-500 to-teal-400',
    keywords: [
      'oil', 'olive oil', 'rice', 'basmati', 'atta', 'flour', 'dal', 'pulses', 'sugar',
      'salt', 'spices', 'organic', 'grocery', 'ghee', 'mustard oil', 'sunflower oil'
    ]
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    icon: 'coffee',
    description: 'Artisan coffee, teas, healthy snacks & nuts',
    badge: 'Fresh Picks',
    gradient: 'from-amber-500 to-orange-400',
    keywords: [
      'coffee', 'tea', 'green tea', 'beverage', 'drink', 'juice', 'snack', 'almond', 'cashew',
      'nuts', 'dry fruits', 'chocolate', 'cookies', 'protein bar', 'energy drink'
    ]
  },
  {
    id: 'appliances',
    name: 'Home Appliances',
    icon: 'microwave',
    description: 'Air fryers, blenders, robotic vacuums & purifiers',
    badge: 'Smart Living',
    gradient: 'from-cyan-500 to-blue-500',
    keywords: [
      'air fryer', 'microwave', 'vacuum', 'robot vacuum', 'blender', 'mixer', 'juicer',
      'purifier', 'air purifier', 'water purifier', 'refrigerator', 'fridge', 'washing machine',
      'dishwasher', 'iron', 'oven', 'toaster', 'geyser', 'kettle'
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'shirt',
    description: 'Trendy sneakers, jackets, watches & apparel',
    badge: 'Trending',
    gradient: 'from-pink-500 to-rose-400',
    keywords: [
      'shoe', 'shoes', 'sneaker', 'sneakers', 'jacket', 'shirt', 't-shirt', 'hoodie', 'jeans',
      'trousers', 'sunglasses', 'watch', 'dress', 'bag', 'backpack', 'wallet', 'nike', 'adidas', 'puma'
    ]
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    icon: 'sparkles',
    description: 'Skincare, grooming trimmers & wellness',
    badge: 'Top Rated',
    gradient: 'from-purple-500 to-indigo-400',
    keywords: [
      'trimmer', 'shaving', 'shaver', 'hair dryer', 'straightener', 'toothbrush', 'skincare',
      'serum', 'sunscreen', 'perfume', 'deodorant', 'shampoo', 'conditioner', 'face wash', 'moisturizer'
    ]
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'armchair',
    description: 'Ergonomic chairs, standing desks & recliners',
    badge: 'Comfort',
    gradient: 'from-yellow-500 to-amber-400',
    keywords: [
      'chair', 'office chair', 'ergonomic', 'desk', 'standing desk', 'table', 'sofa',
      'couch', 'bed', 'mattress', 'recliner', 'bookshelf', 'wardrobe', 'cabinet'
    ]
  },
  {
    id: 'fitness',
    name: 'Sports & Fitness',
    icon: 'activity',
    description: 'Whey protein, dumbbells, yoga mats & gear',
    badge: 'Active Life',
    gradient: 'from-red-500 to-orange-500',
    keywords: [
      'whey', 'protein', 'dumbbells', 'weights', 'gym', 'yoga', 'yoga mat', 'fitness',
      'running', 'treadmill', 'cycle', 'bicycle', 'resistance band', 'creatine', 'shaker'
    ]
  }
];

/**
 * Automatically identifies the best matching category from a product name
 */
export function identifyCategory(productName) {
  if (!productName || typeof productName !== 'string') return CATEGORIES[0];
  const query = productName.toLowerCase().trim();

  // Score each category based on keyword matches
  let bestMatch = null;
  let highestScore = 0;

  for (const cat of CATEGORIES) {
    let score = 0;
    for (const kw of cat.keywords) {
      if (query.includes(kw)) {
        score += kw.length; // weight longer matches higher
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = cat;
    }
  }

  return bestMatch || CATEGORIES[0];
}

