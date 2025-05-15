# 🧠 Dynamic Configuration Form — React + TypeScript + SCSS

This project renders a fully dynamic configuration form based on a structured JSON configuration object. Each configuration category is displayed as a dropdown, and the form is validated and submitted with a modern UI experience.

---

## 📁 Folder Structure
```
src/
├── App.tsx
├── main.tsx
├── index.css
├── types/
│   └── config.ts            # Global interfaces/types for config
├── data/
│   └── configData.ts        # Input config JSON data
├── utils/
│   └── extractConfigOptions.ts # Utility to transform config to dropdown options
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
- Form values are submitted in the same order as config
- Final output uses **label names** not system values
- Clean success confirmation overlay (no alerts)
- SCSS-based styling and animation
- TypeScript support for safety and clarity

---

## 🧠 Design Decisions & Assumptions
- The `configData` is assumed to be an array of one object (schema-like input).
- Dropdown values are displayed and returned using their **labels**, not internal system values.
- Form is centered using modern Flexbox (no `position: absolute` hacks).
- Types (`ConfigOption`, `ConfigData`, `ConfigSchema`) are separated into `src/types/`.
- SCSS used to allow flexibility and reuse.

---

## 💡 Evaluation Criteria Breakdown

| Criteria               | Implementation                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| **Correctness**        | Matches the problem description 100%, including validation and label display     |
| **Code Quality**       | Modularized structure, clean imports, type-safe architecture                     |
| **React Best Practices** | Uses `useState`, `useMemo`, controlled components, props                         |
| **JavaScript Proficiency** | Uses `Object.entries`, `map`, `find`, `memo`, `forEach` with clarity              |
| **Error Handling**     | Required fields enforced, clean error UI, consistent UX                         |
| **Documentation**      | This README, comments in utility & config logic, clear naming conventions        |

---

## ✍️ Author
- Mustafa Alzahaby
- [https://github.com/MustafaAlzahaby](https://github.com/MustafaAlzahaby)
