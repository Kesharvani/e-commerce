import { Routes, Route } from "react-router-dom";
import MockAPI from "./MockBee";
import { Home } from "./Pages/index";
import { Wishlist } from "./Pages/index";
import { Cart } from "./Pages/index";
import { LandingPage } from "./Pages/index";
import { LoginRegister } from "./Pages/index";
import { IndividualPage } from "./Pages/index";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock-api" element={<MockAPI />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/landing" element={<LandingPage />}></Route>
        <Route path="/auth" element={<LoginRegister />}></Route>
        <Route path="/individual/:id" element={<IndividualPage />}></Route>
      </Routes>
    </div>
  );
};
