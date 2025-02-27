import React from "react";
import "./Section.css";

const Section = ({ products }) => {
  return (
    <div className="container">
      <div className="section">
        <div className="stn-header">
          <h1>Products</h1>
          <button>Move All To Bag</button>
        </div>

        <div className="stn-all">
          {products.slice(0, 4).map((product, index) => (
            <div key={index} className="card">
              <div>
                <img src={product.image} alt={product.title} />
                {product.discount && <p className="discount">{product.discount}</p>}
              </div>
              <button>
                <i className="fa-duotone fa-solid fa-cart-shopping"></i> Add To Cart
              </button>
              <h3>{product.title}</h3>
              <p>
                ${product.price} {product.oldPrice && <del>${product.oldPrice}</del>}
              </p>
            </div>
          ))}
        </div>

        <div className="stn-all2">
          {products.slice(4, 8).map((product, index) => (
            <div key={index} className="card">
              <div>
                <img src={product.image} alt={product.title} />
                {product.discount && <p className="discount">{product.discount}</p>}
              </div>
              <button>
                <i className="fa-duotone fa-solid fa-cart-shopping"></i> Add To Cart
              </button>
              <h3>{product.title}</h3>
              <p>
                ${product.price} {product.oldPrice && <del>${product.oldPrice}</del>}
              </p>
              {product.stars && <p className="stars">⭐⭐⭐⭐⭐ (65)</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
