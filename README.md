# 🎬 Video Upload & Sensitivity Processing Web App

A **full-stack web application** that allows users to upload videos, analyze them for content sensitivity, and stream them efficiently with real-time progress tracking.  
The application supports **multi-tenant architecture**, **role-based access control**, and **secure video streaming**.

---

## 📌 Overview

This project demonstrates a complete **end-to-end video processing workflow**, including:

- Secure user authentication
- Video upload & storage
- Automated sensitivity analysis (safe / flagged)
- Real-time processing updates
- HTTP range-based video streaming
- Multi-tenant user isolation
- Role-based access control (RBAC)

Built using **modern full-stack technologies** with clean architecture and best practices.

---

## ✨ Features

### 👤 User Features

- Secure **Login & Registration**
- Upload videos with **progress tracking**
- Real-time processing updates for sensitivity analysis
- Video library showing uploaded videos & status
- Stream videos directly in the browser
- Role-based permissions:
  - **Viewer** → View videos only
  - **Editor** → Upload & manage videos
  - **Admin** → Full system access

---

### 🛠️ Admin Features

- Manage users and roles
- Monitor video processing across tenants
- Full access to system resources
- Multi-tenant support for organizations or groups

---

## 🧱 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS (responsive UI)
- Axios (API communication)
- Socket.io Client (real-time updates)
- Context API (state management)

### Backend
- Node.js + Express.js
- MongoDB + Mongoose ODM
- JWT Authentication
- Multer (video uploads)
- Socket.io (live processing status)
- FFmpeg (video processing)
- HTTP Range Requests (video streaming)

---

## 📁 Project Structure

