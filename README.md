# Service Management Dashboard

## Overview

# Service Business Dashboard

Full-stack business management dashboard built for a small field-service company to manage customers, jobs, invoices, employees, scheduling, and service tracking.

The application was designed to replace fragmented workflows such as paper schedules, spreadsheets, and text-message coordination with a centralized web platform.

## Features

- Customer management
- Job scheduling and tracking
- Invoice creation and payment tracking
- Employee-to-job assignment
- Service assignment and pricing
- Relational PostgreSQL database design
- REST API with Express.js
- Frontend dashboard built with React

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

### Backend

- Node.js
- Express.js
- PostgreSQL
- pg

## Database Concepts

This project uses relational database modeling with:

- One-to-many relationships
- Many-to-many relationships
- Join tables (`job_employees`, `job_services`)
- Foreign key constraints
- RESTful CRUD operations

## Future Improvements

- Authentication and role permissions
- Expense/material tracking
- File uploads for invoices/photos
- Dashboard analytics
- Email/SMS notifications

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
psql service_db -f server/database/schema.sql
```

Populate the database with initial records:

```bash
psql service_db < server/database/seed.sql
```

---
