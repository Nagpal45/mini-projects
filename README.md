# 🚀 Mini Projects

> A diverse collection of small-to-medium web applications covering full-stack development, real-time features, API design, and responsive UI design.

---

## 📋 Projects Overview

| # | Project | Description | Tech Stack | Type |
|---|---------|-------------|------------|------|
| 1 | [Car Management](#1-car-management) | Car listings with Cloudinary image uploads | Next.js 15, MongoDB, Cloudinary, JWT | Full-Stack |
| 2 | [Course Management](#2-course-management) | Course enrollment platform with admin panel | Next.js 15 + Express, MongoDB, JWT | Full-Stack |
| 3 | [Cricket Dashboard](#3-cricket-dashboard) | Real-time cricket scoreboard with live updates | Next.js 15 + Express, Socket.IO, MongoDB | Full-Stack (Real-time) |
| 4 | [Dashboard](#4-dashboard) | Book dashboard with Open Library API | React 18, Firebase, MUI | Frontend |
| 5 | [Discuss Forum](#5-discuss-forum) | Discussion forum UI with responsive layout | Next.js 14, Tailwind CSS, MUI | Frontend (UI) |
| 6 | [Notes API](#6-notes-api) | RESTful notes API with tests | Express, MongoDB, Mocha/Chai | Backend |
| 7 | [Review Page](#7-review-page) | Star rating and feedback submission | Next.js 14, MongoDB, Server Actions | Full-Stack |
| 8 | [User Teams](#8-user-teams) | User management with team creation | React 18 + Express, MongoDB, MUI | Full-Stack |
| 9 | [Weather App](#9-weather-app) | Weather display with city search | Next.js 14, OpenWeatherMap API, MUI | Frontend |
| 10 | [Workout UI](#10-workout-ui) | Mobile-first fitness app UI prototype | HTML, Tailwind CSS (CDN) | Frontend (UI) |

---

## 1. Car Management

**Full-Stack Car Listings with Cloudinary Image Uploads**

An authenticated car management app where users can create, list, search, view, edit, and delete car entries with up to 10 images per car uploaded via Cloudinary.

### ✨ Features

- JWT cookie-based authentication with `jose` for edge-compatible verification
- Next.js middleware for route protection (`/api/car/*`, `/product/*`, `/productCreate`)
- Multi-image Cloudinary upload (up to 10 per car)
- Real-time search across title, description, and tags
- CORS handling for Vercel deployment

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Database | MongoDB (Mongoose) |
| Auth | JWT (`jose` + `bcrypt`) |
| Images | Cloudinary (`next-cloudinary`) |
| Styling | Tailwind CSS |

### 🔑 Environment Variables

```env
MONGO_URI=<mongodb_connection_string>
JWT_SECRET=<jwt_secret>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<cloudinary_cloud_name>
```

### 🚀 Setup

```bash
cd mini-projects/car-management
npm install && npm run dev   # → http://localhost:3000
```

---

## 2. Course Management

**Course Enrollment Platform with Admin Panel**

A full-stack course management platform with separate client and server. Users can browse courses, view details, and enroll. Admins can create and manage courses. Supports role-based access control.

### ✨ Features

- User registration/login with role-based access (user vs admin)
- Course CRUD (admin-only routes)
- Course listing and individual detail pages
- User enrollment with enrolled course tracking
- JWT-protected endpoints
- Separate client/server architecture

### 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Client | Next.js 15 (App Router, TypeScript), Tailwind CSS, Axios, `jose` |
| Server | Express.js (TypeScript), MongoDB/Mongoose, JWT, bcrypt |
| Deployment | Vercel (via `vercel.json`) |

### 📡 API Routes

- `/api/users` — User management
- `/api/admin` — Admin course operations
- `/api/courses` — Course listing/details
- `/api/auth` — Authentication

### 🚀 Setup

```bash
# Server (port 5000)
cd mini-projects/course-management/server
npm install && npm run dev

# Client (port 3000)
cd mini-projects/course-management/client
npm install && npm run dev
```

---

## 3. Cricket Dashboard

**Real-Time Cricket Match Dashboard with Live Score Updates**

A real-time cricket scoreboard with live updates via Socket.IO. Displays scorecards, ball-by-ball commentary, batsman/bowler stats, and an admin panel for match control.

### ✨ Features

| Feature | Description |
|---------|-------------|
| Real-time Scores | Live updates via WebSocket (Socket.IO) |
| Scorecard | Team scores, overs, wickets, current run rate |
| Player Stats | Batsman (runs, balls, fours) + Bowler (overs, maidens, wickets) |
| Ball-by-Ball | Auto-generated commentary feed |
| Admin Panel | Add runs (0–6), wides, no-balls, wickets, change striker/bowler |
| Match Management | Create new matches, reset values |

### 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Client | Next.js 15 (App Router, TypeScript), Tailwind CSS, Socket.IO Client, Axios |
| Server | Express.js (TypeScript), Socket.IO, MongoDB/Mongoose, JWT, bcrypt |

### 📄 Data Models

```
Match:  { teams, scores, overs, wickets, status }
Team:   { name, players[] }
Player: { name, role, stats }
User:   { username, email, password }
```

### 🚀 Setup

```bash
# Server (Express: 5000, Socket.IO: 4000)
cd mini-projects/cricket-dashboard/server
npm install && npm run dev

# Client (port 3000)
cd mini-projects/cricket-dashboard/client
npm install && npm run dev
```

---

## 4. Dashboard

**Book Dashboard with Open Library API & Firebase Auth**

A book dashboard fetching data from the Open Library API with sortable/paginated tables, inline editing, CSV export, and Firebase authentication.

### ✨ Features

- Firebase email/password registration and login
- Open Library API search by author
- Sortable table columns (rating, author, title, year, subject)
- Pagination with configurable rows per page
- Inline edit modal for book records
- CSV download/export of book data

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 (CRA) |
| Auth | Firebase Authentication |
| UI Library | Material UI (MUI) |
| Data Source | Open Library API |
| HTTP Client | Axios |
| Export | file-saver (CSV) |

### 🔑 Environment Variables

```env
REACT_APP_API_KEY=<firebase_api_key>
REACT_APP_AUTH_DOMAIN=<firebase_auth_domain>
REACT_APP_PROJECT_ID=<firebase_project_id>
```

### 🚀 Setup

```bash
cd mini-projects/dashboard
npm install && npm start   # → http://localhost:3000
```

---

## 5. Discuss Forum

**Responsive Discussion Forum UI**

A static discussion forum UI with a responsive layout featuring a collapsible sidebar, forum feed with interactive posts, and a market stories panel. Uses hardcoded mock data.

### ✨ Features

- Responsive mobile-first design with toggle between Forum and Market Stories
- Collapsible sidebar navigation (8 sections)
- Forum posts with avatar, sector badges, timestamps, likes/views/comments/share
- Market Stories panel with image cards
- MUI Icons for all interactive elements

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Icons | MUI Icons |
| UI Components | MUI Material |
| Data | Static mock data |

### 🚀 Setup

```bash
cd mini-projects/discuss_forum
npm install && npm run dev   # → http://localhost:3000
```

---

## 6. Notes API

**RESTful Notes API with Automated Tests**

A RESTful API for notes management with HTTP Basic Authentication, input validation, and a full Mocha/Chai/Supertest test suite.

### ✨ Features

- Full CRUD operations for notes
- HTTP Basic Authentication (`express-basic-auth`)
- Input validation with `express-validator` (title: 3–255 chars, content: min 6 chars)
- Automated test suite with Mocha + Supertest + Chai
- ES module syntax throughout

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Runtime | Node.js (ES Modules) |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Auth | express-basic-auth |
| Validation | express-validator |
| Testing | Mocha, Supertest, Chai |

### 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create` | Create a note |
| `GET` | `/notes` | Get all notes |
| `GET` | `/note/:id` | Get single note |
| `PUT` | `/update/:id` | Update a note |
| `DELETE` | `/delete/:id` | Delete a note |

### 🚀 Setup

```bash
cd mini-projects/notes-api/server
npm install
npm start       # → http://localhost:5000
npm test        # → Run Mocha tests
```

---

## 7. Review Page

**Star Rating & Feedback Submission**

A review submission page with star ratings, thumbs up/down recommendations, personality facet selection, and free-text feedback — saved to MongoDB via Next.js Server Actions.

### ✨ Features

- Star rating for Safety and Communication (1–5)
- Thumbs up/down recommendation
- Personality facet multi-select (13 options: Adventurous, Clean, Kind, Trustworthy, etc.)
- Free-text feedback area
- Server Action saves review to MongoDB
- Confirmation page after submission

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router, Server Actions) |
| Database | MongoDB (Mongoose) |
| Styling | CSS Modules |

### 📄 Review Schema

```
{ safety, communication, recommend, facetArr[], feedbackText }
```

### 🚀 Setup

```bash
cd mini-projects/review_page
npm install && npm run dev   # → http://localhost:3000
# Set env: MONGO=<mongodb_connection_string>
```

---

## 8. User Teams

**User Management & Team Creation Platform**

A full-stack platform for browsing, filtering, and grouping users into teams with unique-domain constraints. Inspired by the Heliverse mock data challenge.

### ✨ Features

| Feature | Description |
|---------|-------------|
| User Listing | Paginated (20/page) with avatar display |
| Filtering | Domain, gender, availability |
| Search | First/last name search |
| User CRUD | Create, read, update, delete users |
| Team Creation | Members must have unique domains + availability = true |
| Team Management | List teams, view details, delete teams |

### 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Client | React 18 (CRA), React Router DOM, MUI, Axios |
| Server | Express.js, MongoDB/Mongoose, CORS |

### 🗺️ Client Routes

| Route | Page |
|-------|------|
| `/` | User listing (home) |
| `/users/:id` | User detail |
| `/teams` | Team listing |
| `/teams/:id` | Team detail |

### 🚀 Setup

```bash
# Server (port 5000)
cd mini-projects/user_teams/server
npm install && npm start

# Client (port 3000)
cd mini-projects/user_teams/client
npm install && npm start
```

---

## 9. Weather App

**Weather Display with City Search**

A weather application that fetches and displays current weather data from OpenWeatherMap API with a city selection modal and clean UI.

### ✨ Features

- City input via modal dialog with search icon
- Real-time weather data (temperature in °C, description)
- Default city: Delhi
- Multi-page layout (About, Contact, Services pages)
- Clean MUI-based design with CSS Modules

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS, CSS Modules |
| Icons | MUI Icons |
| HTTP Client | Axios |
| API | OpenWeatherMap |

### 🚀 Setup

```bash
cd mini-projects/weather-app
npm install && npm run dev   # → http://localhost:3000
```

---

## 10. Workout UI

**Mobile-First Fitness App UI Prototype**

A static mobile-first workout/fitness app UI built with plain HTML and Tailwind CSS (CDN). Features a multi-page onboarding flow, auth screens, goal selection, and a workout tracker dashboard.

### ✨ Features

- Onboarding slides ("Track Your Goal", "Get Burn") with skip option
- Sign Up/Sign In pages with social login icons (Google/Facebook)
- Fitness goals selection (Weight Loss, Muscle Gain, Flexibility, etc.)
- Workout tracker dashboard with calorie chart, schedule toggles, activity progress
- Custom styled checkboxes and gradient buttons
- Mobile-responsive design

### 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) |
| Framework | None |
| Backend | None |

### 🚀 Setup

```bash
cd mini-projects/workout_ui
open index.html   # Or use a Live Server extension
```

---

## 📊 Cross-Project Comparison

| Project | Framework | Database | Auth | Real-time | UI Library |
|---------|-----------|----------|------|-----------|------------|
| Car Management | Next.js 15 | MongoDB | JWT | — | Tailwind |
| Course Management | Next.js 15 + Express | MongoDB | JWT | — | Tailwind |
| Cricket Dashboard | Next.js 15 + Express | MongoDB | JWT | Socket.IO | Tailwind |
| Dashboard | React 18 | — (API) | Firebase | — | MUI |
| Discuss Forum | Next.js 14 | — (mock) | — | — | Tailwind + MUI |
| Notes API | Express | MongoDB | Basic Auth | — | — |
| Review Page | Next.js 14 | MongoDB | — | — | CSS Modules |
| User Teams | React 18 + Express | MongoDB | — | — | MUI |
| Weather App | Next.js 14 | — (API) | — | — | Tailwind + MUI |
| Workout UI | HTML | — | — | — | Tailwind (CDN) |

---

## 🗂️ Project Structure

```
mini-projects/
├── README.md
├── car-management/          # Next.js 15 full-stack + Cloudinary
├── course-management/       # Next.js client + Express server
│   ├── client/
│   └── server/
├── cricket-dashboard/       # Real-time scoreboard + Socket.IO
│   ├── client/
│   └── server/
├── dashboard/               # React + Firebase + Open Library API
├── discuss_forum/           # Static forum UI
├── notes-api/               # Express REST API + tests
│   └── server/
├── review_page/             # Next.js Server Actions + MongoDB
├── user_teams/              # React + Express team management
│   ├── client/
│   └── server/
├── weather-app/             # Next.js + OpenWeatherMap
└── workout_ui/              # Static HTML + Tailwind prototype
```

---

## 🏷️ Technologies at a Glance

![Next.js](https://img.shields.io/badge/Next.js-14--15-000000?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary)
![Mocha](https://img.shields.io/badge/Mocha-Tests-8D6748?logo=mocha)
