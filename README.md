# 🔐 Password Manager (Vanilla JS)

A simple Single Page Application (SPA) Password Manager built using:

- HTML  
- CSS  
- JavaScript  
- LocalStorage  

This project allows users to register, login, and manage their passwords directly in the browser.

---

## 🚀 Features

### 👤 Authentication
- Register with username & master password
- Login using master password
- Change master password
- Data persists using `localStorage`

### 🔑 Password Management
- Add new password items
- View saved credentials
- Edit existing items
- Delete items
- Toggle show/hide passwords

### 🖥 UI
- Single Page Application (SPA)
- Dynamic rendering using JavaScript
- Uses `data-*` attributes for indexing
- DOM manipulation with event delegation

---

## 📂 Project Structure

```
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 How It Works

### 1️⃣ Registration
Stores:
- Username → `localStorage("NAME")`
- Master Password → `localStorage("MASTERPASSWORD")`
- Registration Status → `localStorage("REGISTERPAGE")`

---

### 2️⃣ Login
Checks entered password with stored `MASTERPASSWORD`.  
If correct → opens dashboard.

---

### 3️⃣ Storing Password Items

All password items are stored inside:

```
localStorage("IDPASSWORDSKEY")
```

Structure example:

```js
[
  "{ Name: '', UserName: '', Password: '', AppUrl: '' }",
  "{ Name: '', UserName: '', Password: '', AppUrl: '' }"
]
```

Each item is:
1. Converted to JSON string
2. Stored inside an array
3. Entire array is stringified again

---

### 4️⃣ Rendering Items

Function used:

```js
rander_ID_Passwords()
```

- Fetches items
- Parses JSON
- Dynamically creates HTML
- Uses `data-index_*` for View/Edit/Delete

---

## 🔐 Security Note

⚠️ This app is for learning purposes only.

- Passwords are stored in plain text
- Data is stored in browser `localStorage`
- No encryption is used

❌ Do NOT use this in real-world production.

---

## 📌 Future Improvements

- Encrypt stored passwords
- Hash master password
- Add logout functionality
- Add search feature
- Add password strength checker
- Add export/import feature
- Use IndexedDB instead of localStorage
- Convert to real backend (Node.js / Flask / PHP)

---

## 🛠 Concepts Used

- DOM Manipulation
- Event Delegation
- JSON.stringify()
- JSON.parse()
- localStorage
- dataset attributes
- Single Page Application logic

---

## 👨‍💻 Author

Made with ❤️ by Sk Saidul
