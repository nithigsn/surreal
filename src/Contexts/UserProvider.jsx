import { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

//  provider component
export function UserProvider({ children }) {

  const [heart, setHeart] = useState(false);



  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);


  function addToCart(value) {
    setCart([...cart, value])
  }

  function editCart(index) {
    const editedCart = cart.filter((_, i) => i !== index);
    setCart(editedCart);
  }

  function addToFavourites(value){
    setFavourites([...favourites,value]);
  }

  function editFavourites(index){
    const editedfavourites = favourites.filter((_, i ) => i !== index);
    setFavourites(editFavourites);
  }



  return (
    <UserContext.Provider value={{ heart, favourites, cart, addToCart, editCart ,addToFavourites,editFavourites}}>
      {children}
    </UserContext.Provider>
  );
}


// Creating a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
