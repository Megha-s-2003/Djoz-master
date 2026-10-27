import BlogItem from "./BlogItem";
import BlogPagination from "./BlogPagination";
import { posts } from "./BlogData";

const BlogList = () => {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-lg-6 col-md-6 col-sm-6" key={post.id}>
          <BlogItem post={post} />
        </div>
      ))}
      <div className="col-lg-12">
        <BlogPagination />
      </div>
    </div>
  );
};

export default BlogList;