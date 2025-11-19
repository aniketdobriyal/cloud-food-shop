import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
    <section className="hero d-flex align-items-center justify-content-center  text-white">
      <div className="container ">
        <h1 className=" fw-bold">Taste the moment <br />Order Fresh</h1>

  <a href="#projects" className="btn btn-primary fw-bold my-3 rounded-5 btn-lg" style={{background:"#0ca3a1",borderColor:"#0ca3a1"}}>
          Order Now
        </a>
     
        <a href="#projects" className="btn btn-transparent border text-white btn-lg mx-4">
          Explore My Work
        </a>
      </div>
      
    </section>

    

      </>
  );
}
