import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductListings } from "./pages/ProductListings";
import { ProductDetails } from "./pages/ProductDetails";
import { Navbar } from "./components/Navbar";

import { MainLayoutWrapper } from "./Layouts/MainLayoutWrapper";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayoutWrapper />}>
          <Route index element={<ProductListings />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
