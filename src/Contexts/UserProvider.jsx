import { createContext, useContext, useEffect, useState } from "react";
import HOODIES from "../Modules/Items";

// Create a context
const UserContext = createContext();

// Provider component
export function UserProvider({ children }) {

  const [products, setProducts] = useState(HOODIES);
  const [heart, setHeart] = useState(false);

  // Parse favourites from localStorage on component mount
  const [favourites, setFavourites] = useState(() => {
    try {
      const savedFavourites = localStorage.getItem('favourites');
      return savedFavourites ? JSON.parse(savedFavourites) : [];
    } catch (error) {
      console.error("Error parsing favourites from localStorage:", error);
      return [];
    }
  });

  // Parse cart from localStorage on component mount
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Persist cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Persist favourites state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // Function to add a product to the cart, if it's not already there

  function addToCart(value) {

    const findId = value.id;

    const checkItem = cart.find((item) => item.id === findId);

    if (!checkItem) {
      setCart([...cart, value]);
      console.log(value.name)
    }
  }

  // Function to remove a product from the cart by index
  function editCart(index) {

    const editedCart = cart.filter((_, i) => i !== index);

    setCart(editedCart);
  }

  // Function to add a product to favourites, if it's not already there
  function addToFavourites(value) {

    const findId = value.id;
    const checkItem = favourites.find((item) => item.id === findId);
    if (!checkItem) {
      setFavourites([...favourites, value]);
      console.log("added to fav");
    }
    else{
      console.log("Couldn't Add to fav");
    }
  }

  // Function to remove a product from favourites by index
  function editFavourites(value) {
    // const editedFavourites = favourites.filter((_, i) => i !== index);
    // setFavourites(editedFavourites);
    // console.log("removed");
    const findId =value.id;
    const editFav= favourites.filter((item)=>item.id !== findId);
    setFavourites(editFav);
    console.log(value.id);

  }


  //function for dynamic route




  return (
    <UserContext.Provider value={{ heart, favourites, cart, addToCart, editCart, addToFavourites, editFavourites, products,  }}>
      {children}
    </UserContext.Provider>
  );
}

// Creating a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
