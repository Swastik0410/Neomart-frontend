# 🛍️ NeoMart

NeoMart is a modern, minimal e-commerce frontend built with **React + Vite**, featuring **dark mode**, **search and sorting**, **cart management with context**, and **responsive design**.

---
*******
LIVE LINK OF THE WEBSITE : https://neomart-swastikroy0410.netlify.app/
*******

## 🚀 How to Run the Project

### 1️⃣ Clone the repository
...bash
git clone https://github.com/Swastik0410/Neomart-frontend.git
cd neomart

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev

4️⃣ Open in browser

Visit the URL shown in the terminal, usually:

http://localhost:5173/

🧩 Architecture Overview

NeoMart follows a modular React architecture for clarity and scalability:

src/
 ├── api/                # Axios API calls (fetchProducts, fetchProductById)
 ├── components/         # Reusable UI components
 │    ├── Header.jsx
 │    ├── ProductCard.jsx
 │    ├── ProductList.jsx
 │    ├── SearchSortBar.jsx
 │    └── SkeletonCard.jsx
 ├── contexts/           # Context APIs
 │    ├── CartContext.jsx
 │    └── ThemeContext.jsx
 ├── pages/              # Route pages
 │    ├── Home.jsx
 │    └── ProductDetails.jsx
 ├── assets/             # Images and logos
 ├── App.jsx             # Main routing setup
 ├── main.jsx            # Entry file

🧠 Key Decisions & Features

Vite + React: Fast dev build and modern tooling.
Tailwind CSS: Rapid, consistent styling and dark mode support.
Context API for global state management:
ThemeContext handles dark/light mode.
CartContext handles cart operations (add, remove, clear).
Axios-based API with reusable functions.
Responsive design for both desktop and mobile.
Loading states using skeleton cards and animated spinners.
Dark mode inspired by Google/ChatGPT dark color palette.

⚙️ Known Issues / Trade-offs

❗ Cart persistence is in-memory only (resets on page reload).
→ Could be enhanced with localStorage or backend support.

🧾 Fake Store API used for demo purposes — limited real data.

💅 Minimal backend integration — focuses on frontend architecture.

⚡ Infinite scroll may re-trigger occasionally on very short viewports.

🌐 Live Demo
👉 Live Demo – https://neomart-swastikroy0410.netlify.app/

🧑‍💻 Author

SWASTIK ROY
swastik0410@gmail.com

