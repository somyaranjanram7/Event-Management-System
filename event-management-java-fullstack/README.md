# Event Management System - Full Package (Frontend: React + Tailwind | Backend: Java Spring Boot)

This package contains a **starter full-stack project** for the Event Management System assignment, with:

- Frontend: React (Create React App) + Tailwind CSS
- Backend: Java (Spring Boot, Spring Data JPA) with example PostgreSQL/H2 configuration
- Database: PostgreSQL (recommended) — H2 used for quick local testing
- Auth: Basic JWT skeleton (simple implementation) and role-based checks (admin vs normal)

> This is a complete downloadable skeleton you can run locally, extend, and deploy. The assignment requirements (admin CRUD, normal user view, responsive UI) are implemented at a starter level and clearly organized.

## Contents
- `/frontend` — React + Tailwind app
- `/backend` — Spring Boot application (Maven)
- `README.md` — this file explaining setup and run steps

## Quick start (recommended)
1. Install Java 17+, Maven, Node 18+, and PostgreSQL (optional).
2. Start PostgreSQL and create a database (example: `emsdb`). Update `backend/src/main/resources/application.properties` with your DB credentials, or use H2 for quick test.
3. Run backend:
   ```bash
   cd backend
   mvn clean package
   mvn spring-boot:run
   ```
4. Run frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```
5. Open `http://localhost:3000` for frontend, backend runs by default at `http://localhost:8080/api`.

## Notes
- The backend provides REST APIs under `/api` (e.g., `/api/auth/signup`, `/api/auth/login`, `/api/events`).
- JWT is used for auth. A simple in-memory secret is configured in `application.properties`.
- Sample SQL initialization for creating an admin user is included (schema and data in `backend/src/main/resources/data.sql`) — adjust password hashing as needed.
- This skeleton is intentionally concise to help you finish the assignment quickly — extend controllers, validations, UI styling, and tests as required.

## What to modify / tasks to complete if preparing for submission
- Replace in-memory or H2 usage with a real PostgreSQL DB and update properties.
- Improve password hashing (BCrypt is included in code; ensure it's wired).
- Add file upload (images) — currently events accept `imageUrl`.
- Add better UI/UX, validations, and more robust JWT error handling.
- Commit to GitHub and deploy (Vercel for frontend, Railway/Render/Heroku for backend).

Good luck — enjoy building!  
