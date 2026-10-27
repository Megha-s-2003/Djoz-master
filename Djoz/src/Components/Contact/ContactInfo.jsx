export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-section-title">
        <h2>Contact info</h2>
      </div>

      <p className="contact-info__intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore.
      </p>

      <ul className="contact-info__list">
        <li>
          <span className="contact-info__icon">
            <i className="fa fa-map-marker" />
          </span>
          <div>
            <h5>Address</h5>
            <p>Los Angeles Gournadi, 1230 Bariasl</p>
          </div>
        </li>

        <li>
          <span className="contact-info__icon">
            <i className="fa fa-phone" />
          </span>
          <div>
            <h5>Hotline</h5>
            <p>
              1-677-124-44227 <span className="contact-info__dot">•</span>{" "}
              1-688-356-66889
            </p>
          </div>
        </li>

        <li>
          <span className="contact-info__icon">
            <i className="fa fa-envelope" />
          </span>
          <div>
            <h5>Email</h5>
            <p>Support@gamail.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
}