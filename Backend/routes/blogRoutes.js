const express = require("express");
const {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  searchBlogPosts,
} = require("../controllers/blogController");
const router = express.Router();

router.post("/blogs", createBlogPost);
router.get("/blogs", getAllBlogPosts);
router.get("/blogs/:id", getBlogPostById);
router.put("/blogs/:id", updateBlogPost);
router.delete("/blogs/:id", deleteBlogPost);

module.exports = router;
