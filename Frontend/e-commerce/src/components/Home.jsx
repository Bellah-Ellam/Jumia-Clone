import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="../assets/bg.jpg"
          className="card-img"
          alt="Background"
          style={{ maxHeight: '550px', width: '100%' }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
