import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer_container mt-5">
      <section className="custom_footer_top py-5 px-3 text-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <Logo></Logo>
              <p className="mt-4">
                Yoga is the perfect way to get a good workout no matter what
                your age or athletic ability.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h3 className="mb-3">Links</h3>
              <nav className="nav flex-column">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
                <Link className="nav-link text-white" to="/Services">
                  Services
                </Link>
                <Link className="nav-link text-white" to="/free-class">
                  Free Class
                </Link>
                <Link className="nav-link text-white" to="/trainer">
                  Contact With Trainer
                </Link>
              </nav>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h3 className="mb-3">Contact Info</h3>
              <p>
                1810 Kings Way <br />
                King Street, 5th Avenue, New York
              </p>
              <p>
                <FiPhoneCall className="custom_color me-3"></FiPhoneCall>
                +8801712942637
              </p>
              <p>
                <BiEnvelope className="custom_color me-3"></BiEnvelope>
                mohammedsagar30@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="p-4 text-center custom_footer_bottom text-muted">
        Copyright &copy; Mohammed Sagar Ali. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
