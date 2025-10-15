# 🏥 Migrant Health Records

A full-stack web application designed to securely manage and access migrant health records.  
Built with **React (frontend)** and **Node.js/Express (backend)**.

👉 **Live site:** https://belovist.github.io/migrant-health-records/

---

## ✨ Features
- 🔐 User Authentication – Login system for secure access.  
- 📊 Dashboard – View and manage patient health records.  
- 📝 Health Records Management – Add, update, and view medical history.  
- 🌐 REST API Integration – Backend connected with MongoDB (or SQL).  
- 📱 Responsive UI – Works on both desktop and mobile screens.  

---

## 🛠 Tech Stack
### Frontend
- ⚛️ React.js  
- 🎨 CSS / Tailwind 

### Backend
- 🟢 Node.js  
- 🚀 Express.js  

### Database
- 🗄️MySQL  

---

## 📂 Project Structure
```
migrant-health-records/
│
├── backend/          # Express server
│   ├── index.js
│   ├── routes/
│   └── models/
│
├── frontend/         # React app
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v18 or above)  
- Install [MongoDB](https://www.mongodb.com/) or use MongoDB Atlas  

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/migrant-health-records.git
   cd migrant-health-records
   ```

2. Install dependencies for both backend & frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Start the backend:
   ```bash
   cd backend
   npm start
   ```

4. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

---

## 🔑 Environment Variables
Create a `.env` file inside **backend/** and add:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

---

## 🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss major changes.

---

## 📜 License
This project is licensed under the MIT License.
