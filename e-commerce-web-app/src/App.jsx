import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProductListings } from "./pages/ProductListings";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { ProductDetails } from "./pages/ProductDetails";
import { CheckoutPage } from "./pages/CheckoutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { MainLayoutWrapper } from "./Layouts/MainLayoutWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayoutWrapper />}>
            <Route index element={<ProductListings />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout-successful" element={<CheckoutSuccess />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
