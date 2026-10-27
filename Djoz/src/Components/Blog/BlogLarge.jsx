const BlogLarge = ({ post }) => {
  return (
    <div className="blog__large">
      <div
        className="blog__large__pic"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <a href="#"><i className="fa fa-share-alt"></i></a>
      </div>
      <div className="blog__large__text">
        <span>{post.category}</span>
        <h4>{post.title}</h4>
        <p>{post.excerpt}</p>
        <div className="blog__large__widget">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <ul>
                <li>By <span>{post.author}</span></li>
                <li>{post.date}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="right__widget">
                <li>{post.views} Views</li>
                <li>{post.comments} Comments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLarge;