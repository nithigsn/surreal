import { createContext, useContext, useState, useEffect } from 'react';
import { json } from 'react-router-dom';

// 1. Create the context
const UserContext = createContext();

// 2. Create the provider component
export function UserProvider({ children }) {

  const [heart, setHeart] = useState(() => {
    const storedHeart = localStorage.getItem('heart');
    return storedHeart ? JSON.parse(storedHeart) : false;
  })


  // Initialize cart from localStorage or use an empty array if not found


  const [like, setLike] = useState(() => {
    const storedLike = localStorage.getItem('like');
    return storedLike ? JSON.parse(storedLike) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedLike = localStorage.getItem('like');
    const storedHeart = localStorage.getItem('heart');
    if (storedCart || storedLike || storedHeart) {
      setCart(storedCart ? JSON.parse(storedCart) : []);
      setLike(storedLike ? JSON.parse(storedLike) : []);
      setHeart(storedHeart ? json.parse(storedHeart) : false);
    }
  }, []);

  // Function to add an item to the cart
  function addToCart(value) {
    setCart(prevCart => {
      const newCart = [...prevCart, value];
      localStorage.setItem('cart', JSON.stringify(newCart)); // Store the updated cart in localStorage
      return newCart;
    });
  }

  function editCart(idx) {
    setCart(prevCart => {
      const newCart = prevCart.filter((_, index) => index !== idx);
      localStorage.setItem('cart', JSON.stringify(newCart)); // Store the updated cart in localStorage
      return newCart;
    });
  }

  function addToLike(value) {
    setLike(prevLike => {
      const newLike = [...prevLike, value];
      localStorage.setItem('like', JSON.stringify(newLike));
      return newLike;
    });
    if(like.includes(value)){
      setHeart(!heart);
    }
  
  }

  function editLike(idx) {
    setLike(prevLike => {
      const newLike = prevLike.filter((_, index) => index !== idx);
      localStorage.setItem('like', JSON.stringify(newLike));
      return newLike;
    });
  }

  return (
    <UserContext.Provider
      value={{
        cart, setCart,
        addToCart, editCart,
        like, setLike,
        addToLike, editLike,
        heart
      }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create the custom hook
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
