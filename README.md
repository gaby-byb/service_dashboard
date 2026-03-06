# Service Management Dashboard

## Overview

This project is a full-stack web application designed to support the day-to-day operations of a service-based business. The system provides a centralized dashboard for managing customers, jobs, employees, services, and invoices.

The application replaces manual workflows such as spreadsheets, text messages, and paper schedules with a structured digital system. It allows users to track job assignments, schedule services, and maintain organized customer and operational data.

The goal of the project is to demonstrate full-stack system design, including relational database modeling, REST API development, and frontend data integration.

---

## Features

- Customer management
- Job scheduling and tracking
- Service catalog management
- Employee assignment to jobs
- Invoice tracking
- Relational database design for operational data
- REST API backend for data access

---

## Tech Stack

### Frontend

- React
- Axios
- Vite

### Backend

- Node.js
- Express

### Database

- PostgreSQL

### Tools

- Git
- Postico (database client)

---

## System Architecture

The application follows a standard full-stack architecture.

```
Client (React Frontend)
        ↓
REST API (Express Backend)
        ↓
PostgreSQL Database
```

The frontend communicates with the backend through HTTP requests. The backend processes these requests, interacts with the PostgreSQL database, and returns JSON responses.

---

## Database Design

The system uses a normalized relational schema to represent business entities.

Core tables:

- `customers`
- `jobs`
- `services`
- `employees`
- `invoices`

Join tables:

- `job_services`
- `job_employees`

Lookup tables:

- `job_status`

---

## API Structure

The backend exposes REST-style endpoints for accessing application data.

Example endpoints:

```
GET    /api/jobs
POST   /api/jobs

GET    /api/customers
POST   /api/customers

GET    /api/services
GET    /api/employees
```

All endpoints return JSON responses consumed by the frontend.

---

## Project Structure

```
service-dashboard
│
├── .gitignore
├── README.md
│
├── frontend
│   ├── package.json
│   ├── src
│   └── node_modules
│
├── backend
│   ├── package.json
│   ├── server.js
│   └── node_modules
│
└── database
    └── schema.sql
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/gaby-byb/service_dashboard.git
cd service_dashboard
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Install backend dependencies

```bash
cd ../backend
npm install
```

---

## Running the Application

### Start the backend server

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

---

## Database Setup

Create the PostgreSQL database:

```bash
createdb service_db
```

Run the schema file:

```bash
psql service_db -f database/schema.sql
```

---

## Future Improvements

- Authentication and role-based access control
- Invoice generation and payment tracking
- Job scheduling calendar
- Reporting and analytics dashboard
- Cloud deployment

---
