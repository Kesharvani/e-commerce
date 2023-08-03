import { Routes, Route } from "react-router-dom";
import MockAPI from "./MockBee";
import React, { Suspense } from "react";

import { RequireAuth } from "./Components/requireAuth/RequireAuth";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Wishlist = React.lazy(() => import("./Pages/Wishlist/Wishlist"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const IndividualPage = React.lazy(() =>
  import("./Pages/IndividualPage/IndividualPage")
);
const LandingPage = React.lazy(() => import("./Pages/LandingPage/LandingPage"));
const LoginRegister = React.lazy(() =>
  import("./Pages/LoginRegister/LoginRegister")
);
const UserProfile = React.lazy(() => import("./Pages/UserProfile/UserProfile"));
const UserAddress = React.lazy(() => import("./Pages/UserAddress/UserAddress"));
const Checkout = React.lazy(() => import("./Pages/Checkout/Checkout"));
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock-api" element={<MockAPI />}></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>something wend wrong</h1>}>
              <Home />
            </Suspense>
          }
        ></Route>

        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Suspense fallback={<h1>something wend wrong</h1>}>
                <Wishlist />
              </Suspense>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Suspense>
                <Cart />
              </Suspense>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/landing"
          element={
            <Suspense>
              <LandingPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <Suspense>
              <LoginRegister />
            </Suspense>
          }
        ></Route>
        <Route
          path="/individual/:_id"
          element={
            <Suspense>
              <IndividualPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <Suspense>
              <UserProfile />
            </Suspense>
          }
        ></Route>
        <Route
          path="/useraddress"
          element={
            <Suspense>
              <UserAddress />
            </Suspense>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Suspense>
              <Checkout />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};
