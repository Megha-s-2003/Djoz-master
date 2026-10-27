 import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./About.css";

function AboutHeader() {
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
    <header className="header header--normal about-page-header">
      <div className="container">
        <div className="about-header-row">
          {/* Logo */}
          <div className="about-header-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/img/logo.png" alt="DJoz Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="about-mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            MENU <span>☰</span>
          </button>

          {/* Navigation */}
          <div
            className={`about-header-nav ${
              menuOpen ? "about-menu-open" : ""
            }`}
          >
            <div className="about-mobile-heading">
              <Link to="/" className="about-mobile-logo" onClick={closeMenu}>
                DJoz
              </Link>

              <button
                type="button"
                className="about-mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                CLOSE ×
              </button>
            </div>
<nav className="about-header-menu">
  <ul>
    <li>
      <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/about" onClick={closeMenu}>About</NavLink>
    </li>
    <li>
      <NavLink to="/discography" onClick={closeMenu}>Discography</NavLink>
    </li>
    <li>
      <NavLink to="/tours" onClick={closeMenu}>Tours</NavLink>
    </li>
    <li>
      <NavLink to="/videos" onClick={closeMenu}>Videos</NavLink>
    </li>
    <li>
      <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
    </li>
    <li>
      <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
    </li>
  </ul>
</nav>
            {/* <nav className="about-header-menu">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className="active">
                  <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to="/discography" onClick={closeMenu}>Discography</Link>
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
                <li>
                  <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
              </ul>
            </nav> */}

            <div className="about-header-social">
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

export default AboutHeader;
