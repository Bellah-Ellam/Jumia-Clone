import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { ProductContext } from "../context/ProductContext";

function ProductDetail() {
const { id } = useParams();
  const { response} = useContext(ProductContext);
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
  console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:9292/products/${id}`);
        
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

  const addProduct = (product) => {
    const productWithQuantity = { ...product }; // Create a copy of the product object
    productWithQuantity.quantity = (productWithQuantity.quantity || 0) + 1; // Increase the quantity by 1 or set it to 1 if it doesn't exist
    dispatch(addCart(productWithQuantity));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-lg-6">
          <Skeleton height={400} />
        </div>
        <div className="col-lg-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {

    return (
      <>
        <div className="col-lg-6">
          <img src={product && product.image_url} alt={product && product.title} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h4 className="text-uppercase text-black-50">{product && product.category}</h4>
          <h1 className="display-5">{product && product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product && product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">Kes.{product && product.price}</h3>
          <p className="lead">{product && product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              addProduct(product);
              dispatch({ type: "INCREMENT_CART_VALUE" }); // Dispatch an action to increment the cart value
            }}>
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
