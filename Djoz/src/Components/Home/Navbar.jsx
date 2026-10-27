// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../assets/css/style.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="header ">
//       <div className="header__container">
//         {/* Logo */}
//         <div className="header__logo">
//           <Link to="/" onClick={closeMenu}>
//             <img src="/img/logo.png" alt="DJoz" />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="header__mobile-toggle"
//           onClick={() => setMenuOpen(true)}
//           aria-label="Open navigation menu"
//           aria-expanded={menuOpen}
//         >
//           MENU <span>☰</span>
//         </button>

//         {/* Navigation */}
//         <div className={`header__nav ${menuOpen ? "menu-open" : ""}`}>
//           <div className="mobile-menu-heading">
//             <Link to="/" className="mobile-menu-logo" onClick={closeMenu}>
//               DJoz
//             </Link>

//             <button
//               className="header__mobile-close"
//               onClick={closeMenu}
//               aria-label="Close navigation menu"
//             >
//               CLOSE ×
//             </button>
//           </div>

//           <nav className="header__menu">
//             <ul>
//               <li><Link to="/" onClick={closeMenu}>Home</Link></li>
//               <li><Link to="/about" onClick={closeMenu}>About</Link></li>
//               <li>
//                 <Link to="/discography" onClick={closeMenu}>
//                   Discography
//                 </Link>
//               </li>
//               <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
//               <li><Link to="/videos" onClick={closeMenu}>Videos</Link></li>
//               <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
//               <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Social Icons */}
//           <div className="header__right__social">
//             <a href="https://www.facebook.com/" aria-label="Facebook">
//               <i className="fa fa-facebook" />
//             </a>
//             <a href="https://www.twitter.com/" aria-label="Twitter">
//               <i className="fa fa-twitter" />
//             </a>
//             <a href="https://www.instagram.com/" aria-label="Instagram">
//               <i className="fa fa-instagram" />
//             </a>
//             <a href="https://dribbble.com/" aria-label="Dribbble">
//               <i className="fa fa-dribbble" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Prevent the page behind the menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the menu with the Escape key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="header djoz-header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/img/logo.png" alt="DJoz" />
          </Link>
        </div>

        {/* Menu button */}
        <button
          type="button"
          className="header__mobile-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="djoz-navigation"
        >
          MENU <span aria-hidden="true">☰</span>
        </button>

        {/* Navigation overlay */}
        <div
          id="djoz-navigation"
          className={`header__nav ${menuOpen ? "menu-open" : ""}`}
          aria-hidden={!menuOpen && window.innerWidth <= 991}
        >
          <div className="mobile-menu-heading">
            <Link
              to="/"
              className="mobile-menu-logo"
              onClick={closeMenu}
            >
              <img src="/img/logo.png" alt="DJoz" />
            </Link>

            <button
              type="button"
              className="header__mobile-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              CLOSE <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="header__menu" aria-label="Main navigation">
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li>
                <Link to="/discography" onClick={closeMenu}>
                  Discography
                </Link>
              </li>
              <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
              <li><Link to="/videos" onClick={closeMenu}>Videos</Link></li>
              <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </nav>

          {/* Social icons */}
          <div className="header__right__social">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://www.twitter.com/" aria-label="Twitter">
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
    </header>
  );
}

export default Navbar;
