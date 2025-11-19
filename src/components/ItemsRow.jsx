import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPizzaSlice, FaHamburger, FaCoffee, FaIceCream } from "react-icons/fa";

export default function ItemRow() {
  return (
    <div className="container my-4">
      {/* Use g-1 to reduce space between columns */}
      <div className="row justify-content-center text-center g-1">
        {/* Pizza */}
        <div className="col-3 col-sm-2 col-md-2">
          <FaPizzaSlice size={30} color="#ff7043" />
          <h6 className="mt-2" style={{ fontSize: "13px" }}>Pizza</h6>
        </div>

        {/* Burger */}
        <div className="col-3 col-sm-2 col-md-2">
          <FaHamburger size={30} color="#ffb300" />
          <h6 className="mt-2" style={{ fontSize: "13px" }}>Burger</h6>
        </div>

        {/* Coffee */}
        <div className="col-3 col-sm-2 col-md-2">
          <FaCoffee size={30} color="#795548" />
          <h6 className="mt-2" style={{ fontSize: "13px" }}>Coffee</h6>
        </div>

        {/* Ice Cream */}
        <div className="col-3 col-sm-2 col-md-2">
          <FaIceCream size={30} color="#e91e63" />
          <h6 className="mt-2" style={{ fontSize: "13px" }}>Ice Cream</h6>
        </div>
      </div>

      <hr style={{height:"1.5px",background:"black"}}/>
    </div>
  );
}
