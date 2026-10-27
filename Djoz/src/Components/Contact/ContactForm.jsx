
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  return (
    <div className="contact-form">
      <div className="contact-section-title">
        <h2>Get in touch</h2>
      </div>

      <p className="contact-form__intro">
        Eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
        maecenas accumsan lacus vel facilisis.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="contact-form__inputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="url"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />

        <button type="submit" className="contact-form__button">
          SEND MESSAGE
        </button>

        {submitted && (
          <p className="contact-form__success" role="status">
            Form submitted successfully. Connect a backend to send your message.
          </p>
        )}
      </form>
    </div>
  );
}
