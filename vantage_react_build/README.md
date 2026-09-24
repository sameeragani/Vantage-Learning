# Vantage Learning — React app

Original static project: `frontend/` (kept as reference/backup, untouched)
React project: `react-frontend/` (this is the one to run)

## How to run it

```
cd react-frontend
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build a production version:
```
npm run build
npm run preview
```

## What changed in this pass

The earlier React conversion had pages built as JSX but still relied on a
leftover vanilla-JS file (`public/legacy/js/script.js`) for all the actual
behavior — forms, filtering, login state. That script didn't do real
validation or persistence, which caused the reported bugs. This pass removes
that script entirely and replaces it with real React state, routing, and a
small localStorage-backed data layer.

- **Home page** — the stats card now shows real numbers (course count,
  registered learners, total enrollments) instead of made-up figures.
- **Browse Courses** — category checkboxes actually filter the list now;
  the search box actually searches; the sort dropdown has been removed;
  the confusing "· Beginner" text under duration is gone; prices are in ₹.
- **Registration** — a new email registers normally. An email that's
  already registered is blocked with "You are already registered. Please
  log in instead." A Student/Admin toggle lets you register as either.
- **Login** — only succeeds if the email, password, and role match what
  was actually registered.
- **Admin** — has its own register/login (via the same toggle), its own
  dashboard showing only real numbers (published courses, registered
  students, and the actual course list with real enrollment counts), and
  a working "Add course" form that actually saves and shows up for
  students immediately.
- **Logout** — now works for both student and admin, from the sidebar and
  the top nav, and sends you back to the home page.
- **Enrollment** — enrolling in a course now actually records it against
  your account; "My Courses" and the dashboard reflect real enrollments
  instead of hardcoded demo courses, and show 0 / empty state if you
  haven't enrolled in anything yet.
- Fixed several pages that were silently broken (missing `Link` import
  from `react-router-dom`, which would crash the page when opened).

Course-content, module, video-player, materials, progress, and the
certificate page were left as they were (static demo content) — the
complaints were about registration, login, browsing, admin, home stats,
and logout, so that's what got rebuilt with real logic.

## Data / accounts

Everything is stored in the browser's `localStorage`, so there's no
backend to run:
- `vantageUsers` — all registered accounts (student + admin)
- `vantageUser` — whoever is currently logged in
- `vantageCourses` — the course catalog, seeded with 6 sample courses on
  first run; anything an admin adds is appended here

To reset the app back to a clean state, open the browser dev tools on the
running site and run:
```js
localStorage.clear()
```
then refresh the page.
