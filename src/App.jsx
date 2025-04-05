import { Navigate, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import PageNotFound from "./pages/404"
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductsProvider from "./context/ProductContext";
import "./index.css"

function App() {

  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkOut" element={<CheckOutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App
