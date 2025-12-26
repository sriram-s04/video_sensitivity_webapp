🎬 Video Upload & Sensitivity Processing Web App
Overview

This is a full-stack web application that allows users to upload videos, process them for content sensitivity analysis, and stream them in real-time. It features user authentication, role-based access, multi-tenant architecture, and live progress tracking for video processing.

Features
User Features

Secure Login & Registration.

Upload Videos with progress tracking.

Real-time processing updates for sensitivity analysis (safe/flagged).

Video Library with list of uploaded videos.

Stream Videos directly in the web app.

Role-based access:

Viewer: Can view videos.

Editor: Can upload and manage videos.

Admin: Full system access.

Admin Features

Manage users and roles.

Monitor video processing across the platform.

Multi-tenant support for organizations/groups.

Technology Stack
Frontend

React + Vite

Tailwind CSS for responsive & modern UI

Axios for API calls

Socket.io for real-time updates

Context API for state management

Backend

Node.js + Express.js

MongoDB + Mongoose ODM

JWT Authentication

Multer for video upload

Socket.io for live progress

Video streaming with HTTP range requests
