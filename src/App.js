import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { CartPage } from "./pages/Cart-Page/Cart-Page";
import { ItemPage } from "./pages/Item-Page/Item-Page";
import { ProductPage } from "./pages/Products-Page";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div>
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          {/* <Route path="/products?:page" element={<ProductPage />} /> */}
          <Route path="/products/:id" element={<ItemPage />} />
          <Route
            path="/products/category/:category"
            element={<ProductPage />}
          />
          {/* <Route
            path="/products/category/:category:page"
            element={<ProductPage />}
          /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to={"/products"} replace />} />
        </Routes>
      </div>
    </div>
  );
};
