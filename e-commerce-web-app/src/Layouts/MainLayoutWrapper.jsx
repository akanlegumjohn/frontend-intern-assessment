import { useState, useEffect, createContext } from "react";

import { MainLayout } from "./MainLayout";

export const ProductContext = createContext();

export const MainLayoutWrapper = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>
      <MainLayout>{children}</MainLayout>
    </ProductContext.Provider>
  );
};
