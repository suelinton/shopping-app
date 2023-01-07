import { Route, Routes } from "react-router-dom";
import { ProductListPage } from "../pages/ProductListPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";

export const Endpoints = () => (
  <Routes>
    <Route path="/" element={<ProductListPage />} />
    <Route path="cart" element={<ShoppingCartPage />} />
  </Routes>
);
