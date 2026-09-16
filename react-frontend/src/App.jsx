import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LegacyScript from "./components/LegacyScript";
import AddCourse from "./pages/add-course";
import AdminDashboard from "./pages/admin-dashboard";
import BrowseCourses from "./pages/browse-courses";
import Certificate from "./pages/certificate";
import CourseContent from "./pages/course-content";
import CourseDetails from "./pages/course-details";
import Courses from "./pages/courses";
import EditCourse from "./pages/edit-course";
import EnrollmentSuccess from "./pages/enrollment-success";
import ForgotPassword from "./pages/forgot-password";
import Index from "./pages/index";
import Login from "./pages/login";
import Materials from "./pages/materials";
import Module from "./pages/module";
import MyCourses from "./pages/my-courses";
import Notifications from "./pages/notifications";
import Progress from "./pages/progress";
import Register from "./pages/register";
import ResetPassword from "./pages/reset-password";
import StudentDashboard from "./pages/student-dashboard";
import VideoPlayer from "./pages/video-player";

const titles = {
  "/add-course.html": "Add Course \u00b7 Vantage Learning",
  "/admin-dashboard.html": "Admin Dashboard \u00b7 Vantage Learning",
  "/browse-courses.html": "Browse Courses \u00b7 Vantage Learning",
  "/certificate.html": "Certificate of Completion \u00b7 Technical Writing 101",
  "/course-content.html": "UI Design Foundations \u00b7 Course Content",
  "/course-details.html": "UI Design Foundations \u00b7 Vantage Learning",
  "/courses.html": "Manage Courses \u00b7 Vantage Learning",
  "/edit-course.html": "Edit Course \u00b7 Vantage Learning",
  "/enrollment-success.html": "Enrollment Confirmed \u00b7 Vantage Learning",
  "/forgot-password.html": "Reset your password \u00b7 Vantage Learning",
  "/index.html": "Vantage Learning \u00b7 Learn a skill you'll actually use",
  "/login.html": "Log in \u00b7 Vantage Learning",
  "/materials.html": "Course Materials \u00b7 UI Design Foundations",
  "/module.html": "Building a Component Library \u00b7 Module 3",
  "/my-courses.html": "My Courses \u00b7 Vantage Learning",
  "/notifications.html": "Notifications \u00b7 Vantage Learning",
  "/progress.html": "My Progress \u00b7 Vantage Learning",
  "/register.html": "Create your account \u00b7 Vantage Learning",
  "/reset-password.html": "Set a new password \u00b7 Vantage Learning",
  "/student-dashboard.html": "My Dashboard \u00b7 Vantage Learning",
  "/video-player.html": "Building a Component Library \u00b7 Lesson Video",
};

function AppTitle() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || "Vantage Learning";
    document.dispatchEvent(new Event("DOMContentLoaded"));
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <AppTitle />
      <LegacyScript src="/legacy/js/script.js" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/add-course.html" element={<AddCourse />} />
        <Route path="/admin-dashboard.html" element={<AdminDashboard />} />
        <Route path="/browse-courses.html" element={<BrowseCourses />} />
        <Route path="/certificate.html" element={<Certificate />} />
        <Route path="/course-content.html" element={<CourseContent />} />
        <Route path="/course-details.html" element={<CourseDetails />} />
        <Route path="/courses.html" element={<Courses />} />
        <Route path="/edit-course.html" element={<EditCourse />} />
        <Route path="/enrollment-success.html" element={<EnrollmentSuccess />} />
        <Route path="/forgot-password.html" element={<ForgotPassword />} />
        <Route path="/index.html" element={<Index />} />
        <Route path="/login.html" element={<Login />} />
        <Route path="/materials.html" element={<Materials />} />
        <Route path="/module.html" element={<Module />} />
        <Route path="/my-courses.html" element={<MyCourses />} />
        <Route path="/notifications.html" element={<Notifications />} />
        <Route path="/progress.html" element={<Progress />} />
        <Route path="/register.html" element={<Register />} />
        <Route path="/reset-password.html" element={<ResetPassword />} />
        <Route path="/student-dashboard.html" element={<StudentDashboard />} />
        <Route path="/video-player.html" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}
