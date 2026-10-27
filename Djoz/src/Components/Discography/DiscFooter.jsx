import { useState } from 'react'
import "./Discography.css";

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: send email to your API
    setEmail('')
  }

  return (
    <footer className="djfooter">
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
          {/* Column 1: contact */}
          <div className="djfooter__col djfooter__contact">
            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-phone" />
              </span>
              <div>
                <p className="djfooter__label">Phone</p>
                <p className="djfooter__value">1-677-124-44227</p>
              </div>
            </div>

            <div className="djfooter__item">
              <span className="djfooter__icon">
                <i className="fa fa-envelope" />
              </span>
              <div>
                <p className="djfooter__label">Email</p>
                <p className="djfooter__value">DJ.Music@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: logo + social */}
          <div className="djfooter__col djfooter__brand">
            <h2 className="djfooter__logo">DJoz</h2>
            <div className="djfooter__social">
              <a href="#" aria-label="Facebook"><i className="fa fa-facebook" /></a>
              <a href="#" aria-label="Twitter"><i className="fa fa-twitter" /></a>
              <a href="#" aria-label="Instagram"><i className="fa fa-instagram" /></a>
              <a href="#" aria-label="Dribbble"><i className="fa fa-dribbble" /></a>
            </div>
          </div>

          {/* Column 3: newsletter */}
          <div className="djfooter__col djfooter__news">
            <h3 className="djfooter__title">Stay With me</h3>
            <form className="djfooter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
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
  )
}