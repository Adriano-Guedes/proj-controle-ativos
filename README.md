# Asset Management System

A full-stack client-server application designed to manage and track company assets such as machinery, furniture, equipment and other corporate resources.

The system allows organizations to control asset allocation, manage users and locations, and maintain a complete history of asset movements.

This project demonstrates the implementation of a modern web application architecture using a REST API backend and a React frontend.

---

## Features

### Asset Management
- Create, update, delete and view assets
- Assign assets to users or locations
- Search and filter assets by name, responsible user or location

### User Management
- Full CRUD operations
- Role-based access control
- Permission level management
- Secure authentication using JWT

### Location Management
- Create, update and manage locations
- Assign assets to specific locations

### Asset Allocation History
- Automatic tracking of asset movements
- Records origin and destination of each transfer
- Allows monitoring the asset lifecycle

---

## Tech Stack

### Backend
- Node.js
- Express
- Prisma ORM
- JWT Authentication
- Bcrypt
- Class-validator
- Class-transformer
- TypeScript

### Frontend
- React
- React Router DOM
- React Hook Form + Yup
- Axios
- Bootstrap
- React Icons
- React Toastify
- TypeScript

### Database
- Prisma ORM (relational database)

---

## Architecture
The system follows a **client-server architecture**:

React Frontend
↓
REST API (Node.js + Express)
↓
Database (via Prisma ORM)

The backend is responsible for authentication, business logic and data persistence, while the frontend provides the user interface and communicates with the API.

---

## Project Structure
```
proj-controle-ativos
│
├── api
│   ├── controllers
│   ├── services
│   ├── models
│   ├── middleware
│   └── prisma
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   └── hooks
│
└── README.md
```

---

## Installation

### Clone the repository
git clone https://github.com/Adriano-Guedes/proj-controle-ativos.git

### Backend setup
cd api
npm install
npm run dev

### Frontend setup
cd client
npm install
npm start

---

## Future Improvements
- Add automated tests
- Improve UI/UX
- Implement asset QR code tracking
- Add audit logs
- Deploy system to cloud infrastructure

---

## Author
Adriano Guedes  
Full Stack Developer

GitHub  
https://github.com/Adriano-Guedes

LinkedIn  
https://www.linkedin.com/in/adriano-guedes
