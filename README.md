
---

```markdown
# 🗨️ User Register Simple  App (React + Node.js + MongoDB)

A simple full-stack web application built using **React**, **Node.js (Express)**, and **MongoDB** running inside a **Docker container**. This app allows users to be created and updated through a modern frontend and REST API backend.

---

## 🚀 Features

- 🔧 Create new users
- 🔁 Update existing user information
- 💾 MongoDB integration via Docker
- 📡 REST API using Express.js
- 💻 User-friendly React frontend (Vite)

---

## 🧱 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | React.js (Vite)  |
| Backend   | Node.js + Express |
| Database  | MongoDB (via Docker) |
| Dev Tools | MongoDB Compass, Postman |

---

## 🐳 Running MongoDB with Docker

Use the following command to run MongoDB locally using Docker:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
````

After running the container, MongoDB will be accessible at:

```
mongodb://localhost:27017
```

You can use this URL in both your backend and **MongoDB Compass**.

---

## 🛠️ Running the Project

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

The backend will run on:
`http://localhost:5000`

---

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:

   ```bash
   npm run dev
   ```

The frontend will run on:
`http://localhost:5173`

---

## 🔌 MongoDB Compass Connection

To view your data visually, connect to MongoDB using MongoDB Compass with:

```
mongodb://localhost:27017
```

You'll find your database as `chat_app` and a collection named `users`.

---

## 🧪 API Endpoints

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | `/api/users/create`     | Create a new user   |
| PUT    | `/api/users/update/:id` | Update a user by ID |

---


---

## 🔗 GitHub Repository

https://github.com/hassanali167/web-task
---
