import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function ContactHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="header header--normal contact-page-header">
      <div className="container">
        <div className="contact-header-row">
          {/* Logo */}
          <div className="contact-header-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/img/logo.png" alt="DJoz Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="contact-mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            MENU <span>☰</span>
          </button>

          {/* Navigation */}
          <div
            className={`contact-header-nav ${
              menuOpen ? "contact-menu-open" : ""
            }`}
          >
            <div className="contact-mobile-heading">
              <Link
                to="/"
                className="contact-mobile-logo"
                onClick={closeMenu}
              >
                DJoz
              </Link>

              <button
                type="button"
                className="contact-mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                CLOSE ×
              </button>
            </div>

            <nav className="contact-header-menu">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to="/discography" onClick={closeMenu}>
                    Discography
                  </Link>
                </li>
                <li>
                  <Link to="/tours" onClick={closeMenu}>Tours</Link>
                </li>
                <li>
                  <Link to="/videos" onClick={closeMenu}>Videos</Link>
                </li>
                <li>
                  <Link to="/blog" onClick={closeMenu}>Blog</Link>
                </li>
                <li className="active">
                  <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="contact-header-social">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com/" aria-label="Twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://dribbble.com/" aria-label="Dribbble">
                <i className="fa fa-dribbble" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ContactHeader;
