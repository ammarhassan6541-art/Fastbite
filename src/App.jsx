import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSec'
import { MenuSection } from './MenuSec'
import About from './About'
import OffersSection from './Offers'
import ContactSection from './Contact'
import img from '../public/images-removebg-preview.png'

function App() {
  // Cart state management
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  let [loading , setloading ] = useState(false)

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Toggle cart dropdown
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Calculate cart total
  const calculateCartTotal = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.discountedPrice.replace('$', ''));
      return total + (price * (item.quantity || 1));
    }, 0);
  };

  // Calculate cart count
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);


  useEffect(()=> {
    setloading(true)

    setTimeout(()=> {

      setloading(false)
    }, 2000)

  }, [])


if (loading) {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-50'>
      <img 
        className='w-48 h-auto mb-4 animate-pulse' 
        src={img} 
        alt="Loading..." 
      />
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading delicious deals...</p>
    </div>
  )


  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        cartItems={cartItems}
        cartOpen={cartOpen}
        onRemoveFromCart={handleRemoveFromCart}
        toggleCart={toggleCart}
        cartCount={cartCount}
        calculateCartTotal={calculateCartTotal}
      />
      
      <About/>
      <MenuSection 
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      
      <OffersSection 
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cartCount={cartCount}
      />
      
      <ContactSection/>
    </div>
  )
}

export default App