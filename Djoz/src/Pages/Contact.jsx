
// import React from "react";
// import "../components/contact/Contact.css";

// import ContactHeader from "../Components/Contact/ContactHeader";
// import Breadcrumb from "../Components/Contact/Breadcrumb";
// import ContactMap from "../Components/Contact/ContactMap";
// import ContactSection from "../Components/Contact/ContactSection";
// import ContactFooter from "../Components/Contact/ContactFooter";

// function Contact() {
//   return (
//     <>
//       <ContactHeader />
//       <Breadcrumb />
//       <ContactMap />
//       <ContactSection />
//       <ContactFooter />
//     </>
//   );
// }

// export default Contact;







import React from "react";
import "../Components/Contact/Contact.css";

import ContactHeader from "../Components/Contact/ContactHeader";
import Breadcrumb from "../Components/Contact/Breadcrumb";
import ContactMap from "../Components/Contact/ContactMap";
import ContactSection from "../Components/Contact/ContactSection";
import ContactFooter from "../Components/Contact/ContactFooter";

function Contact() {
  return (
    <div className="contact-page">
      <ContactHeader />
      <Breadcrumb />
      <ContactMap />
      <ContactSection />
      <ContactFooter />
    </div>
  );
}

export default Contact;



