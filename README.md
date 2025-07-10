# Pixel Perfect Spreadsheet UI

This project is a front-end-only React prototype of a spreadsheet interface, built as part of an internship assignment. It mimics a Google Sheets-like experience based on a Figma design.

## 🚀 Live Demo
👉 [View deployed app](https://your-vercel-link.vercel.app)

## 🛠️ Tech Stack
- React 18 + Vite
- TypeScript (strict mode)
- Tailwind CSS
- `lucide-react` for icons

## 📋 Features
- Pixel-close layout based on the given Figma file
- Responsive toolbar with working buttons (logs to console)
- Spreadsheet table with custom status badges and priority tags
- Column styling with tailwind and conditional rendering

## 🧠 Trade-offs & Notes
- Used hardcoded mock data (for simplicity over JSON fetching)
- No state management library (used local state only)
- Used `lucide-react` for all toolbar icons (some substitutions made for unavailable ones)
- `react-table` not used to allow for more control on styling and behavior

## 🔧 Getting Started

```bash
git clone https://github.com/yourusername/pixel-perfect-spreadsheet
cd pixel-perfect-spreadsheet
npm install
npm run dev
