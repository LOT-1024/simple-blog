Based on the provided code, here's an API contract detailing the endpoints, their purposes, request parameters, and responses:

---

## API Contract

### 1. Get Blogs by Category

**Endpoint:** `GET /blog/:cat`

**Description:** Retrieves blogs filtered by category. If the category is 'all', it retrieves all blogs.

**Parameters:**
- `cat` (path parameter): The category of blogs to filter by. Use 'all' to get all blogs.

**Responses:**
- **Success (200):**
  ```json
  {
    "data": [
      {
        "id": <integer>,
        "title": <string>,
        "image": <string>,
        "post": <string>,
        "category": <string>
      },
      ...
    ]
  }
  ```

### 2. Get Blog by ID

**Endpoint:** `GET /blogbyid/:id`

**Description:** Retrieves a specific blog by its ID.

**Parameters:**
- `id` (path parameter): The ID of the blog to retrieve.

**Responses:**
- **Success (200):**
  ```json
  {
    "data": [
      {
        "id": <integer>,
        "title": <string>,
        "image": <string>,
        "post": <string>,
        "category": <string>
      }
    ]
  }
  ```

### 3. Add a New Blog

**Endpoint:** `POST /blog`

**Description:** Adds a new blog to the database.

**Request Body:**
- `title` (string): The title of the blog.
- `image` (string): The URL of the blog's image.
- `post` (string): The content of the blog post.
- `category` (string): The category of the blog.

**Responses:**
- **Success (200):**
  ```json
  {
    "message": "Added new blog",
    "desc": <number of rows affected>
  }
  ```

### 4. Upload Blog Image

**Endpoint:** `POST /blogimage`

**Description:** Uploads an image file for a blog.

**Request Body:**
- `file` (form-data): The image file to be uploaded.

**Responses:**
- **Success (200):**
  ```json
  {
    "fieldname": <string>,
    "originalname": <string>,
    "encoding": <string>,
    "mimetype": <string>,
    "destination": <string>,
    "filename": <string>,
    "path": <string>,
    "size": <integer>
  }
  ```

---