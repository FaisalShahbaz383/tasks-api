# Task Management REST API (`task-api`)

A production-ready, secure RESTful API for a Task Management System built using Node.js, Express, MongoDB Atlas, and Mongoose. Includes JWT authentication, request validation, error handling, and interactive Swagger API documentation.

## 🚀 Live Demo & Documentation
* **Deployed API Base URL:** https://tasks-api-ocbl.onrender.com
* **Interactive Swagger UI Docs:** http://localhost:5000/api-docs

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas with Mongoose ORM
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs
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

## ⚡ Local Setup

1. **Clone repository:**
   ```bash
   git clone 
   cd task-api
