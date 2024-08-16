import { createContext, useContext, useEffect, useState } from "react";
import HOODIES from "../Modules/Items";

// Create a context
const UserContext = createContext();

// Provider component
export function UserProvider({ children }) {

  const[products,setProducts]=useState(HOODIES);

  const [heart, setHeart] = useState(false);

  // Safely retrieve and parse favourites from localStorage
  const [favourites, setFavourites] = useState(() => {
    try {
      const savedFavourites = localStorage.getItem('favourites');
      return savedFavourites ? JSON.parse(savedFavourites) : [];
    } catch (error) {
      console.error("Error parsing favourites from localStorage:", error);
      return [];
    }
  });

  // Safely retrieve and parse cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Persist cart state to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Persist favourites state to localStorage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  function addToCart(value) {
    if (!cart.includes(value)) {
      setCart([...cart, value]);
    }
    else{
      console.log("Already in a cart")
    }

  }

  function editCart(index) {
    const editedCart = cart.filter((_, i) => i !== index);
    setCart(editedCart);
  }

  function addToFavourites(value) {

   if(!favourites.includes(value)){
    setFavourites([...favourites, value]);
   }
   
  }

  function editFavourites(index) {
    const editedFavourites = favourites.filter((_, i) => i !== index);
    setFavourites(editedFavourites);
  }

  return (
    <UserContext.Provider value={{ heart, favourites, cart, addToCart, editCart, addToFavourites, editFavourites,products }}>
      {children}
    </UserContext.Provider>
  );
}

// Creating a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
