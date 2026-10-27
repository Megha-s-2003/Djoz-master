// import "./Contact.css";

// export default function ContactFooter() {
//   return (
//     <footer className="contact-footer">
//       <div className="contact-footer__container">
//         <div className="contact-footer__address">
//           <div className="contact-footer__item">
//             <i className="fa fa-phone" />
//             <div>
//               <p>Phone</p>
//               <h6>1-677-124-44227</h6>
//             </div>
//           </div>

//           <div className="contact-footer__item">
//             <i className="fa fa-envelope" />
//             <div>
//               <p>Email</p>
//               <h6>DJ.Music@gmail.com</h6>
//             </div>
//           </div>
//         </div>

//         <div className="contact-footer__brand">
//           <h2>DJoz</h2>

//           <div className="contact-footer__social">
//             <a href="https://www.facebook.com/" aria-label="Facebook">
//               <i className="fa fa-facebook" />
//             </a>
//             <a href="https://twitter.com/" aria-label="Twitter">
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

//         <div className="contact-footer__newsletter">
//           <h4>Stay With me</h4>

//           <form onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="email"
//               placeholder="Email"
//               aria-label="Newsletter email"
//               required
//             />
//             <button type="submit" aria-label="Subscribe">
//               <i className="fa fa-send-o" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useState } from "react";
import { socialLinks } from "../Blog/BlogData";

function ContactFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  };

  return (
    <footer className="contact-footer">
      <svg
        className="contact-footer__wave"
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

      <div className="contact-footer__body">
        <div className="contact-footer__container">
          <div className="contact-footer__col contact-footer__contact">
            <div className="contact-footer__item">
              <span className="contact-footer__icon">
                <i className="fa fa-phone" />
              </span>
              <div>
                <p className="contact-footer__label">Phone</p>
                <p className="contact-footer__value">1-677-124-44227</p>
              </div>
            </div>

            <div className="contact-footer__item">
              <span className="contact-footer__icon">
                <i className="fa fa-envelope" />
              </span>
              <div>
                <p className="contact-footer__label">Email</p>
                <p className="contact-footer__value">DJ.Music@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-footer__col contact-footer__brand">
            <h2 className="contact-footer__logo">DJoz</h2>
            <div className="contact-footer__social">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label || "Social media"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-footer__col contact-footer__news">
            <h3 className="contact-footer__title">Stay With Me</h3>
            <form className="contact-footer__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fa fa-paper-plane-o" />
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer__copy">
          <p>Copyright © {new Date().getFullYear()} DJoz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;