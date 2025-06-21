# 🎵 Music Library Micro Frontend

This is a micro frontend application built using **React** and **Vite**, exposing a dynamic music library UI via **Module Federation**. It allows users to view, filter, sort, and group songs, while admins can also add or delete songs.

---
## 🌐 Deployed Micro Frontend

🔗 [Live Music Library](https://music-library-sage.vercel.app/)

This is the remote micro frontend app exposed via Module Federation. It is dynamically loaded by the main container app.


## 🚀 Features

- ✅ **Clean UI** to display songs
- 🔍 **Search / Filter** songs by title, artist, or album
- ↕️ **Sort** songs by title, artist, or album
- 🗂️ **Group** songs using `reduce`
- 👤 **Role-based UI**:
  - **Admin**: Add / Delete songs
  - **User**: Only view/filter
- 💾 Songs stored in `localStorage`
- 🧠 Uses `map`, `filter`, and `reduce` effectively

---

## 🧱 Tech Stack

| Tool / Library     | Use                                     |
|--------------------|------------------------------------------|
| React + Vite       | UI Framework and build tool              |
| Module Federation  | Dynamic remote module loading            |
| localStorage       | Persistent song state                    |
| JavaScript ES6+    | For logic with `map`, `filter`, `reduce`|

---

## 📂 Folder Structure

```

music-library/
├── public/
├── src/
│   ├── MusicLibrary.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

````

---



## 🧪 Run Production Build Locally

To simulate production:

```bash
# Build the app
npm run build

# Serve the build folder locally on port 4174 (important for module federation)
npx serve dist --listen 4174 --cors


````
---

## 🖼️ Screenshots

![Screenshot 2025-06-21 170203](https://github.com/user-attachments/assets/b05153df-f448-4371-a408-8ba4cce250b2)
![Screenshot 2025-06-21 170301](https://github.com/user-attachments/assets/7247c0a8-cbd2-4b27-9f65-34644bed5f5d)
![Screenshot 2025-06-21 170327](https://github.com/user-attachments/assets/533f863c-03c4-48ee-be48-680423d89aae)
![Screenshot 2025-06-21 170356](https://github.com/user-attachments/assets/c4a4eb19-1163-4520-8fe1-6314abe9560d)
![Screenshot 2025-06-21 170429](https://github.com/user-attachments/assets/c4ebf1dd-3582-4ab7-979e-d1715329ccac)
![Screenshot 2025-06-21 172206](https://github.com/user-attachments/assets/f9d38020-aa53-4861-9627-3e3791664d16)
![Screenshot 2025-06-21 191109](https://github.com/user-attachments/assets/35719e85-2fa9-4f59-b5d2-c4982465cf74)


---

## 🔐 Role Info (for main app integration)

* **Admin Password**: `adminpass`
* **User Password**: `userpass`



