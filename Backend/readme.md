# Blogging Platform - Backend

## Overview

This repository contains the backend code for a blogging platform built using Node.js, Express, and MongoDB. The backend provides a RESTful API for creating, reading, updating, and deleting blog posts. It also includes functionality for searching blog posts.

## Features

- **Create Blog Post**: Add new blog posts to the database.
- **Read Blog Posts**: Fetch a list of all blog posts or get details of a specific post.
- **Update Blog Post**: Edit existing blog posts.
- **Delete Blog Post**: Remove blog posts from the database.
- **Search Blog Posts**: Search for blog posts by keywords in the title or content.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB database (local or cloud instance) running and accessible.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blogging-platform-backend.git
   cd blogging-platform-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. **Run the Application:**

   ```bash
   npm start
   ```

   The server will start on port 5000 (or any port specified in the `.env` file).

## API Endpoints

### Create Blog Post

- **URL:** `/blogs`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Blog Title",
    "content": "Blog Content",
    "author": "Author Name"
  }
  ```
- **Response:** `201 Created` with the created blog post object.

### Get All Blog Posts

- **URL:** `/blogs`
- **Method:** `GET`
- **Response:** `200 OK` with an array of blog post objects.

### Get Blog Post by ID

- **URL:** `/blogs/:id`
- **Method:** `GET`
- **URL Params:**
  - `id` (string): The ID of the blog post to fetch.
- **Response:** `200 OK` with the blog post object or `404 Not Found` if the post does not exist.

### Update Blog Post

- **URL:** `/blogs/:id`
- **Method:** `PUT`
- **URL Params:**
  - `id` (string): The ID of the blog post to update.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "content": "Updated Content",
    "author": "Updated Author"
  }
  ```
- **Response:** `200 OK` with the updated blog post object or `404 Not Found` if the post does not exist.

### Delete Blog Post

- **URL:** `/blogs/:id`
- **Method:** `DELETE`
- **URL Params:**
  - `id` (string): The ID of the blog post to delete.
- **Response:** `200 OK` with a confirmation message or `404 Not Found` if the post does not exist.

### Search Blog Posts

- **URL:** `/blogs/search`
- **Method:** `GET`
- **Query Params:**
  - `q` (string): The search query to look for in the title and content.
- **Response:** `200 OK` with an array of blog post objects matching the search query.

## Folder Structure

- **`models/`**: Contains the Mongoose schema for blog posts.
- **`controllers/`**: Contains the controller functions for handling API requests.
- **`routes/`**: Contains the Express routes for blog posts.
- **`server.js`**: Entry point of the application. Sets up the server and connects to MongoDB.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
