import { Link } from "react-router-dom";
import "./Contact.css";

export default function Breadcrumb() {
  return (
    <div className="contact-breadcrumb">
      <div className="contact-breadcrumb__container">
        <Link to="/">
          <i className="fa fa-home" /> Home
        </Link>
        <span>Contact</span>
      </div>
    </div>
  );
}
