import { Routes, Route } from "react-router-dom";
import MockAPI from './MockBee'
import Home from './Pages/Home'
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import LandingPage from "./Pages/LandingPage";
import LoginRegister from './Pages/LoginRegister'
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/mock-api' element={<MockAPI/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/landing' element={<LandingPage/>}></Route>
        <Route path='/auth' element={<LoginRegister/>}></Route>
      </Routes>
    </div>
  );
};
