import { useState } from "react";
import { recentPosts, socialLinks } from "./BlogData";

const SidebarTitle = ({ children }) => (
  <div className="blog__sidebar__title">
    <h4>{children}</h4>
  </div>
);

const BlogSidebar = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="blog__sidebar">
      {/* Newsletter */}
      <div className="blog__sidebar__item">
        <SidebarTitle>Subscribe newsletter</SidebarTitle>
        <p>Ipsum dolor sit amet, adipiscing elit, sed eiusmod</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <button type="submit" className="site-btn">Subscribe</button>
        </form>
      </div>

      {/* Social */}
      <div className="blog__sidebar__item">
        <SidebarTitle>Social media</SidebarTitle>
        <div className="blog__sidebar__social">
          {socialLinks.map((s) => (
            <a key={s.id} href={s.href}><i className={s.icon}></i></a>
          ))}
        </div>
      </div>

      {/* Recent posts */}
      <div className="blog__sidebar__item">
        <SidebarTitle>Recent posts</SidebarTitle>
        {recentPosts.map((p) => (
          <a href="#" className="recent__item" key={p.id}>
            <div className="recent__item__pic">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="recent__item__text">
              <h6>{p.title}</h6>
              <span>{p.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;