
// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./Discography.css";

// function DiscHeader() {
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
//               <nav className="header__menu">
//                 <ul>
//                   <li>
//                     <NavLink to="/" end>
//                       Home
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/about">
//                       About
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/discography">
//                       Discography
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/tours">
//                       Tours
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink to="/videos">
//                       Videos
//                     </NavLink>
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
//                     <NavLink to="/contact">
//                       Contact
//                     </NavLink>
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

// export default DiscHeader;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Discography.css";

function DiscographyHeader() {
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
    <header className="header header--normal discography-page-header">
      <div className="container">
        <div className="discography-header-row">
          {/* Logo */}
          <div className="discography-header-logo">
            <Link to="/" onClick={closeMenu}>
              <img src="/img/logo.png" alt="DJoz Logo" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="discography-mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            MENU <span>☰</span>
          </button>

          {/* Navigation */}
          <div
            className={`discography-header-nav ${
              menuOpen ? "discography-menu-open" : ""
            }`}
          >
            <div className="discography-mobile-heading">
              <Link
                to="/"
                className="discography-mobile-logo"
                onClick={closeMenu}
              >
                DJoz
              </Link>

              <button
                type="button"
                className="discography-mobile-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                CLOSE ×
              </button>
            </div>

            <nav className="discography-header-menu">
              <ul>
                <li>
                  <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li className="active">
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
                <li>
                  <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="discography-header-social">
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

export default DiscographyHeader;
