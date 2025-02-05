# Movies Collection App 🎬

A full-stack movies collection application built with **Angular 15+** (Frontend) and **.NET 8 Web API** (Backend).  
The app allows users to **search for movies, mark favorites, and view saved favorites**, with JWT authentication.

---

## 📌 Features

🔍 Search for movies from a remote JSON dataset.

❤️ Mark movies as favorites (saved in LocalStorage).

🔒 Secure API with JWT authentication.

📋 Basic sorting and filtering options.

🎨 Built with **Angular Material** for UI components.


---

## 🚀 Setup Instructions

### Backend - .NET 8 Web API (MoviesAPI)

 **Navigate to the backend directory and run:**
```sh
cd MoviesAPI
dotnet restore
dotnet run
```

 **API runs on:** `https://localhost:7178`

---

###  Frontend - Angular (MoviesUI)

 **Navigate to the frontend directory and install dependencies:**
```sh
cd MoviesUI
npm install
```

 **Run the Angular app:**
```sh
ng serve
```

 **App runs on:** `http://localhost:4200`

---

## 🎯 Usage Guide

### 🔍 **Searching for Movies**
1. Open `http://localhost:4200/`.
2. Type a movie name in the search bar.
3. Click **Search** to retrieve results.

### ❤️ **Managing Favorites**
1. Click the **heart icon** on a movie card to mark it as a favorite.
2. Click **"Show Favorites"** to open a popup with your saved favorites.
3. Navigate to `/favorites` to see all saved movies.

### 🔒 **Authentication**
1. Login is required for secured API endpoints.
2. Default credentials (if applicable): `admin/password`.
3. The token is stored and sent with API requests.

---

## 📌 Technologies Used

### **Frontend (MoviesUI)**
- Angular 15+
- Angular Material
- TypeScript
- LocalStorage API

### **Backend (MoviesAPI)**
- .NET 8 Web API
- JWT Authentication
- CORS Configuration
- HttpClient for external API requests

---

## 📌 Author
👤 **Shira Vinograd**  
📧 Contact: shv1891@gmail.com 


