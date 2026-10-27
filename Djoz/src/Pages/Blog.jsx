import BlogHeader from "../Components/Blog/BlogHeader";
import BlogBreadcrumb from "../Components/Blog/BlogBreadcrumb";
import BlogHeading from "../Components/Blog/BlogHeading";
import BlogLarge from "../Components/Blog/BlogLarge";
import BlogList from "../Components/Blog/BlogList";
import BlogSidebar from "../Components/Blog/BlogSidebar";
import BlogFooter from "../Components/Blog/BlogFooter";
import { largePost } from "../Components/Blog/BlogData";
import "../Components/Blog/Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <BlogHeader />
      <BlogBreadcrumb />

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogHeading />
              <BlogLarge post={largePost} />
              <BlogList />
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
};

export default Blog;