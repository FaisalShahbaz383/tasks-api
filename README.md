Markdown
# Task Management REST API (`task-api`)

A production-ready, secure RESTful API for a Task Management System built using Node.js, Express, MongoDB Atlas, and Mongoose. Includes JWT authentication, request validation, error handling, and interactive Swagger API documentation.

## 🚀 Live Demo & Documentation
* **Deployed API Base URL:** https://tasks-api-ocbl.onrender.com
* **Interactive Swagger UI Docs:** https://tasks-api-ocbl.onrender.com/api-docs

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas with Mongoose ORM
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs
* **Validation:** `express-validator`
* **API Documentation:** Swagger UI (`swagger-ui-express`)
* **Deployment:** Render

---

## 🔐 API Endpoints Summary

### Authentication
* `POST /api/auth/register` — Register a new user
* `POST /api/auth/login` — Authenticate & receive JWT token

### Tasks (Protected - Requires `Authorization: Bearer <token>`)
* `GET /api/tasks` — Fetch all user tasks
* `POST /api/tasks` — Create a new task (`title`, `description`, `status`)
* `PUT /api/tasks/:id` — Update an existing task
* `DELETE /api/tasks/:id` — Remove a task

---

## 🧪 API Testing
A ready-to-use Postman collection is included in this repository:
`postman/tasks-api_postman_collection.json`

---

## ⚡ Local Setup

1. **Clone repository:**
   ```bash
   git clone https://github.com/FaisalShahbaz383/tasks-api.git
   cd tasks-api
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root directory and populate it:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
Run Server:

Bash
# Development mode with Nodemon
npm run dev

# Production mode
npm start

---

### Push Final README Update to GitHub

Save your updated `README.md` and commit it:

```bash
git add README.md
git commit -m "docs: finalize complete README documentation"
git pull origin main --rebase
git push origin main
