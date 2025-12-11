import { useState, useEffect } from "react";
import { GiHamburger } from "react-icons/gi";

export default function HeroSection({ 
  cartItems = [], 
  cartOpen = false, 
  onRemoveFromCart, 
  toggleCart, 
  cartCount = 0,
  calculateCartTotal 
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Calculate delivery and total
  const calculateDelivery = () => 2.99;
  const calculateTotal = () => {
    const subtotal = calculateCartTotal ? calculateCartTotal() : 0;
    return subtotal + calculateDelivery();
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shadow">
                 <GiHamburger className="text-[20px] text-amber-400"/>
                </div>
                <div>
                  <span className="block text-lg font-bold text-gray-800">FastBite</span>
                  <span className="block text-xs text-gray-500">Fast food & delivery</span>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-gray-700 hover:text-yellow-500">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-yellow-500">Menu</a>
              <a href="#offers" className="text-gray-700 hover:text-yellow-500">Offers</a>
              {/* <a href="#locations" className="text-gray-700 hover:text-yellow-500">Locations</a> */}
              <a href="#contact" className="text-gray-700 hover:text-yellow-500">Contact</a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search (desktop only) */}
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search burgers, fries..."
                    className="w-64 px-3 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <a href="#order" className="hidden sm:inline-block px-4 py-2 bg-yellow-500 text-white rounded-full font-medium shadow hover:bg-yellow-600">
                Order Now
              </a>

              {/* Cart Button */}
              <button 
                className="relative p-2 rounded-full hover:bg-gray-100"
                onClick={toggleCart}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13L5.4 5" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Dropdown */}
        {cartOpen && (
          <div className="absolute right-4 top-16 md:right-8 z-50 w-80 bg-white rounded-xl shadow-2xl border border-gray-100">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Your Cart ({cartCount} items)</h3>
                <button 
                  onClick={toggleCart}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cartItems && cartItems.length > 0 ? (
                <>
                  <div className="max-h-80 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-500 truncate">{item.description}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="font-bold text-yellow-600">{item.discountedPrice}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">Qty: {item.quantity || 1}</span>
                              <button 
                                onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-bold text-lg">${calculateCartTotal ? calculateCartTotal().toFixed(2) : "0.00"}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Delivery</span>
                      <span className="font-bold">$2.99</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Total</span>
                      <span className="font-bold text-xl text-yellow-600">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg">
                      Checkout Now
                    </button>
                    
                    <button className="w-full mt-2 border border-yellow-500 text-yellow-500 font-medium py-3 rounded-lg hover:bg-yellow-50 transition-all">
                      View Cart
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13L5.4 5" />
                    </svg>
                  </div>
                  <h4 className="text-gray-600 font-medium mb-2">Your cart is empty</h4>
                  <p className="text-gray-500 text-sm">Add delicious items from our offers!</p>
                  <a 
                    href="#offers"
                    onClick={toggleCart}
                    className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-600"
                  >
                    Browse Offers
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#" className="block text-gray-700 py-2">Home</a>
              <a href="#menu" className="block text-gray-700 py-2">Menu</a>
              <a href="#offers" className="block text-gray-700 py-2">Offers</a>
              <a href="#locations" className="block text-gray-700 py-2">Locations</a>
              <a href="#contact" className="block text-gray-700 py-2">Contact</a>
              <a href="#order" className="block mt-2 w-full text-center px-4 py-3 bg-yellow-500 text-white rounded-full font-medium">Order Now</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <section className="relative bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">Delicious Fast Food Delivered Fast</h1>
            <p className="mt-4 text-gray-600 text-lg sm:text-xl">From burgers to fries, satisfy your cravings with our speedy delivery.</p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              <a href="#order" className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold shadow hover:bg-yellow-600">Order Now</a>
              <a href="#menu" className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-100">View Menu</a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" alt="Fast Food Hero" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>
    </>
  );
}