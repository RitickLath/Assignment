import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import EditBlogPage from "./pages/EditBlogPage";
import BlogForm from "./components/BlogForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/edit/:id" element={<EditBlogPage />} />
        <Route path="/create" element={<BlogForm />} />
      </Routes>
    </Router>
  );
};

export default App;
