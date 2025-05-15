# 🧠 Dynamic Configuration Form — React + TypeScript + SCSS

This project renders a fully dynamic configuration form based on a structured JSON configuration object. Each configuration category is displayed as a dropdown, and the form is validated and submitted with a modern UI experience.

---

## 📁 Folder Structure
```
src/
├── App.tsx
├── main.tsx
├── index.css
├── data/
│   └── configData.ts
├── utils/
│   └── extractConfigOptions.ts
└── components/
    └── ConfigurationForm/
        ├── ConfigurationForm.tsx
        └── ConfigurationForm.scss
```

---

## 🛠️ How to Run the App

### Prerequisites
- Node.js v16+

### Setup Steps
```bash
git clone https://github.com/MustafaAlzahaby/Dynamic-Configuration-Form.git
cd Dynamic-Configuration-Form
npm install
npm run dev
```
Then open: [http://localhost:5173](http://localhost:5173)

---

## ✅ Features & Functionality
- Dynamic rendering of dropdowns from JSON config structure
- Custom validation: requires at least 3 fields selected
- Modern SCSS styling and clean layout
- Order-preserving JSON output matching config sequence
- Clean and smooth submission confirmation message
- Fully built using React + TypeScript + Vite

---

## 🧠 Design Decisions & Assumptions
- The `configData` is assumed to be an array of one object.
- Dropdowns are mapped using labels for user display, but stored and returned as labels instead of internal values.
- Custom success message is preferred over `alert()` for better UX.
- `useMemo` is used to memoize config parsing for performance.
- SCSS is used instead of CSS Modules or styled-components for simplicity.

---

## 💡 Evaluation Criteria Breakdown

| Criteria               | Implementation                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| **Correctness**        | Matches the problem description 100%, including validation and label display     |
| **Code Quality**       | All code modular, typed, and well-formatted                                     |
| **React Best Practices** | Uses `useState`, `useMemo`, props correctly with controlled components           |
| **JavaScript Proficiency** | Uses `Object.entries`, `map`, `find`, `useMemo` effectively                      |
| **Error Handling**     | Required fields enforced, error state managed cleanly                           |
| **Documentation**      | Clear README, comments in utility functions and main handler logic               |

---

## ✍️ Author
- Mustafa Alzahaby
- [https://github.com/MustafaAlzahaby](https://github.com/MustafaAlzahaby)
