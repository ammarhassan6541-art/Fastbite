import { useState, useEffect } from "react";
import { 
  FaTag, FaClock, FaFire, FaStar, FaBolt, FaShoppingCart, 
  FaChevronRight, FaCheck, FaHamburger, FaPizzaSlice, 
  FaIceCream, FaCookieBite, FaDrumstickBite, FaBacon, 
  FaUtensils, FaGlassMartiniAlt, FaHotdog, FaFish 
} from "react-icons/fa";

export default function OffersSection({ 
  cartItems = [], 
  onAddToCart, 
  onRemoveFromCart,
  cartCount = 0 
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  // Initial offers data - Updated with food types
  const initialOffers = [
    {
      id: 1,
      title: "Mega Burger Combo",
      description: "Double Whopper + Medium Fries + Coke",
      originalPrice: "$18.99",
      discountedPrice: "$12.99",
      discount: "32% OFF",
      category: "combo",
      foodType: "burger",
      badge: "Popular",
      badgeColor: "bg-red-500",
      expiresIn: "4 hours",
      rating: 4.8,
      orders: "1.2k",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Family Pizza Feast",
      description: "2 Large Pizzas + Garlic Bread + 1.5L Drink",
      originalPrice: "$35.99",
      discountedPrice: "$24.99",
      discount: "30% OFF",
      category: "combo",
      foodType: "pizza",
      badge: "Limited",
      badgeColor: "bg-purple-500",
      expiresIn: "Today",
      rating: 4.6,
      orders: "890",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Chicken Bucket Deal",
      description: "10pc Chicken + 2 Large Sides + 4 Biscuits",
      originalPrice: "$28.99",
      discountedPrice: "$19.99",
      discount: "31% OFF",
      category: "exclusive",
      foodType: "chicken",
      badge: "Exclusive",
      badgeColor: "bg-yellow-500",
      expiresIn: "2 days",
      rating: 4.9,
      orders: "2.1k",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Free Fries Friday",
      description: "Any Burger + Free Medium Fries",
      originalPrice: "$10.49",
      discountedPrice: "$10.49",
      discount: "FREE",
      category: "discount",
      foodType: "burger",
      badge: "Friday Only",
      badgeColor: "bg-blue-500",
      expiresIn: "1 day",
      rating: 4.5,
      orders: "3.4k",
      image: "https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=500&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Taco Fiesta Bundle",
      description: "6 Tacos + Nachos + 2 Drinks",
      originalPrice: "$22.99",
      discountedPrice: "$15.99",
      discount: "30% OFF",
      category: "combo",
      foodType: "mexican",
      badge: "Hot Deal",
      badgeColor: "bg-orange-500",
      expiresIn: "6 hours",
      rating: 4.4,
      orders: "760",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Ice Cream Madness",
      description: "Buy 1 Get 1 Free on All Ice Creams",
      originalPrice: "$8.98",
      discountedPrice: "$4.49",
      discount: "50% OFF",
      category: "discount",
      foodType: "dessert",
      badge: "Sweet Deal",
      badgeColor: "bg-pink-500",
      expiresIn: "3 days",
      rating: 4.7,
      orders: "1.5k",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "New: Spicy Chicken",
      description: "Spicy Chicken Sandwich Combo",
      originalPrice: "$11.99",
      discountedPrice: "$8.99",
      discount: "25% OFF",
      category: "new",
      foodType: "chicken",
      badge: "New Item",
      badgeColor: "bg-green-500",
      expiresIn: "1 week",
      rating: 4.8,
      orders: "420",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Weekend Special",
      description: "Any Footlong at 6-inch Price",
      originalPrice: "$9.99",
      discountedPrice: "$5.99",
      discount: "40% OFF",
      category: "exclusive",
      foodType: "sandwich",
      badge: "Weekend",
      badgeColor: "bg-indigo-500",
      expiresIn: "Sunday",
      rating: 4.3,
      orders: "980",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Fresh Juice Combo",
      description: "3 Fresh Juices + Fruit Salad",
      originalPrice: "$15.99",
      discountedPrice: "$10.99",
      discount: "31% OFF",
      category: "combo",
      foodType: "drinks",
      badge: "Healthy",
      badgeColor: "bg-green-500",
      expiresIn: "2 days",
      rating: 4.7,
      orders: "650",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "Soft Drink Pack",
      description: "6 Cans of Soft Drinks + Free Chips",
      originalPrice: "$12.99",
      discountedPrice: "$8.99",
      discount: "30% OFF",
      category: "discount",
      foodType: "drinks",
      badge: "Refresh",
      badgeColor: "bg-blue-500",
      expiresIn: "5 days",
      rating: 4.3,
      orders: "1.1k",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop",
    },
    {
      id: 11,
      title: "Pizza Party Pack",
      description: "4 Medium Pizzas + 4 Drinks",
      originalPrice: "$45.99",
      discountedPrice: "$32.99",
      discount: "28% OFF",
      category: "combo",
      foodType: "pizza",
      badge: "Party",
      badgeColor: "bg-purple-500",
      expiresIn: "3 days",
      rating: 4.9,
      orders: "2.5k",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format&fit=crop",
    },
    {
      id: 12,
      title: "Grilled Chicken Special",
      description: "Grilled Chicken with Rice & Salad",
      originalPrice: "$16.99",
      discountedPrice: "$11.99",
      discount: "29% OFF",
      category: "exclusive",
      foodType: "chicken",
      badge: "Grilled",
      badgeColor: "bg-orange-500",
      expiresIn: "1 day",
      rating: 4.8,
      orders: "1.8k",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop",
    },
  ];

  const [offers, setOffers] = useState(initialOffers);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Categories with React Icons - Updated counts
  const categories = [
    { 
      id: "all", 
      name: "All Deals", 
      icon: <FaFire className="text-lg" />, 
      count: offers.length 
    },
    { 
      id: "combo", 
      name: "Combos", 
      icon: <FaHamburger className="text-lg" />, 
      count: offers.filter(o => o.category === "combo").length
    },
    { 
      id: "exclusive", 
      name: "Exclusive", 
      icon: <FaStar className="text-lg" />, 
      count: offers.filter(o => o.category === "exclusive").length
    },
    { 
      id: "discount", 
      name: "Discounts", 
      icon: <FaTag className="text-lg" />, 
      count: offers.filter(o => o.category === "discount").length
    },
    { 
      id: "new", 
      name: "New", 
      icon: <FaBolt className="text-lg" />, 
      count: offers.filter(o => o.category === "new").length
    },
    { 
      id: "burger", 
      name: "Burgers", 
      icon: <FaHamburger className="text-lg" />, 
      count: offers.filter(o => o.foodType === "burger").length
    },
    { 
      id: "pizza", 
      name: "Pizza", 
      icon: <FaPizzaSlice className="text-lg" />, 
      count: offers.filter(o => o.foodType === "pizza").length
    },
    { 
      id: "chicken", 
      name: "Chicken", 
      icon: <FaDrumstickBite className="text-lg" />, 
      count: offers.filter(o => o.foodType === "chicken").length
    },
    { 
      id: "drinks", 
      name: "Drinks", 
      icon: <FaGlassMartiniAlt className="text-lg" />, 
      count: offers.filter(o => o.foodType === "drinks").length
    },
    { 
      id: "dessert", 
      name: "Desserts", 
      icon: <FaIceCream className="text-lg" />, 
      count: offers.filter(o => o.foodType === "dessert").length
    },
  ];

  // Filter offers based on active category - Corrected logic
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredOffers(offers);
    } else if (["combo", "exclusive", "discount", "new"].includes(activeCategory)) {
      // For main categories
      setFilteredOffers(offers.filter(offer => offer.category === activeCategory));
    } else {
      // For food type categories
      setFilteredOffers(offers.filter(offer => offer.foodType === activeCategory));
    }
  }, [activeCategory, offers]);

  // Check if item is in cart
  const isItemInCart = (offerId) => {
    return cartItems.some(item => item.id === offerId);
  };

  // Handle add to cart
  const handleAddToCart = (offer) => {
    if (onAddToCart) {
      onAddToCart(offer);
    }
  };

  // Handle remove from cart
  const handleRemoveFromCart = (offerId) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(offerId);
    }
  };

  return (
    <section id="offers" className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Cart Count */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <FaTag className="text-sm" />
            <span className="font-semibold">Hot Deals</span>
            {cartCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount} in cart
              </span>
            )}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sizzling Offers Just For You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't miss out on these amazing deals! Limited time offers from your favorite restaurants.
          </p>
        </div>

        {/* Flash Sale Timer */}
        <div className="mb-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <FaBolt className="text-2xl animate-pulse" />
                <h3 className="text-2xl font-bold">FLASH SALE</h3>
              </div>
              <p className="opacity-90">Hurry! These deals won't last long</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <span className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <div className="text-xs opacity-80">Hours</div>
                </div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <span className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <div className="text-xs opacity-80">Minutes</div>
                </div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <span className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <div className="text-xs opacity-80">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter - React Icons ke saath */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id 
                  ? "bg-yellow-500 text-white shadow-lg transform -translate-y-1" 
                  : "bg-white text-gray-700 hover:bg-yellow-50 shadow-md hover:shadow-lg"}`}
              >
                <div className={`p-2 rounded-full ${activeCategory === category.id 
                  ? "bg-white/20" 
                  : "bg-yellow-100 text-yellow-600"}`}>
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full min-w-8 text-center ${activeCategory === category.id 
                  ? "bg-white/30" 
                  : "bg-gray-100 text-gray-600"}`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredOffers.map((offer) => {
            const isInCart = isItemInCart(offer.id);
            return (
              <div 
                key={offer.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              >
                {/* Offer Image with Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${offer.badgeColor} text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}>
                      <FaFire className="text-xs" />
                      {offer.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-600 font-bold px-3 py-2 rounded-xl shadow-lg">
                    {offer.discount}
                  </div>
                </div>

                {/* Offer Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{offer.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {offer.foodType.charAt(0).toUpperCase() + offer.foodType.slice(1)}
                        </span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                          {offer.category.charAt(0).toUpperCase() + offer.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    {isInCart && (
                      <span className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <FaCheck className="text-xs" />
                        In Cart
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 text-sm">{offer.description}</p>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{offer.discountedPrice}</span>
                      {offer.originalPrice !== offer.discountedPrice && (
                        <span className="text-gray-400 line-through ml-2">{offer.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <FaStar className="text-sm" />
                      <span className="font-semibold">{offer.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({offer.orders}+)</span>
                    </div>
                  </div>

                  {/* Expiry & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaClock className="text-gray-400" />
                      <span>Expires in <strong>{offer.expiresIn}</strong></span>
                    </div>
                    {isInCart ? (
                      <button 
                        onClick={() => handleRemoveFromCart(offer.id)}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span className="font-semibold">Remove</span>
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleAddToCart(offer)}
                        className="flex items-center w-28 text-[12px] h-12 gap-2 bg-gradient-to-r pl-4 from-yellow-500 to-yellow-600 pl-2 pb-1 text-white  rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg group-hover:gap-3"
                      >
                        <FaShoppingCart />
                        <span className="font-semibold">Add to Cart</span>
                        {/* <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-all" /> */}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <FaFire className="animate-pulse" />
            View All 56+ Offers
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 text-sm mt-4">New deals added daily • Limited quantities available</p>
        </div>
      </div>
    </section>
  );
}