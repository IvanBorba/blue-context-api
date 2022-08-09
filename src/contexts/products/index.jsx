import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml2YW5AYmx1ZS5jb20iLCJpYXQiOjE2NjAwMDgxMzMsImV4cCI6MTY2MDA5NDUzM30.ArmunpBcADqYGyFE6vDAsTD4K5-wmwB0HoMIAx_33OE";

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        "https://blue-hamburgueria-production.up.railway.app/products",
        headers
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, handleGetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
