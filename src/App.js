import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Links from "./Components/Links";
import ProfilePage from "./Pages/ProfilePage";
import Main from "./Pages/Main";
import HoodiesPage from "./Pages/HoodiesPage";
import TestPage from "./Pages/TestPage";
import LikedPage from "./Pages/LikedPage";
import { UserProvider } from "./Contexts/UserProvider";
import CartPage from "./Pages/CartPage";
import Tshirt from "./Pages/Tshirt";









export default function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Header />
        <Links />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/hoodie" element={<HoodiesPage />} />
          <Route path="tshirt" element={<Tshirt/>}/>
          <Route path='/test' element={<TestPage />} />
          <Route path="/favourite" element={<LikedPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
