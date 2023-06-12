import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    let componentMounted = true; // Declare componentMounted inside the useEffect hook
  
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:9292/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };
  
    getProducts();
  
    return () => {
      componentMounted = false; // Update the value when the component unmounts
    };
  }, []);

  const Loading = () => {
    return (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>);
  };

  const filterProduct =(cat)=>{
    const updatedList = data.filter((x)=>x.category===cat);
    setFilter(updatedList)
    
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center flex-wrap mb-5 pb-5">

          <button className="btn btn-outline-dark me-2" 
          onClick={()=> setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=> filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=> filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2"
          onClick={()=> filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div
                className="col-lg-3 col-md-6 col-sm-12 mb-4"
                key={product.id}
              >
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image_url}
                    className="card-img-top"
                    alt={product.title}
                    style={{ maxHeight: "250px", width: "100%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">
                      Kes.{product.price}
                    </p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;
