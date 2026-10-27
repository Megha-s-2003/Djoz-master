
import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <ContactInfo />
          </div>

          <div className="col-lg-8 col-md-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
