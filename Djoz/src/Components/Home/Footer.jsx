
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {/* Event button section */}
      {/* <div className="footer__top">
        <a href="/contact" className="primary-btn">
          BUY TICKETS
        </a>
      </div> */}

      {/* Footer information */}
      <div className="footer__content">
        <div className="container">
          <div className="row align-items-center">

            {/* Contact information */}
            <div className="col-lg-4">
              <div className="footer__address">
                <div className="footer__contact-item">
                  <span className="footer__icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  <div>
                    <p>Phone</p>
                    <h6>1-677-124-44227</h6>
                  </div>
                </div>

                <div className="footer__contact-item">
                  <span className="footer__icon">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <div>
                    <p>Email</p>
                    <h6>DJ.Music@gmail.com</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo and social media */}
            <div className="col-lg-4">
              <div className="footer__logo">
                <a href="/">DJoz</a>
              </div>

              <div className="footer__social">
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://dribbble.com/" aria-label="Dribbble">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>

            {/* Email subscription */}
            <div className="col-lg-4">
              <div className="footer__newsletter">
                <h4>Stay With me</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Email" />
                  <button type="submit" aria-label="Subscribe">
                    <i className="fa fa-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>

          <div className="footer__copyright">
            Copyright © 2026 All rights reserved | This template is made
            with <i className="fa fa-heart"></i> by
            <a href="https://colorlib.com/" target="_blank" rel="noreferrer">
              Colorlib
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
