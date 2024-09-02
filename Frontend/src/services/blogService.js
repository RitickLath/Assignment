import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const fetchBlogs = async () => {
  return await axios.get(API_URL);
};

export const fetchBlogById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createBlog = async (blogData) => {
  return await axios.post(API_URL, blogData);
};

export const updateBlog = async (id, blogData) => {
  return await axios.put(`${API_URL}/${id}`, blogData);
};

export const deleteBlog = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
