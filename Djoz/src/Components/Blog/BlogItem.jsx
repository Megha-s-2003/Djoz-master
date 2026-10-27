const BlogItem = ({ post }) => {
  return (
    <div className="blog__item">
      <div className="blog__item__pic">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog__item__text">
        <span>{post.category}</span>
        <h5>{post.title}</h5>
        <ul>
          <li>By <span>{post.author}</span></li>
          <li>{post.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogItem;