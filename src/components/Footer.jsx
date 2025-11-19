import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="fw-bold text-warning mb-3">Footdie 🍽️</h4>
            <p style={{ fontSize: "14px", color: "#ddd" }}>
              Taste the joy of fresh flavors delivered at your doorstep.  
              At <strong>Footdie</strong>, we believe great food makes great moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h5 className="fw-semibold text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#menu" className="text-light text-decoration-none">Menu</a></li>
              <li><a href="#offers" className="text-light text-decoration-none">Offers</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-semibold text-warning mb-3">Contact Us</h5>
            <p style={{ fontSize: "14px", marginBottom: "6px" }}>
              <FaMapMarkerAlt className="me-2 text-warning" />
              123 Food Street, Dehradun, India
            </p>
            <p style={{ fontSize: "14px", marginBottom: "6px" }}>
              <FaPhoneAlt className="me-2 text-warning" /> +91 98765 43210
            </p>
            <p style={{ fontSize: "14px" }}>
              <FaEnvelope className="me-2 text-warning" /> support@footdie.com
            </p>
          </div>
        </div>

        <hr className="border-secondary mt-4 mb-3" />

        {/* Social Icons */}
        <div className="text-center mb-2">
          <a href="#" className="text-light me-3 fs-5">
            <FaFacebookF />
          </a>
          <a href="#" className="text-light me-3 fs-5">
            <FaInstagram />
          </a>
          <a href="#" className="text-light me-3 fs-5">
            <FaTwitter />
          </a>
          <a href="#" className="text-light fs-5">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center" style={{ fontSize: "13px", color: "#aaa" }}>
          © {new Date().getFullYear()} <strong>Footdie</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
