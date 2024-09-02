import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { createBlog, updateBlog, fetchBlogById } from "../services/blogService";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const location = useLocation(); // To determine if in edit mode

  const isEditMode = location.pathname.includes("/edit"); // Check if the current path is for editing

  useEffect(() => {
    if (isEditMode && id) {
      const loadBlogData = async () => {
        try {
          const { data } = await fetchBlogById(id);
          setTitle(data.title);
          setContent(data.content);
          setAuthor(data.author);
        } catch (error) {
          console.error("Error fetching the blog data:", error);
        }
      };
      loadBlogData();
    }
  }, [isEditMode, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content, author };
    try {
      if (isEditMode && id) {
        await updateBlog(id, blogData);
      } else {
        await createBlog(blogData);
      }
      navigate("/"); // Navigate to the home page after submission
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {isEditMode ? "Edit Blog" : "Create a New Blog"}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {isEditMode
              ? "Update your blog post details below."
              : "Share your thoughts with the world by creating a new blog post."}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter the blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isEditMode ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
