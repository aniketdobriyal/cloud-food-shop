import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductRow() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const CARD_SECTION_WIDTH = "700px"; // adjust to fit exactly 4 cards

  return (
    <div className="container my-5 text-center "> 
    
      {/* Title Section */}
      <div
        className="mx-auto text-start"
        style={{ maxWidth: CARD_SECTION_WIDTH }}
      >
        <h4 className="fw-bold mb-4">Popular Products</h4>
      </div>

      {/* Product Row */}
      <div
        className="d-flex justify-content-center gap-3 flex-nowrap"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="card text-center"
            style={{
              width: "160px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "100%",
                height: "120px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="card-body p-2">
              <h6 className="card-title mb-1 text-truncate">{item.name}</h6>
              <p className="text-muted small mb-1">₹{item.price}</p>
              <button
                className="btn btn-sm fw-bold w-100"
                style={{
                  borderColor: "#0ca3a1",
                  color: "#0ca3a1",
                  background: "transparent",
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
