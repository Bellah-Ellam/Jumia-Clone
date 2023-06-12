import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router";

export const ProductContext = createContext();

export const ProductProvider = ({ children}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://alimama.onrender.com/products/${id}`);
        console.log(response,'string')
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        // Handle the error, e.g., display an error message or fallback content
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <ProductContext.Provider value={{ product, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
