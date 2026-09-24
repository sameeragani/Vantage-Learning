# Vantage Learning — React conversion (Task 6)

This project converts the original Vantage Learning HTML/CSS/JavaScript site into a Vite + React application while keeping the original static project as a backup in `../frontend/`.

## Run

1. Open PowerShell in this `react-frontend` folder.
2. Run:
   `npm install`
3. Run:
   `npm run dev`
4. Open the Vite URL shown in the terminal, normally `http://localhost:5173/`.

## Build

`npm run build`

## Task 6 structure

- `src/auth/` — authentication context
- `src/components/` — reusable Navbar, Sidebar, Footer, PageShell, CourseCard, PageCss, LegacyScript
- `src/pages/` — one React component for each original HTML page
- `src/services/` — navigation helpers
- `public/css/` — original CSS, unchanged
- `public/legacy/js/` — original JavaScript, retained for existing validation/UI behavior

The original HTML/CSS/JS files are kept under `../frontend/` as the backup.
