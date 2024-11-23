import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = ({ products,category }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mt-4">
      <h1>{category} Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div
              className={`card ${product.stock === 0 ? "out-of-stock" : ""}`}
            >
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-price">Price: ₹{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleProductClick(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock === 0 ? "No Stock" : "View Details"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
