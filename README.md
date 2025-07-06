**FULLY INTEGRATED PROJECT IS AVAILABLE ON MASTER BRANCH**

# 💸 Personal Finance Manager

A **full-stack Personal Finance Manager** web app to track expenses, manage budgets, set limits per category, monitor cash flow, and visualize financial data via charts. Built with **React, Node.js, Express, MongoDB**, and **Tailwind CSS**.

---

## 🚀 Features

- ✅ Track Income & Expenses  
- ✅ Add, Edit & Delete Categories (with Icons & Colors)  
- ✅ Set Monthly Budget Limit  
- ✅ Set Budget Limits per Category (with Progress Bars)  
- ✅ Visualize Expenses by Category & Purpose (Pie Charts & Bar Charts)  
- ✅ Manage Cash Accounts & Transfers  
- ✅ Dark Mode Toggle  
- ✅ Fully Responsive Dashboard UI  
- ✅ Data Persistence via MongoDB  
- ✅ JWT-based Authentication (optional for future extension)  

---

## 📂 Project Structure

├── backend/ # Node.js + Express API
│ ├── models/ # Mongoose Models (User, Category, Transaction, Account)
│ ├── routes/ # API Routes for Categories, Transactions, Accounts
│ └── index.js # Main Express Server
│
├── frontend/ # React + Tailwind Frontend
│ ├── src/
│ │ ├── pages/ # Pages (Dashboard, Transactions, Budget)
│ │ ├── components/ # Reusable Components
│ │ ├── utils/ # API Utilities
│ │ └── App.jsx # Main App Component
│ │
│ └── tailwind.config.js # Tailwind Configuration
│
├── .env # Environment Variables
└── README.md # Project Documentation

yaml
Copy
Edit

---

## 🛠️ Technologies

- **Frontend:** React, Tailwind CSS, Recharts, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Tools:** Nodemon, JWT, dotenv

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo:
```bash
git clone https://github.com/your-username/personal-finance-manager.git
cd personal-finance-manager

2. Backend Setup
bash
cd backend
npm install

Setup .env:
MONGO_URI=mongodb://localhost:27017/finance_manager
JWT_SECRET=your_jwt_secret
PORT=5002

Run Backend:
npm run dev

3. Frontend Setup
bash
cd frontend
npm install

Run Frontend:
bash
npm run dev

🌐 Access App:
Frontend: http://localhost:5173

Backend API: http://localhost:5002/api

🧩 Key Modules
Module   	 Features
Dashboard	 Overview of Balance, Budgets, Recent Transactions
Transactions	 Full List of Expenses/Incomes
Budget	Monthly  Budget Settings, Per Category Limits, Progress
Accounts	 Manage Cash Accounts (Add, Delete, Track Balance)
Settings	 Change Currency, Notifications, Dark Mode

✨ Dark Mode
Toggle Dark Mode in Settings

Theme persists automatically.

📈 Charts & Visuals
Pie Charts for Expense Distribution

Bar Charts for Monthly Income/Expense Trends

Budget Progress Bars per Category

🔐 Notes
JWT Auth Support (optional, easy to extend)

User-specific data fetching (per user categories, transactions)

✅ Future Enhancements
Recurring Expenses
Reports/Exports (PDF/CSV)
Multi-User Support
