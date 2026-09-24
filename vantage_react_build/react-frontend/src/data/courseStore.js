/* ============================================================
   courseStore.js
   Single source of truth for course data. Backed by
   localStorage so courses added by an admin actually persist
   and show up for students — no more hardcoded numbers.
   ============================================================ */

const COURSES_KEY = "vantageCourses";
const USERS_KEY = "vantageUsers";

const DEFAULT_COURSES = [
  {
    id: "ui-design-foundations",
    title: "UI Design Foundations",
    category: "Design",
    badgeClass: "badge-gold",
    duration: "9h 40m",
    modules: 6,
    price: 4100,
    status: "Published",
    description:
      "Learn the fundamentals of user interface design — layout, type, color, and componentry — and build a portfolio-ready project along the way. No prior design experience required.",
  },
  {
    id: "sql-for-analysts",
    title: "SQL for Analysts",
    category: "Data",
    badgeClass: "badge-teal",
    duration: "11h 05m",
    modules: 8,
    price: 4900,
    status: "Published",
    description:
      "Go from zero to confident with SQL — querying, joins, subqueries, and the workflows real analysts use every day.",
  },
  {
    id: "technical-writing-101",
    title: "Technical Writing 101",
    category: "Career",
    badgeClass: "badge-ink",
    duration: "6h 20m",
    modules: 5,
    price: 3200,
    status: "Published",
    description:
      "Write documentation, specs, and guides that people actually read and understand.",
  },
  {
    id: "intro-to-data-visualization",
    title: "Intro to Data Visualization",
    category: "Data",
    badgeClass: "badge-teal",
    duration: "8h 15m",
    modules: 7,
    price: 4500,
    status: "Published",
    description:
      "Turn raw numbers into charts and dashboards people can actually act on.",
  },
  {
    id: "product-management-basics",
    title: "Product Management Basics",
    category: "Career",
    badgeClass: "badge-ink",
    duration: "7h 30m",
    modules: 6,
    price: 3700,
    status: "Published",
    description:
      "The fundamentals of scoping, prioritizing, and shipping product work.",
  },
  {
    id: "design-systems-in-practice",
    title: "Design Systems in Practice",
    category: "Design",
    badgeClass: "badge-gold",
    duration: "8h 50m",
    modules: 6,
    price: 5400,
    status: "Published",
    description:
      "Build and maintain a design system that scales across a real product team.",
  },
];

function readCourses() {
  try {
    const raw = localStorage.getItem(COURSES_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* fall through to reseed */
  }
  localStorage.setItem(COURSES_KEY, JSON.stringify(DEFAULT_COURSES));
  return DEFAULT_COURSES;
}

function writeCourses(courses) {
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function slugify(title) {
  return (
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `course-${Date.now()}`
  );
}

export function categoryBadge(category) {
  switch (category) {
    case "Design":
      return "badge-gold";
    case "Data":
      return "badge-teal";
    case "Career":
      return "badge-ink";
    default:
      return "badge-gold";
  }
}

export function formatPrice(price) {
  return "₹" + Number(price || 0).toLocaleString("en-IN");
}

export function getCourses() {
  return readCourses();
}

export function getPublishedCourses() {
  return readCourses().filter((c) => c.status === "Published");
}

export function getCourseById(id) {
  return readCourses().find((c) => c.id === id) || null;
}

export function addCourse(course) {
  const courses = readCourses();
  let id = slugify(course.title);
  // avoid id collisions if two courses share a title
  let suffix = 2;
  while (courses.some((c) => c.id === id)) {
    id = `${slugify(course.title)}-${suffix}`;
    suffix += 1;
  }
  const newCourse = { badgeClass: categoryBadge(course.category), ...course, id };
  courses.push(newCourse);
  writeCourses(courses);
  return newCourse;
}

export function updateCourse(id, updates) {
  const courses = readCourses();
  const idx = courses.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  courses[idx] = { ...courses[idx], ...updates, badgeClass: categoryBadge(updates.category || courses[idx].category) };
  writeCourses(courses);
  return courses[idx];
}

export function deleteCourse(id) {
  const courses = readCourses();
  const next = courses.filter((c) => c.id !== id);
  writeCourses(next);
  return next;
}

/* ---- Real, derived numbers instead of hardcoded ones ---- */
export function getEnrollmentCount(courseId) {
  return readUsers().filter(
    (u) => Array.isArray(u.enrolledCourses) && u.enrolledCourses.includes(courseId)
  ).length;
}

export function getTotalRegisteredUsers(role) {
  const users = readUsers();
  return role ? users.filter((u) => u.role === role).length : users.length;
}

export function getTotalEnrollments() {
  return readUsers().reduce(
    (sum, u) => sum + (Array.isArray(u.enrolledCourses) ? u.enrolledCourses.length : 0),
    0
  );
}
