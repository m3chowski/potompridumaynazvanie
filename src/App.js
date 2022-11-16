import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { ProductPage } from "./pages/Products-Page";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div>
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route
            path="/products/category/:category"
            element={<ProductPage />}
          />
          <Route path="*" element={<Navigate to={"/products"} replace />} />
        </Routes>
      </div>
    </div>
  );
};
