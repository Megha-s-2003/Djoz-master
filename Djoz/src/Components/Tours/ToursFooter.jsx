
import { useState } from "react";
import "./Tours.css";

export default function ToursFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect newsletter API here when available.
    setEmail("");
  };

  return (
    <footer className="djfooter">
      {/* Decorative wave */}
      <svg
        className="djfooter__wave"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,10 C260,-10 640,30 960,120 C1180,182 1340,170 1440,100 L1440,240 L0,240 Z"
          fill="#7a5f8f"
        />
        <path
          d="M0,48 C260,20 640,50 960,140 C1180,200 1340,196 1440,128 L1440,240 L0,240 Z"
          fill="#3a1558"
          opacity="0.9"
        />
        <path
          d="M0,70 C300,50 700,90 1000,160 C1200,205 1350,200 1440,150 L1440,240 L0,240 Z"
          fill="#270847"
        />
      </svg>

      <div className="djfooter__body">
        <div className="djfooter__container">

          {/* Contact */}
          <div className="djfooter__col djfooter__contact">
            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </span>
              <div>
                <p className="djfooter__label">Phone</p>
                <p className="djfooter__value">1-677-124-44227</p>
              </div>
            </div>

            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
              <div>
                <p className="djfooter__label">Email</p>
                <p className="djfooter__value">DJ.Music@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Logo and social links */}
          <div className="djfooter__col djfooter__brand">
            <h2 className="djfooter__logo">DJoz</h2>

            <div className="djfooter__social">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/" aria-label="Twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://dribbble.com/" aria-label="Dribbble">
                <i className="fa fa-dribbble" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="djfooter__col djfooter__news">
            <h3 className="djfooter__title">Stay With Me</h3>

            <form className="djfooter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fa fa-paper-plane-o" aria-hidden="true" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="djfooter__copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()} DJoz.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
