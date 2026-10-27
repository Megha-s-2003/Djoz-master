
// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./Tours.css";

// function ToursHeader() {
//   return (
//     <header className="header header--normal">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Logo */}
//           <div className="col-lg-2 col-md-2 col-4">
//             <div className="header__logo">
//               <Link to="/">
//                 <img src="/img/logo.png" alt="DJoz Logo" />
//               </Link>
//             </div>
//           </div>

//           {/* Navigation and social icons */}
//           <div className="col-lg-10 col-md-10 col-8">
//             <div className="header__nav">
//               <nav className="header__menu mobile-menu">
//                 <ul>
//                   <li>
//                     <NavLink to="/" end>Home</NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/about">About</NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/discography">Discography</NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/tours">Tours</NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/videos">Videos</NavLink>
//                   </li>

//                   {/* <li>
//                     <Link to="#">Pages</Link>
//                     <ul className="dropdown">
//                       <li>
//                         <NavLink to="/about">About</NavLink>
//                       </li> */}
//                       <li>
//                         <NavLink to="/blog">Blog</NavLink>
//                       </li>
//                       {/* <li>
//                         <NavLink to="/blog-details">
//                           Blog Details
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li> */}

//                   <li>
//                     <NavLink to="/contact">Contact</NavLink>
//                   </li>
//                 </ul>
//               </nav>

//               {/* Social icons */}
//               <div className="header__right__social">
//                 <a
//                   href="https://www.facebook.com/"
//                   aria-label="Facebook"
//                 >
//                   <i className="fa fa-facebook" />
//                 </a>

//                 <a
//                   href="https://twitter.com/"
//                   aria-label="Twitter"
//                 >
//                   <i className="fa fa-twitter" />
//                 </a>

//                 <a
//                   href="https://www.instagram.com/"
//                   aria-label="Instagram"
//                 >
//                   <i className="fa fa-instagram" />
//                 </a>

//                 <a
//                   href="https://dribbble.com/"
//                   aria-label="Dribbble"
//                 >
//                   <i className="fa fa-dribbble" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default ToursHeader;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Tours.css";

function ToursHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="header header--normal tours-page-header">
      <div className="container">
        <div className="tours-header-row">
          {/* Logo */}
          <div className="tours-header-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/img/logo.png" alt="DJoz Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="tours-mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            MENU <span>☰</span>
          </button>

          {/* Navigation */}
          <div
            className={`tours-header-nav ${
              menuOpen ? "tours-menu-open" : ""
            }`}
          >
            <div className="tours-mobile-heading">
              <Link
                to="/"
                className="tours-mobile-logo"
                onClick={closeMenu}
              >
                DJoz
              </Link>

              <button
                type="button"
                className="tours-mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                CLOSE ×
              </button>
            </div>

            <nav className="tours-header-menu">
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
                <li className="active">
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
            </nav>

            <div className="tours-header-social">
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

export default ToursHeader;
