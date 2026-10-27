// import { socialLinks } from "./BlogData";

// const BlogFooter = () => {
//   return (
//     <footer
//       className="footer footer--normal spad set-bg"
//       style={{ backgroundImage: "url(/img/footer-bg.png)" }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6">
//             <div className="footer__address">
//               <ul>
//                 <li>
//                   <i className="fa fa-phone"></i>
//                   <p>Phone</p>
//                   <h6>1-677-124-44227</h6>
//                 </li>
//                 <li>
//                   <i className="fa fa-envelope"></i>
//                   <p>Email</p>
//                   <h6>DJ.Music@gmail.com</h6>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-4 offset-lg-1 col-md-6">
//             <div className="footer__social">
//               <h2>DJoz</h2>
//               <div className="footer__social__links">
//                 {socialLinks.map((s) => (
//                   <a key={s.id} href={s.href}><i className={s.icon}></i></a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 offset-lg-1 col-md-6">
//             <div className="footer__newslatter">
//               <h4>Stay With me</h4>
//               <form onSubmit={(e) => e.preventDefault()}>
//                 <input type="email" placeholder="Email" />
//                 <button type="submit"><i className="fa fa-send-o"></i></button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default BlogFooter;

import { useState } from "react";
import { socialLinks } from "./BlogData";
import "./Blog.css";

const BlogFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO: Send email to your API
    setEmail("");
  };

  return (
    <footer className="djfooter">
      {/* Wave design */}
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

          {/* Column 1: Contact */}
          <div className="djfooter__col djfooter__contact">
            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-phone" />
              </span>

              <div>
                <p className="djfooter__label">Phone</p>
                <p className="djfooter__value">
                  1-677-124-44227
                </p>
              </div>
            </div>

            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-envelope" />
              </span>

              <div>
                <p className="djfooter__label">Email</p>
                <p className="djfooter__value">
                  DJ.Music@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Logo and social links */}
          <div className="djfooter__col djfooter__brand">
            <h2 className="djfooter__logo">DJoz</h2>

            <div className="djfooter__social">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label || "Social media"}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="djfooter__col djfooter__news">
            <h3 className="djfooter__title">Stay With me</h3>

            <form
              className="djfooter__form"
              onSubmit={handleSubmit}
            >
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
      </div>
    </footer>
  );
};

export default BlogFooter;
