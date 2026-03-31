# 🚀 HangoutHub

A modern web app to discover, explore, and interact with hangout spots — built with React and Firebase.

---

## 🌟 Features

* 🔍 **Search Places**
  Search across name, type, and location in real-time.

* 🎯 **Filter by Category**
  Quickly filter places like Cafe, Outdoor, Cinema, etc.

* ❤️ **Like System**
  Users can like places and updates are synced with Firebase.

* ☁️ **Firebase Integration**
  Real-time backend for storing and updating place data.

* 📦 **Dynamic Data Rendering**
  All data is fetched from Firestore instead of static files.

* 🚫 **No Results Handling**
  Displays a friendly message when no places match search.

---

## 🧠 Tech Stack

* ⚛️ React (Vite)
* 🔥 Firebase Firestore
* 🎨 CSS (Custom styling)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── PlaceCard.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
│
├── data/
│   └── placesData.js (initial seed data)
│
├── firebase.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd HangoutHub
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the app

```bash
npm run dev
```

---

## 🔥 Firebase Setup

1. Go to Firebase Console
2. Create a project
3. Enable **Firestore Database**
4. Create a collection:

```
places
```

5. Add documents with fields like:

```json
{
  "name": "Marine Drive Sunset",
  "type": "Outdoor",
  "location": "Mumbai",
  "likes": 10,
  "image": "url"
}
```

---

## 🔌 Firebase Configuration

Create a `firebase.js` file inside `src/`:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

## 🚀 Future Improvements

* 🔐 User Authentication (Login/Signup)
* ⭐ Favorites / Saved Places
* ➕ Add New Places (User submissions)
* 🔄 Real-time updates (live sync)
* 📱 Mobile app (React Native)

---

## 💡 Key Learnings

* State management in React
* Lifting state & component architecture
* Working with Firebase Firestore
* Handling async operations
* Building real-world UI logic

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---


## 👨‍💻 Author

Built with ❤️ by Hrishikesh
