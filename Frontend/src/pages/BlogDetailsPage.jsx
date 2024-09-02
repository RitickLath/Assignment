import React from "react";
import BlogPost from "../components/BlogPost";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <BlogPost blogId={id} />
    </div>
  );
};

export default BlogDetailsPage;
