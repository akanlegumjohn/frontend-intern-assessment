import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductListings } from "./pages/ProductListings";
import { ProductDetails } from "./pages/ProductDetails";
import { CheckoutPage } from "./pages/CheckoutPage";

import { MainLayoutWrapper } from "./Layouts/MainLayoutWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayoutWrapper />}>
          <Route index element={<ProductListings />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
