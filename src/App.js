import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Links from "./Components/Links";
import ProfilePage from "./Pages/ProfilePage";
import Main from "./Pages/Main";
import HoodiesPage from "./Pages/HoodiesPage";
import LikedPage from "./Pages/LikedPage";
import { UserProvider } from "./Contexts/UserProvider";
import CartPage from "./Pages/CartPage";
import Tshirt from "./Pages/Tshirt";
import HoodieDetails from "./Pages/DetailsPage/HoodieDetails";
import Footer from "./Components/Footer";
import Sweatshirts from "./Pages/Sweatshirts";
import CapsPage from "./Pages/CapsPage";
import CapDetails from "./Pages/DetailsPage/CapDetails";
import TshirtDetails from "./Pages/DetailsPage/TshirtDetails";
import SweatshirtDetails from "./Pages/DetailsPage/SweatshirtDetails";
import MobileSearchBar from "./Components/MobileSearchBar";









export default function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Header />
        <Links />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<MobileSearchBar />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/hoodie" element={<HoodiesPage />} />
          <Route path='/hoodie/:id' element={<HoodieDetails />} />
          <Route path="/tshirt" element={<Tshirt />} />
          <Route path="/caps" element={<CapsPage />} />
          <Route path='/caps/:id' element={<CapDetails />} />
          <Route path='/tshirt/:id' element={<TshirtDetails />} />
          <Route path='/sweatshirt/:id' element={<SweatshirtDetails />} />
          <Route path="sweatshirts" element={<Sweatshirts />} />
          <Route path="/favourite" element={<LikedPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}
