# HRMS
Here is a **proper professional README.md structure**. Most candidates dump instructions. Good engineers structure it so reviewers can **understand the system in 30 seconds**.

You can paste this directly into `README.md`.

---

# HRMS Lite

A lightweight **Human Resource Management System (HRMS Lite)** built as a full-stack application.
The system allows an admin to **manage employee records and track attendance** through a clean and functional web interface.

---

# Live Demo

Frontend:

```
https://your-frontend-url.com
```

Backend API:

```
https://your-backend-url.com
```

---

# Repository

```
https://github.com/your-username/hrms-lite
```

---

# Project Overview

HRMS Lite is a minimal internal HR tool designed to handle two essential operations:

1. **Employee Management**
2. **Attendance Tracking**

The system allows an admin to:

* Add employees
* View employees
* Delete employees
* Mark attendance
* View attendance history

The application follows a **RESTful architecture** with a separated frontend and backend.

---

# Tech Stack

### Frontend

* React
* Axios
* CSS / Tailwind / Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

# Features

## Employee Management

Admin can:

* Add new employees
* View employee list
* Delete employees

Each employee contains:

* Employee ID (unique)
* Full Name
* Email Address
* Department

---

## Attendance Management

Admin can:

* Mark attendance
* View attendance records

Attendance includes:

* Date
* Status (Present / Absent)

---

# API Endpoints

## Employee APIs

### Create Employee

```
POST /employees
```

Request Body

```json
{
  "employeeId": "EMP001",
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering"
}
```

---

### Get All Employees

```
GET /employees
```

---

### Delete Employee

```
DELETE /employees/:id
```

---

## Attendance APIs

### Mark Attendance

```
POST /attendance
```

Request Body

```json
{
  "employeeId": "EMP001",
  "date": "2026-03-12",
  "status": "Present"
}
```

---

### Get Attendance

```
GET /attendance/:employeeId
```

---

# Database Design

## Employee Schema

```
Employee
 ├── employeeId (String, unique)
 ├── name
 ├── email
 ├── department
 └── createdAt
```

---

## Attendance Schema

```
Attendance
 ├── employeeId (reference)
 ├── date
 ├── status
 └── createdAt
```

---

# Project Structure

```
hrms-lite
│
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
│
└── README.md
```

---

# Running the Project Locally

## 1 Clone the repository

```
git clone https://github.com/your-username/hrms-lite.git
```

---

## 2 Backend Setup

```
cd backend
npm install
```

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run server

```
npm start
```

---

## 3 Frontend Setup

```
cd frontend
npm install
npm start
```

---

# UI States Implemented

* Loading states
* Empty states
* Error handling

---

# Validation & Error Handling

Backend performs validation for:

* Required fields
* Valid email format
* Duplicate employee IDs

Errors return proper:

```
HTTP status codes
Meaningful messages
```

---

# Assumptions

* Single admin user
* No authentication required
* No payroll or leave management
* Attendance recorded once per day per employee

---

# Possible Improvements

* Authentication (JWT / OAuth)
* Role based access
* Attendance analytics
* Employee search
* Pagination
* Dashboard metrics
* Export reports

---

# Author

```
Your Name
```

---

# What Top 1% Developers Actually Do (Most Candidates Don’t)

1. **Show architecture thinking**

   * Explain system design briefly.

2. **Use clean API structure**

   ```
   controllers
   services
   routes
   models
   ```

3. **Handle edge cases**

   * duplicate employeeId
   * attendance for deleted employee
   * multiple attendance for same date

4. **Make UI actually usable**

   * loading skeletons
   * empty states
   * disabled buttons during requests

5. **Add indexes in database**

   ```js
   employeeId: { type: String, unique: true, index: true }
   ```

6. **Prevent duplicate attendance**

   ```
   unique index (employeeId + date)
   ```

---

