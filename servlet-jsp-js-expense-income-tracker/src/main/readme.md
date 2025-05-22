#  💰Expense & Income Tracker 

A responsive and user-friendly wallet management system to track incomes, expenses, and transactions with features like login, secure profile access, saving/main wallet management, and detailed transaction history.

---

## 🔰 Introduction

This project is a personal wallet manager built using HTML, CSS, and JavaScript allowing users to:

- Track **income** and **expenses**
- View **wallet balance**
- Manage **saving** and **main** wallets separately
- View **transaction history**
- Secure **login/logout** system per user
- Register & access personalized wallet data

---

## ✨ Features

-  Create, update, delete wallets
- Add income and expense transactions linked to wallets
- View wallets and transaction histories
- Simple user interface using JSP and Servlets
- No database required (in-memory storage)

---

# Technologies Used
- Java
- Java Servlets & JSP
- HTML, CSS, JavaScript




## 🧠 Database Schema 

| Table        | Fields                              |
|--------------|--------------------------------------|
| `users`      | id, name, email, password            |
| `wallets`    | id, user_id, type (main/saving), balance |
| `transactions` | id, user_id, type (income/expense), reason, amount, wallet_type, timestamp |

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   https://github.com/RD-2000/jsp-servlet-js-html-css-sql-expense-income-trcaker.git

- cd jsp-js-html-css-expense-income-tracker

2.Setup Database

- Start MySQL server
- Run the SQL script provided in the Database Schema section to create database and tables

3.Configure Database Connection

- Modify com.rd.databaseconnection.java to update the DB URL, username, and password if needed

4.Import Project in IDE

- Import the project as a Maven or Java web project
- Add Apache Tomcat server runtime

5.Build and Deploy

- Build the project

- Deploy the WAR file or project on Tomcat server

6.Start Tomcat Server

- Run Tomcat server from IDE or manually

- Open browser and visit http://localhost:8080/yourapp/


7.Usage

- Use the UI or API to create wallets, add transactions, view summaries

## Usage

- Visit index.html

- Click Login/Register to create or access your wallet

- Add Income or Expense with reason

- View real-time balance updates

- Check transaction history with filters

- Logout securely when done

# Steps (Workflow)

-  Open index.html – Welcome page

-  Login/Register – Enter credentials

-  Wallet opens – View main/saving balance

-  Click "Add Income"/"Add Expense" – Add amount + reason

-  Transaction history updates automatically

-  Logout – Ends session

# Contributing
Pull requests are welcome! If you'd like to suggest a feature or report a bug, please open an issue first.

# Technologies Used
- java 
- Java
- Java Servlets & JSP
- HTML, CSS, JavaScript
- Apache Tomcat (or any Java Servlet container)

- HTML5

- CSS

-  JavaScript (no framework)

- LocalStorage (for demo version)

📧 Contact
Created by [RD] — feel free to connect!


