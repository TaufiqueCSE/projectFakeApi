import axios from './axios';
import React, { createContext, useEffect, useState } from 'react';

// Create a context
const ProductContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  
  const getProducts = async () => {
    try {
      const res = await axios("/products");
      setProducts(res.data); // This will log the whole response object
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider; 
export { ProductContext }; 
