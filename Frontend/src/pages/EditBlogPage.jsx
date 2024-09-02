import React from "react";
import BlogForm from "../components/BlogForm";
import { useParams, useNavigate } from "react-router-dom";

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Edit Blog</h1>
      <BlogForm blogId={id} navigate={navigate} />{" "}
    </div>
  );
};

export default EditBlogPage;
