# 🌱 Omnifood – Responsive React Frontend

A modern, responsive frontend for the fictional **Omnifood** service, built with **ReactJS** and styled using **Tailwind CSS**. This project focuses on clean code, accessibility, interactive UI, and mobile-first responsive design principles.

---

## Live Website
https://mern5foodordering.netlify.app/#testimonials

---

## 🚀 Features

- ⚡ Fully responsive layout across all screen sizes
- 🎨 Stylish, modern UI using Tailwind CSS
- 💡 Semantic HTML5 structure
- 🎯 Clear call-to-action elements
- 🧩 Reusable and modular React components
- 💻 No inline styles; no pixel units (only `rem`, `em`, `%`, `vw/vh` used)
- ✨ Interactive hover effects and smooth transitions

---

## 🧱 Tech Stack

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- HTML5 Semantic Tags
- JSX

---

## 📁 Project Structure

```
omnifood-react/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Meals.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🛠️ Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/omnifood-react.git
cd omnifood-react
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the dev server:**

```bash
npm start
```

> The app will run at: `http://localhost:3000`

---

## 🔧 Tailwind Configuration

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then update `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};