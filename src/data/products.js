/**
 * SmartBuy AI - Local Product Dataset
 * Note: All prices and specifications are sample/demo data designed for academic demonstration.
 */

export const PRODUCTS = [
  // ==========================================
  // 1. ELECTRONICS
  // ==========================================
  {
    id: 'elec-01',
    name: 'Apple iPhone 15 (128 GB)',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 69999,
    mrp: 79900,
    rating: 4.7,
    reviewsCount: 14200,
    qualityScore: 9.3,
    valueScore: 8.2,
    isTrending: true,
    badge: 'Flagship Choice',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Super Retina XDR, Dynamic Island, 48MP main camera with USB-C.',
    specs: {
      'Display': '6.1-inch Super Retina XDR OLED',
      'Processor': 'A16 Bionic chip',
      'Camera': '48MP Main + 12MP Ultra-Wide',
      'Battery': 'Up to 20 hours video playback',
      'Port': 'USB-C Universal Port',
      'Storage': '128 GB NVMe'
    },
    pros: [
      'Stunning 48MP camera with next-gen portraits',
      'Dynamic Island provides seamless multitasking',
      'Exceptional iOS software longevity and security',
      'Premium durable ceramic shield front'
    ],
    cons: [
      'Standard 60Hz display refresh rate (no ProMotion)',
      'Charging speed capped at 20W compared to Android rivals',
      'No optical telephoto zoom lens'
    ],
    aiVerdict: 'An outstanding premium daily driver for iOS enthusiasts. It delivers top-tier camera results and buttery performance, but if high refresh rate (120Hz) is your priority, consider the OnePlus 12 or Galaxy S24.',
    alternatives: ['elec-02', 'elec-03', 'elec-04']
  },
  {
    id: 'elec-02',
    name: 'OnePlus 12 (16GB RAM, 512GB)',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 64999,
    mrp: 69999,
    rating: 4.6,
    reviewsCount: 9800,
    qualityScore: 9.1,
    valueScore: 9.4,
    isTrending: true,
    badge: 'Best Value Flagship',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Snapdragon 8 Gen 3, 2K 120Hz ProXDR display, 100W SUPERVOOC charging.',
    specs: {
      'Display': '6.82-inch 2K 120Hz AMOLED LTPO 4.0',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3',
      'Camera': '50MP Sony LYT-808 + 64MP Periscope Zoom',
      'Battery': '5400 mAh with 100W Wired Fast Charging',
      'RAM / ROM': '16GB LPDDR5X / 512GB UFS 4.0'
    },
    pros: [
      'Phenomenal 120Hz 2K display with 4500 nits peak brightness',
      'Blazing fast 100W charging (0 to 100% in 26 mins)',
      'Versatile 3x optical periscope camera',
      'Top-tier Snapdragon 8 Gen 3 gaming benchmark scores'
    ],
    cons: [
      'Slightly bulky in hand compared to compact phones',
      'Curved edges may cause minor palm rejection for some'
    ],
    aiVerdict: 'SmartBuy AI Value Champion in the flagship segment. Offers faster charging, higher refresh rate, and twice the storage of the base iPhone 15 at ₹5,000 less.',
    alternatives: ['elec-01', 'elec-03']
  },
  {
    id: 'elec-03',
    name: 'Samsung Galaxy S24 5G',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 62999,
    mrp: 74999,
    rating: 4.6,
    reviewsCount: 8200,
    qualityScore: 9.0,
    valueScore: 8.8,
    isTrending: false,
    badge: 'Compact Powerhouse',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Galaxy AI, Dynamic AMOLED 2X, 7 years of OS updates.',
    specs: {
      'Display': '6.2-inch Dynamic AMOLED 2X 120Hz',
      'Processor': 'Exynos 2400 Deca-Core',
      'Camera': '50MP Dual Pixel + 10MP 3x Telephoto',
      'Battery': '4000 mAh',
      'AI Features': 'Circle to Search, Live Translate, Generative Edit'
    },
    pros: [
      'Industry-leading 7 years of guaranteed OS and security updates',
      'Compact, lightweight ergonomic aluminum frame',
      'Superb native Galaxy AI productivity suite'
    ],
    cons: [
      'Moderate 4000 mAh battery requires daily top-ups',
      'Charging limited to 25W'
    ],
    aiVerdict: 'Ideal if you want a compact Android flagship that fits comfortably in one hand and includes a dedicated 3x telephoto zoom camera.',
    alternatives: ['elec-01', 'elec-02']
  },
  {
    id: 'elec-04',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 26990,
    mrp: 34990,
    rating: 4.8,
    reviewsCount: 16500,
    qualityScore: 9.6,
    valueScore: 8.9,
    isTrending: true,
    badge: 'ANC King',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Industry-leading Active Noise Cancellation with 8 microphones & Auto NC Optimizer.',
    specs: {
      'ANC': 'Dual processors with 8 noise-canceling mics',
      'Battery': 'Up to 30 hours with ANC enabled',
      'Drivers': 'Custom 30mm precision carbon fiber drivers',
      'Codecs': 'LDAC, AAC, SBC (Hi-Res Audio Wireless)',
      'Weight': '250g ultra-lightweight synthetic leather'
    },
    pros: [
      'Unrivaled Active Noise Cancellation in noisy environments',
      'Supreme comfort for 8+ hour study or travel sessions',
      'Crystal-clear voice calls with AI beamforming mics'
    ],
    cons: [
      'Headband does not fold completely into a compact ball like XM4',
      'Premium pricing requires significant budget'
    ],
    aiVerdict: 'The absolute gold standard for noise cancellation and study concentration. If your budget is below ₹10,000, consider the Soundcore Space One.',
    alternatives: ['elec-05']
  },
  {
    id: 'elec-05',
    name: 'Anker Soundcore Space One ANC',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 7999,
    mrp: 12999,
    rating: 4.4,
    reviewsCount: 5400,
    qualityScore: 8.3,
    valueScore: 9.5,
    isTrending: false,
    badge: 'Budget ANC Champion',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
    shortDescription: '2X stronger voice reduction ANC, 40mm drivers, 55h playtime.',
    specs: {
      'ANC': 'Adaptive Active Noise Cancelling 2.0',
      'Battery': '55 hours (ANC off) / 40 hours (ANC on)',
      'Drivers': '40mm dynamic drivers with LDAC Hi-Res',
      'Fast Charge': '5 mins charge = 4 hours playback'
    },
    pros: [
      'Saves ~₹19,000 compared to Sony XM5 with 80% of noise reduction power',
      'Insane 55-hour battery longevity',
      'Rich companion app with custom EQ adjustments'
    ],
    cons: [
      'Plastic build lacks the luxury feel of Sony',
      'Earcups can get slightly warm during prolonged summer use'
    ],
    aiVerdict: 'Top budget alternative for students. Delivers 80% of flagship audio and noise cancellation for less than one-third the price.',
    alternatives: ['elec-04']
  },
  {
    id: 'elec-06',
    name: 'Apple MacBook Air M2 (8GB, 256GB SSD)',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 84990,
    mrp: 99900,
    rating: 4.8,
    reviewsCount: 11000,
    qualityScore: 9.5,
    valueScore: 8.7,
    isTrending: true,
    badge: 'Student & Dev Favorite',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Liquid Retina display, fanless silent operation, 18-hour battery.',
    specs: {
      'Display': '13.6-inch Liquid Retina with True Tone',
      'Processor': 'Apple M2 (8-core CPU, 8-core GPU)',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Weight': '1.24 kg featherweight unibody aluminum'
    },
    pros: [
      'Unbeatable 16-18 hours real-world battery life',
      'Completely silent fanless thermal design',
      'Stellar trackpad, aluminum finish, and MagSafe 3 charging'
    ],
    cons: [
      'Base 8GB RAM cannot be upgraded post-purchase',
      'Single external display support limit'
    ],
    aiVerdict: 'The most refined all-rounder laptop for college students, developers, and writers. Silent, fast, and lasts all day without carrying a charger.',
    alternatives: ['elec-07']
  },
  {
    id: 'elec-07',
    name: 'ASUS Vivobook 15 OLED (Intel i5 13th Gen)',
    category: 'electronics',
    categoryName: 'Electronics',
    price: 52990,
    mrp: 74990,
    rating: 4.3,
    reviewsCount: 4200,
    qualityScore: 8.4,
    valueScore: 9.1,
    isTrending: false,
    badge: 'OLED Display Champ',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80',
    shortDescription: '15.6-inch FHD OLED display, 16GB RAM, 512GB SSD, backlit keyboard.',
    specs: {
      'Display': '15.6-inch FHD OLED 600 nits HDR',
      'Processor': 'Intel Core i5-1335U 10-core',
      'RAM': '16GB DDR4 expandable',
      'Storage': '512GB PCIe NVMe SSD',
      'Weight': '1.7 kg'
    },
    pros: [
      'Deep inky OLED blacks and 100% DCI-P3 color gamut',
      '16GB RAM out of the box for effortless multitasking',
      'Saves ₹32,000 compared to MacBook Air M2'
    ],
    cons: [
      'Battery lasts 6 hours compared to 16 hours on Mac',
      'Plastic chassis compared to unibody aluminum'
    ],
    aiVerdict: 'Terrific Windows alternative with a gorgeous OLED screen and double the RAM of entry MacBooks at a much lower price point.',
    alternatives: ['elec-06']
  },

  // ==========================================
  // 2. GROCERIES
  // ==========================================
  {
    id: 'groc-01',
    name: 'Borges Extra Virgin Olive Oil (1 Litre)',
    category: 'groceries',
    categoryName: 'Groceries',
    price: 1199,
    mrp: 1599,
    rating: 4.6,
    reviewsCount: 7800,
    qualityScore: 9.1,
    valueScore: 8.6,
    isTrending: true,
    badge: 'Heart Healthy',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'First cold pressed Spanish olives, rich in antioxidants & monounsaturated fats.',
    specs: {
      'Origin': 'Spain (Mediterranean)',
      'Processing': 'First Cold Pressed Extraction',
      'Volume': '1 Litre Glass Bottle',
      'Acidity': '< 0.5% Extra Virgin Standard'
    },
    pros: [
      'High in heart-healthy Oleic Acid and Vitamin E',
      'Authentic peppery finish indicating rich polyphenols',
      'Perfect for raw salad dressings, dips, and light sautéing'
    ],
    cons: [
      'Lower smoke point not suitable for heavy Indian deep frying'
    ],
    aiVerdict: 'Excellent grade extra virgin oil for salads and continental cooking. For regular high-heat cooking, a cold-pressed groundnut or mustard oil is much cheaper and more functional.',
    alternatives: ['groc-02']
  },
  {
    id: 'groc-02',
    name: 'Fortune Cold Pressed Mustard Oil (1 Litre)',
    category: 'groceries',
    categoryName: 'Groceries',
    price: 185,
    mrp: 230,
    rating: 4.5,
    reviewsCount: 19200,
    qualityScore: 8.8,
    valueScore: 9.7,
    isTrending: false,
    badge: 'Kitchen Essential',
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Traditional Kachi Ghani extracted mustard oil with authentic pungent aroma.',
    specs: {
      'Extraction': 'Kachi Ghani (Traditional Wood/Expeller Cold Press)',
      'Volume': '1 Litre Pet Bottle',
      'Key Fatty Acid': 'Rich in Omega-3 and Omega-6'
    },
    pros: [
      'High smoke point ideal for Indian curries and tadka',
      'Natural antimicrobial allyl isothiocyanate content',
      'Extremely economical at under ₹200'
    ],
    cons: [
      'Strong pungent aroma requires gentle heating before adding spices'
    ],
    aiVerdict: 'Best value cooking oil for Indian cuisine. Delivers authentic aroma, high smoke point, and natural nutrients at 15% the cost of olive oil.',
    alternatives: ['groc-01']
  },
  {
    id: 'groc-03',
    name: 'Daawat Rozana Super Basmati Rice (5 Kg)',
    category: 'groceries',
    categoryName: 'Groceries',
    price: 499,
    mrp: 675,
    rating: 4.4,
    reviewsCount: 22100,
    qualityScore: 8.5,
    valueScore: 9.2,
    isTrending: false,
    badge: 'Family Value Pack',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Medium-long slender grains aged naturally for non-sticky daily meals.',
    specs: {
      'Weight': '5 Kg bag',
      'Grain Length': 'Medium Long Slender',
      'Aging': 'Aged 12+ months'
    },
    pros: [
      'Grains remain fluffy and separate after cooking',
      'Subtle pleasant aroma without artificial flavoring',
      'Super cost-effective for everyday lunch and dinner'
    ],
    cons: [
      'Not as extra-long as Daawat Biryani Special variant'
    ],
    aiVerdict: 'The quintessential daily basmati choice. Strikes the sweet spot between grain length, aroma, and everyday family affordability.',
    alternatives: ['groc-04']
  },
  {
    id: 'groc-04',
    name: 'Tata Sampann Organic Moong Dal (1 Kg)',
    category: 'groceries',
    categoryName: 'Groceries',
    price: 175,
    mrp: 215,
    rating: 4.7,
    reviewsCount: 11400,
    qualityScore: 9.3,
    valueScore: 9.0,
    isTrending: false,
    badge: 'Pure & Unpolished',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
    shortDescription: '100% unpolished yellow moong dal with natural dietary fiber intact.',
    specs: {
      'Weight': '1 Kg vacuum sealed pack',
      'Certification': 'Jaivik Bharat & NPOP Organic',
      'Protein': '24g protein per 100g'
    },
    pros: [
      'Zero chemical polishing or artificial yellow coloring',
      'Cooks quickly and is exceptionally easy to digest',
      'High plant-based protein content'
    ],
    cons: [
      'Slightly higher price than loose local market dal'
    ],
    aiVerdict: 'Top choice for healthy households. Unpolished pulses preserve the nutritious outer husk layer and cook into a richer, creamier dal.',
    alternatives: ['groc-03']
  },

  // ==========================================
  // 3. FOOD AND BEVERAGES
  // ==========================================
  {
    id: 'food-01',
    name: 'Blue Tokai Attikan Estate Dark Roast (250g)',
    category: 'food-beverages',
    categoryName: 'Food & Beverages',
    price: 490,
    mrp: 550,
    rating: 4.8,
    reviewsCount: 6500,
    qualityScore: 9.5,
    valueScore: 8.6,
    isTrending: true,
    badge: 'Artisan Favorite',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
    shortDescription: '100% specialty Arabica coffee beans from Biligiriranga Hills with dark chocolate notes.',
    specs: {
      'Origin': 'Biligirirangan Hills, Karnataka',
      'Roast Level': 'Dark Roast',
      'Tasting Notes': 'Dark Chocolate, Fig, Roasted Almond',
      'Weight': '250 grams valve bag'
    },
    pros: [
      'Freshly roasted on order with transparent roast date',
      'Zero chicory or artificial additives',
      'Rich crema when brewed via South Indian filter, French press or Moka pot'
    ],
    cons: [
      'Requires a coffee grinder or specific brewing gear',
      'Short shelf life for peak freshness (3-4 weeks)'
    ],
    aiVerdict: 'Exceptional specialty coffee for serious caffeine lovers. Significantly superior taste and aroma compared to instant freeze-dried powders.',
    alternatives: ['food-02']
  },
  {
    id: 'food-02',
    name: 'Nescafe Gold Blend Freeze-Dried Instant (100g)',
    category: 'food-beverages',
    categoryName: 'Food & Beverages',
    price: 380,
    mrp: 450,
    rating: 4.5,
    reviewsCount: 18400,
    qualityScore: 8.4,
    valueScore: 8.9,
    isTrending: false,
    badge: 'Instant Convenience',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Premium Arabica & Robusta blend freeze-dried into golden granules.',
    specs: {
      'Form': 'Freeze-Dried Instant Granules',
      'Weight': '100 grams glass jar',
      'Servings': '~50 cups'
    },
    pros: [
      'Ready in 15 seconds with hot water or milk',
      'Smoother flavor with less harsh bitterness than standard instant coffee',
      'No brewing equipment required'
    ],
    cons: [
      'Cannot match freshly ground estate bean depth'
    ],
    aiVerdict: 'The most convenient instant coffee for busy mornings and hostel students. Smooth taste and zero cleanup required.',
    alternatives: ['food-01']
  },
  {
    id: 'food-03',
    name: 'Happilo 100% Natural California Almonds (500g)',
    category: 'food-beverages',
    categoryName: 'Food & Beverages',
    price: 439,
    mrp: 695,
    rating: 4.6,
    reviewsCount: 31000,
    qualityScore: 9.0,
    valueScore: 9.3,
    isTrending: true,
    badge: 'Nutrient Dense',
    image: 'https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Zero cholesterol, non-GMO whole California badam loaded with Vitamin E.',
    specs: {
      'Variety': 'California Nonpareil Almonds',
      'Weight': '500g resealable zip pouch',
      'Nutrients': '21g Protein, 12g Fiber per 100g'
    },
    pros: [
      'Crunchy texture and uniformly graded kernel sizes',
      'Great brain-boosting snack for exam revision',
      'Naturally low glycemic index helps regulate blood sugar'
    ],
    cons: [
      'Needs airtight storage once opened to preserve crispness'
    ],
    aiVerdict: 'Top-tier healthy snack. Great value for 500 grams with verified freshness and crunch.',
    alternatives: ['food-04']
  },
  {
    id: 'food-04',
    name: 'Organic India Tulsi Green Tea Classic (25 Bags)',
    category: 'food-beverages',
    categoryName: 'Food & Beverages',
    price: 195,
    mrp: 230,
    rating: 4.6,
    reviewsCount: 15400,
    qualityScore: 9.1,
    valueScore: 9.2,
    isTrending: false,
    badge: 'Immunity Booster',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Certified organic Rama, Krishna & Vana Tulsi infused with whole green tea leaves.',
    specs: {
      'Ingredients': 'Rama, Krishna, Vana Tulsi + Green Tea',
      'Quantity': '25 staple-free unbleached infusion bags',
      'Caffeine': 'Low natural caffeine'
    },
    pros: [
      'Calming adaptogenic herbs help reduce study stress',
      'Staple-free paper filter bags are safer for microwaving/hot steeping',
      'Mild, refreshing herbal flavor without astringent bitterness'
    ],
    cons: [
      'Tea bags extract faster but loose leaf yields slightly more nuance'
    ],
    aiVerdict: 'Affordable, soothing everyday beverage that strengthens immunity and aids digestion during long study hours.',
    alternatives: ['food-03']
  },

  // ==========================================
  // 4. HOME APPLIANCES
  // ==========================================
  {
    id: 'app-01',
    name: 'Philips Digital Air Fryer HD9252/90 (4.1L)',
    category: 'appliances',
    categoryName: 'Home Appliances',
    price: 7499,
    mrp: 11995,
    rating: 4.6,
    reviewsCount: 24500,
    qualityScore: 9.3,
    valueScore: 8.9,
    isTrending: true,
    badge: 'Healthy Cooker',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Rapid Air Technology with starfish design for crispy fries with up to 90% less oil.',
    specs: {
      'Capacity': '4.1 Litres (serves 3-4 people)',
      'Power': '1400 Watts',
      'Presets': '7 Touchscreen Presets + Keep Warm',
      'Cleaning': 'QuickClean basket, dishwasher-safe parts'
    },
    pros: [
      'Patented starfish bottom ensures uniform air circulation',
      'Cuts down oil consumption by up to 90% for samosas and fries',
      'Very intuitive digital touchscreen with 7 presets'
    ],
    cons: [
      '4.1L is ideal for small families; larger households may need 6L+',
      'Short 0.8m power cord'
    ],
    aiVerdict: 'The most reliable air fryer on the market. Philips thermal engineering heats evenly without turning food soggy. Highly recommended healthy lifestyle upgrade.',
    alternatives: ['app-02']
  },
  {
    id: 'app-02',
    name: 'Pigeon Healthifry Digital Air Fryer (4.2L)',
    category: 'appliances',
    categoryName: 'Home Appliances',
    price: 2999,
    mrp: 5995,
    rating: 4.2,
    reviewsCount: 16800,
    qualityScore: 7.9,
    valueScore: 9.6,
    isTrending: false,
    badge: 'Budget Hero',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
    shortDescription: '360° high speed air circulation, 1200W, non-stick removable basket.',
    specs: {
      'Capacity': '4.2 Litres',
      'Power': '1200 Watts',
      'Control': 'Digital Display with timer & temp control',
      'Warranty': '1 Year Pigeon India'
    },
    pros: [
      'Costs less than half of the Philips model (saves ₹4,500)',
      'Large 4.2L basket accommodates generous portion sizes',
      'Simple controls suitable for beginners'
    ],
    cons: [
      'Slightly longer preheat time due to 1200W heating element',
      'Outer plastic chassis feels lighter than Philips'
    ],
    aiVerdict: 'Incredible value for budget-conscious students or small bachelors. Gets the air-frying job done for under ₹3,000.',
    alternatives: ['app-01']
  },
  {
    id: 'app-03',
    name: 'Ecovacs Deebot Y1 Pro Robot Vacuum & Mop',
    category: 'appliances',
    categoryName: 'Home Appliances',
    price: 24900,
    mrp: 49900,
    rating: 4.4,
    reviewsCount: 3900,
    qualityScore: 8.8,
    valueScore: 8.7,
    isTrending: true,
    badge: 'Automated Cleaning',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    shortDescription: '6500Pa hyper suction, LiDAR TrueMapping navigation, 2-in-1 vacuum and wet mop.',
    specs: {
      'Suction': '6500 Pa High Power',
      'Navigation': 'LiDAR LDS 360° Laser Navigation',
      'Battery': '5200 mAh (runs up to 300 minutes)',
      'Water Tank': 'Electronically controlled 400ml tank'
    },
    pros: [
      'Laser mapping handles complex multi-room Indian home layouts',
      'Massive 6500Pa suction easily captures dust and pet hair from carpets',
      'Automatic recharge and resume functionality'
    ],
    cons: [
      'Mopping pad requires manual rinsing after every couple of days',
      'Requires floor to be free of loose phone charging cables'
    ],
    aiVerdict: 'A genuine game-changer for working couples and students. Laser navigation ensures no missed spots and the suction handles dust and hair effortlessly.',
    alternatives: ['app-04']
  },
  {
    id: 'app-04',
    name: 'Morphy Richards Icon Superb 750W Mixer Grinder',
    category: 'appliances',
    categoryName: 'Home Appliances',
    price: 3299,
    mrp: 5895,
    rating: 4.3,
    reviewsCount: 8900,
    qualityScore: 8.5,
    valueScore: 9.0,
    isTrending: false,
    badge: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Copper motor with 3 stainless steel jars for wet, dry grinding and chutney.',
    specs: {
      'Motor': '750 Watts 100% Copper Motor',
      'Jars': '3 Jars (1.5L Liquidizing, 1L Grinding, 0.4L Chutney)',
      'Blades': 'Hardened Stainless Steel Blades',
      'Overload': 'Thermal Overload Protection Switch'
    },
    pros: [
      '750W high-torque motor handles tough turmeric and idli batter',
      'Strong leak-proof jar lids with silicone gaskets',
      '2-year comprehensive product warranty'
    ],
    cons: [
      'Motor sound is loud at speed setting 3',
      'Initial motor smell is normal during first 2-3 uses'
    ],
    aiVerdict: 'Reliable, rugged daily workhorse for Indian kitchen grinding. 750W copper motor ensures durability for years.',
    alternatives: ['app-01']
  },

  // ==========================================
  // 5. FASHION
  // ==========================================
  {
    id: 'fash-01',
    name: 'Nike Air Jordan 1 Low Retro Sneakers',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 8995,
    mrp: 9995,
    rating: 4.8,
    reviewsCount: 8400,
    qualityScore: 9.4,
    valueScore: 8.3,
    isTrending: true,
    badge: 'Streetwear Icon',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Encapsulated Air-Sole unit, genuine leather upper with stitched Wings logo.',
    specs: {
      'Upper': 'Genuine and synthetic leather',
      'Cushioning': 'Air-Sole unit in heel',
      'Outsole': 'Solid rubber with deep flex grooves',
      'Style Code': '553558-136'
    },
    pros: [
      'Timeless iconic streetwear silhouette that matches everything',
      'Premium leather build that breaks in nicely over time',
      'High resale value and collectible sneaker culture appeal'
    ],
    cons: [
      'Cushioning is retro-style, not meant for long-distance running',
      'Toe box creases naturally with regular wear'
    ],
    aiVerdict: 'The quintessential casual sneaker. It brings unmatched streetwear credibility and looks sharp with cargo pants, chinos, and jeans.',
    alternatives: ['fash-02', 'fash-03']
  },
  {
    id: 'fash-02',
    name: 'Puma Smashic Casual Unisex Sneakers',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 2199,
    mrp: 4499,
    rating: 4.3,
    reviewsCount: 19800,
    qualityScore: 8.2,
    valueScore: 9.6,
    isTrending: false,
    badge: 'Campus Essential',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'SoftFoam+ comfort sockliner, durable synthetic leather, classic Puma formstrip.',
    specs: {
      'Insole': 'SoftFoam+ plush step-in cushioning',
      'Upper': 'Synthetic leather with suede overlays',
      'Sole': 'Vulcanized rubber sole'
    },
    pros: [
      'Saves ₹6,800 compared to Nike Jordans while offering clean aesthetics',
      'SoftFoam+ insole is softer for all-day campus walking',
      'Easy to wipe clean with a damp cloth'
    ],
    cons: [
      'Lacks the premium hype factor of Jordan brand'
    ],
    aiVerdict: 'Top college recommendation. Delivers clean minimalist style and superior walking comfort at one-fourth the price of hype sneakers.',
    alternatives: ['fash-01']
  },
  {
    id: 'fash-03',
    name: 'Fossil Grant Chronograph Leather Watch',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 8495,
    mrp: 14495,
    rating: 4.6,
    reviewsCount: 7200,
    qualityScore: 9.0,
    valueScore: 8.6,
    isTrending: false,
    badge: 'Classic Heritage',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Roman numeral dial, stainless steel 44mm case, interchangeable brown leather strap.',
    specs: {
      'Case Size': '44mm stainless steel',
      'Movement': 'Quartz Chronograph with 3 sub-dials',
      'Water Resistance': '5 ATM (50 meters)',
      'Band': '22mm Genuine Leather Strap'
    },
    pros: [
      'Timeless vintage Roman numerals look distinguished in formal & casual attire',
      'Solid stainless steel build with scratch-resistant mineral crystal',
      'Interchangeable strap mechanism allows swapping straps easily'
    ],
    cons: [
      '44mm dial may look slightly large on smaller wrists (< 6.2 inches)',
      'Traditional quartz watch without smart tracking features'
    ],
    aiVerdict: 'A handsome, sophisticated analog timepiece that adds elegance to interviews, presentations, and dates.',
    alternatives: ['elec-01']
  },
  {
    id: 'fash-04',
    name: 'Levi\'s Men\'s 511 Slim Fit Stretch Jeans',
    category: 'fashion',
    categoryName: 'Fashion',
    price: 2399,
    mrp: 3999,
    rating: 4.5,
    reviewsCount: 14200,
    qualityScore: 9.1,
    valueScore: 8.8,
    isTrending: false,
    badge: 'Everyday Staple',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?w=600&auto=format&fit=crop&q=80',
    shortDescription: '99% cotton, 1% elastane for modern slim fit with comfortable flex mobility.',
    specs: {
      'Fit': 'Slim fit from hip to ankle',
      'Fabric': '99% Cotton, 1% Elastane Stretch Denim',
      'Closure': 'Zip fly with metal button closure',
      'Pockets': 'Classic 5-pocket styling'
    },
    pros: [
      'Authentic heavy-duty denim weave that withstands years of wear',
      '1% elastane gives just enough stretch for easy sitting and climbing stairs',
      'Retains color and shape through repeated wash cycles'
    ],
    cons: [
      'Slightly snug around thighs if you have athletic gym legs'
    ],
    aiVerdict: 'The quintessential pair of jeans. Built to last 4+ years without losing shape, offering great cost-per-wear value.',
    alternatives: ['fash-02']
  },

  // ==========================================
  // 6. PERSONAL CARE
  // ==========================================
  {
    id: 'care-01',
    name: 'Philips Series 3000 Beard Trimmer (BT3231/15)',
    category: 'personal-care',
    categoryName: 'Personal Care',
    price: 1899,
    mrp: 2395,
    rating: 4.6,
    reviewsCount: 41000,
    qualityScore: 9.2,
    valueScore: 9.5,
    isTrending: true,
    badge: 'Top Trimmer',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Lift & Trim system, self-sharpening titanium coated blades, 60 min cordless runtime.',
    specs: {
      'Blades': 'Self-sharpening Titanium coated stainless steel',
      'Precision': '20 lock-in length settings (0.5mm to 10mm)',
      'Battery': '60 mins cordless use (USB charging)',
      'Cleaning': 'Washable detachable blade head'
    },
    pros: [
      'Self-sharpening blades stay sharp for years without oiling',
      'Lift & Trim comb captures low-lying stubble effectively',
      'Convenient USB charging allows topping up with a laptop or power bank'
    ],
    cons: [
      'Not 100% waterproof for in-shower use (only head is washable)'
    ],
    aiVerdict: 'The undisputed champion of beard trimmers. Precision, titanium blade durability, and zero maintenance make it an easy recommendation.',
    alternatives: ['care-02']
  },
  {
    id: 'care-02',
    name: 'Mi Cordless Beard Trimmer 1C',
    category: 'personal-care',
    categoryName: 'Personal Care',
    price: 1199,
    mrp: 1499,
    rating: 4.3,
    reviewsCount: 28000,
    qualityScore: 8.3,
    valueScore: 9.4,
    isTrending: false,
    badge: 'Pocket Friendly',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80',
    shortDescription: '0.5mm precision, 60 min battery life, micro-USB charging, compact travel lock.',
    specs: {
      'Precision': '20 length settings with 0.5mm step size',
      'Battery': '60 minutes battery on 2h charge',
      'Safety': 'Built-in Travel Lock feature'
    },
    pros: [
      'Saves ₹700 over the Philips Series 3000',
      'Handy travel lock avoids accidental power on inside backpack',
      'Sleek matte black minimalist aesthetic'
    ],
    cons: [
      'Stainless steel blades rather than titanium coating'
    ],
    aiVerdict: 'Solid entry-level trimmer for college students on a tight budget. Does 90% of what pricier trimmers do.',
    alternatives: ['care-01']
  },
  {
    id: 'care-03',
    name: 'Oral-B Pro 3 Electric Rechargeable Toothbrush',
    category: 'personal-care',
    categoryName: 'Personal Care',
    price: 3499,
    mrp: 5999,
    rating: 4.7,
    reviewsCount: 12500,
    qualityScore: 9.4,
    valueScore: 8.7,
    isTrending: false,
    badge: 'Dental Pro',
    image: 'https://images.unsplash.com/photo-1559591937-e10b1442c88f?w=600&auto=format&fit=crop&q=80',
    shortDescription: '360° visible gum pressure sensor, 3 cleaning modes, 2-minute quad-pacer timer.',
    specs: {
      'Technology': '3D Oscillating-Rotating-Pulsating Action',
      'Modes': 'Daily Clean, Sensitive, Whitening',
      'Sensor': '360° Red LED Gum Pressure Alert',
      'Battery': 'Lithium-Ion (lasts 2+ weeks per charge)'
    },
    pros: [
      'Removes up to 100% more plaque along the gumline than manual toothbrushes',
      'Visual red ring prevents brushing too hard and damaging enamel',
      '2-minute timer ensures dentist-recommended brush time'
    ],
    cons: [
      'Replacement brush heads cost ~₹250 every 3 months'
    ],
    aiVerdict: 'A worthy investment into dental hygiene. Clinically proven to reduce plaque and gum inflammation.',
    alternatives: ['care-01']
  },
  {
    id: 'care-04',
    name: 'The Derma Co 1% Hyaluronic Sunscreen Aqua Gel (50g)',
    category: 'personal-care',
    categoryName: 'Personal Care',
    price: 449,
    mrp: 499,
    rating: 4.6,
    reviewsCount: 38000,
    qualityScore: 9.2,
    valueScore: 9.1,
    isTrending: true,
    badge: 'Dermatologist Tested',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'SPF 50 PA++++ with Hyaluronic Acid & Vitamin E. Zero white cast, ultra-lightweight.',
    specs: {
      'Protection': 'SPF 50 PA++++ Broad Spectrum (UVA/UVB & Blue Light)',
      'Key Actives': '1% Hyaluronic Acid, Vitamin E',
      'Texture': 'Water-light non-greasy gel'
    },
    pros: [
      'Leaves zero white cast on all Indian skin tones',
      'Absorbs in seconds without feeling oily or sticky in hot weather',
      'Protects against laptop/phone screen blue light'
    ],
    cons: [
      '50g tube finishes quickly with everyday face and neck reapplication'
    ],
    aiVerdict: 'The holy grail everyday sunscreen for students and screen workers. Lightweight hydration that looks invisible on skin.',
    alternatives: ['care-02']
  },

  // ==========================================
  // 7. FURNITURE
  // ==========================================
  {
    id: 'furn-01',
    name: 'Green Soul Monster Ultimate Ergonomic Chair',
    category: 'furniture',
    categoryName: 'Furniture',
    price: 17490,
    mrp: 29990,
    rating: 4.7,
    reviewsCount: 14800,
    qualityScore: 9.3,
    valueScore: 8.6,
    isTrending: true,
    badge: 'Ultimate Posture',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Breathable spandex & PU leather, magnetic memory foam headrest, 4D adjustable armrests.',
    specs: {
      'Material': 'High-density molded foam with Spandex & PU',
      'Mechanism': 'Any-angle multi-tilt lock (90° to 180°)',
      'Armrests': '4D Carbon finish (height, angle, depth, width)',
      'Base': 'Heavy-duty tensile metallic wheelbase (120kg capacity)'
    },
    pros: [
      'Tremendous lumbar and spine support for 10+ hour coding marathons',
      'Heavy-duty class 4 gas lift and metal frame ensure years of durability',
      'Magnetic headrest cushion stays exactly where you need it'
    ],
    cons: [
      'Heavy package (~22 kg) requires self-assembly using included hex keys',
      'High price tag'
    ],
    aiVerdict: 'Top-of-the-line ergonomic throne for programmers, designers, and gamers. If back comfort is non-negotiable, this chair delivers.',
    alternatives: ['furn-02']
  },
  {
    id: 'furn-02',
    name: 'Wakefit High Back Ergonomic Mesh Chair',
    category: 'furniture',
    categoryName: 'Furniture',
    price: 6499,
    mrp: 10499,
    rating: 4.4,
    reviewsCount: 22400,
    qualityScore: 8.5,
    valueScore: 9.4,
    isTrending: false,
    badge: 'Value Office Pick',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Breathable mesh back, adjustable lumbar support, 2D headrest & synchro-tilt.',
    specs: {
      'Backrest': 'High-tensile breathable Korean mesh',
      'Cushion': 'Thick molded foam seat',
      'Lumbar': 'Height and depth adjustable lumbar cushion',
      'Tilt': 'Single point synchro tilt with tension knob'
    },
    pros: [
      'Saves ₹11,000 compared to premium gaming chairs',
      'Breathable mesh keeps your back cool without sweat in non-AC rooms',
      'Ergonomic S-shaped back matches the natural spine curvature'
    ],
    cons: [
      'Armrests are fixed height or 1D only',
      'Recline does not go flat to 180°'
    ],
    aiVerdict: 'The most cost-effective ergonomic office chair in India. Breathable mesh is far superior to faux leather in tropical weather.',
    alternatives: ['furn-01']
  },
  {
    id: 'furn-03',
    name: 'Jin Office Motorized Height Adjustable Standing Desk',
    category: 'furniture',
    categoryName: 'Furniture',
    price: 21990,
    mrp: 32990,
    rating: 4.6,
    reviewsCount: 3100,
    qualityScore: 9.2,
    valueScore: 8.5,
    isTrending: false,
    badge: 'Active Workstation',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Dual motor, 4 memory presets, anti-collision sensor, solid engineered wood tabletop.',
    specs: {
      'Top Dimensions': '120cm x 60cm Engineered Wood Top',
      'Height Range': '71cm to 118cm (sit-to-stand)',
      'Motors': 'Whisper quiet dual motor (< 50dB)',
      'Load Capacity': '100 kg weight load'
    },
    pros: [
      'Reduces prolonged sitting fatigue and improves blood circulation',
      '4 memory buttons allow switching heights with a single tap',
      'Anti-collision sensor stops motor if desk hits a chair armrest'
    ],
    cons: [
      'Substantial upfront investment',
      'Requires access to a wall power socket for motor operation'
    ],
    aiVerdict: 'A premium lifestyle upgrade that breaks sedentary habits. If budget permits, it transforms work productivity and posture.',
    alternatives: ['furn-02']
  },

  // ==========================================
  // 8. SPORTS AND FITNESS
  // ==========================================
  {
    id: 'fit-01',
    name: 'Optimum Nutrition (ON) Gold Standard 100% Whey (2 lbs / 907g)',
    category: 'fitness',
    categoryName: 'Sports & Fitness',
    price: 3299,
    mrp: 4199,
    rating: 4.7,
    reviewsCount: 62000,
    qualityScore: 9.6,
    valueScore: 8.7,
    isTrending: true,
    badge: 'Gold Standard',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=600&auto=format&fit=crop&q=80',
    shortDescription: '24g protein blend (Whey Isolate primary), 5.5g naturally occurring BCAAs, double rich chocolate.',
    specs: {
      'Protein per scoop': '24g (Whey Isolate + Concentrate blend)',
      'BCAAs': '5.5g branched-chain amino acids',
      'Serving Size': '30.4g (approx 30 servings)',
      'Verification': 'Scratch code authentication app'
    },
    pros: [
      'Informed Choice certified (free of banned substances)',
      'Mixes instantly with cold water or milk using just a spoon (zero clumping)',
      'Pure whey isolate primary source for quick post-workout recovery'
    ],
    cons: [
      'Carries import premium compared to domestic Indian brands'
    ],
    aiVerdict: 'The global benchmark for protein quality and taste. If you want verified lab-tested purity with zero digestive bloat, this is the gold standard.',
    alternatives: ['fit-02']
  },
  {
    id: 'fit-02',
    name: 'MuscleBlaze Biozyme Performance Whey (1 Kg)',
    category: 'fitness',
    categoryName: 'Sports & Fitness',
    price: 2299,
    mrp: 2999,
    rating: 4.5,
    reviewsCount: 45000,
    qualityScore: 9.1,
    valueScore: 9.6,
    isTrending: true,
    badge: 'Formulated for Indians',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Clinically tested Enhanced Absorption Formula (EAF) for 50% higher protein absorption.',
    specs: {
      'Protein per scoop': '25g protein per 36g serving',
      'Absorption': 'Patented Biozyme digestive enzyme blend',
      'Certification': 'Informed-Protein & Labdoor USA certified',
      'Servings': '27-28 servings'
    },
    pros: [
      'Saves ₹1,000 per kg compared to ON Gold Standard',
      'Enhanced enzymes significantly reduce stomach bloating and gas',
      'Labdoor USA certified for accurate label protein claims'
    ],
    cons: [
      'Sweetened slightly higher than American whey'
    ],
    aiVerdict: 'SmartBuy AI Best Value Protein. Clinically proven absorption formula tailored for Indian diets at an unbeatable price per gram of protein.',
    alternatives: ['fit-01']
  },
  {
    id: 'fit-03',
    name: 'Kore PVC 20 Kg Adjustable Home Gym Dumbbell Kit',
    category: 'fitness',
    categoryName: 'Sports & Fitness',
    price: 1399,
    mrp: 3299,
    rating: 4.2,
    reviewsCount: 33000,
    qualityScore: 8.0,
    valueScore: 9.7,
    isTrending: false,
    badge: 'Home Workout Saver',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
    shortDescription: '20kg total plates (2kg x 4, 3kg x 4), two dumbbell rods, skipping rope & gym gloves.',
    specs: {
      'Total Weight': '20 Kg PVC filled plates',
      'Accessories': '2 dumbbell rods with lock nuts, skipping rope, hand gripper',
      'Plate Config': '4 x 2kg + 4 x 3kg plates'
    },
    pros: [
      'Entire home workout gym kit for under ₹1,500',
      'Adjustable plates allow progressive overload for biceps, shoulders, chest',
      'Plastic coated plates do not scratch tiled bedroom floors'
    ],
    cons: [
      'PVC plates are bulkier in volume than cast iron plates',
      'Lock nuts need tightening after intense drop sets'
    ],
    aiVerdict: 'Unbeatable budget starter set for student home workouts. Lets you train all major muscle groups without paying monthly gym fees.',
    alternatives: ['fit-02']
  },
  {
    id: 'fit-04',
    name: 'Boldfit TPE Yoga & Exercise Mat (6mm with Strap)',
    category: 'fitness',
    categoryName: 'Sports & Fitness',
    price: 899,
    mrp: 1799,
    rating: 4.5,
    reviewsCount: 19400,
    qualityScore: 8.9,
    valueScore: 9.3,
    isTrending: false,
    badge: 'Non-Slip Grip',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Dual layer anti-tear non-slip eco TPE material with carrying strap.',
    specs: {
      'Thickness': '6mm high-density joint cushion',
      'Material': 'Eco-friendly TPE (PVC & toxic free)',
      'Texture': 'Dual-sided wave & diamond grip texture',
      'Size': '183cm x 61cm (6 feet length)'
    },
    pros: [
      '6mm thickness protects knees and spine during planks and yoga poses',
      'TPE material is odorless and significantly more durable than cheap EVA foam',
      'Includes convenient carrying sling'
    ],
    cons: [
      'Cannot be washed in washing machine (wipe clean only)'
    ],
    aiVerdict: 'Essential workout accessory for floor exercises, stretching, and yoga. Excellent grip on slippery tiles.',
    alternatives: ['fit-03']
  }
];

/**
 * Helper to find a product by ID
 */
export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Search products across name, category, specs, and description
 */
export function searchProducts(query) {
  if (!query || typeof query !== 'string') return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      Object.values(p.specs).some(v => String(v).toLowerCase().includes(q))
    );
  });
}

/**
 * Filter products by category
 */
export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categorySlug);
}

/**
 * Filter products by budget
 */
export function filterProductsByBudget(products, maxBudget) {
  if (!maxBudget || maxBudget <= 0) return products;
  return products.filter(p => p.price <= maxBudget);
}

