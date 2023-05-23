import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContext } from "./Contexts/ProductContext";
import { Router } from "./Router";
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContext>
        <App />
        <Router />
      </ProductContext>
    </BrowserRouter>
  </React.StrictMode>
);
