import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ProductPage } from "./pages/Products-Page/Products-Page";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
};
