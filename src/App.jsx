import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import PageNotFound from "./pages/404";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductsProvider from "./context/ProductContext";
import "./index.css";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/product" replace />} />
            <Route path="/product" element={<Product />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkOut" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
