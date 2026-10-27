import { Link } from "react-router-dom";

const BlogBreadcrumb = () => {
  return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <Link to="/">
                <i className="fa fa-home"></i> Home
              </Link>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBreadcrumb;