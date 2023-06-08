import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Fetch products
  
  useEffect(() => {
    fetch("http://127.0.0.1:9292/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching products:", error);
      });
  }, []);


  // Fetch destination by ID
  const fetchProductsId = (id) => {
    fetch(`http://127.0.0.1:9292/products/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        setCurrentProduct(response);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching products by ID:", error);
      });
  };

  const contextData = {
    products,
    // currentProduct,
    // fetchProductById,
  };

  return (
    <ProductContext.Provider value={contextData}>
      {children}
    </ProductContext.Provider>
  );
}