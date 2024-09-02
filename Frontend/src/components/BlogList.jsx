import React, { useState, useEffect } from "react";
import { fetchBlogs, deleteBlog } from "../services/blogService";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const { data } = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    loadBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Blog Posts</h1>
          <Link
            to="/create"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Create New Blog
          </Link>
        </div>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start justify-between"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">by {blog.author}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex items-center space-x-4">
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-indigo-600 hover:underline"
                >
                  View
                </Link>
                <Link
                  to={`/edit/${blog._id}`}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
