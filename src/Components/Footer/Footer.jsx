import React from "react";
import "./Footer.css";
import { assets } from "../../Assets/Assets";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="logoside">
          <img src={assets.Logo} alt="" />
          <ul className="social">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        <ul className="service-footer">
          <h3>Services</h3>
          <li>Visa Assistance</li>
          <li>Translation</li>
          <li>New Business Setup</li>
          <li>Legal Support</li>
        </ul>
        <ul className="company">
          <h3>Company</h3>
          <li>About Us</li>
          <li>Contact Info</li>
          <li>Our Service</li>
          <li>Blog</li>
        </ul>
        <form action="">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="bottom-footer">
        <ul className="copyright">
          <li>Copyright © 2024 BARAA GLOBAL</li>
          <li>Design by ADALINE</li>
        </ul>
        <ul className="terms">
          <li>Term of use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
