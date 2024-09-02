import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlogById } from "../services/blogService";

const BlogPost = () => {
  const { id } = useParams(); // for blog url id
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const { data } = await fetchBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
    loadBlog();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {blog ? (
          <article className="bg-white p-6 rounded-lg shadow-md">
            <header className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
              <p className="mt-4 text-gray-500">By {blog.author}</p>
              <p className="mt-2 text-gray-400 text-sm">
                Published on{" "}
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : "Unknown date"}
              </p>
            </header>
            <section className="prose max-w-none">
              <p className="mt-4 text-gray-700 leading-relaxed">
                {blog.content}
              </p>
            </section>

            <div className="mt-8 text-center">
              <Link to="/">
                <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Go to Home
                </button>
              </Link>
            </div>
          </article>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
