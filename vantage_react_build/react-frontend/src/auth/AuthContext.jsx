import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "vantageUsers";
const SESSION_KEY = "vantageUser";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function findUser(users, email, role) {
  return users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.role === role
  );
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  });

  function persistSession(sessionUser) {
    setUser(sessionUser);
    if (sessionUser) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }

  /** Returns { success, message?, user? } */
  function register({ firstName, lastName, email, password, role }) {
    const users = readUsers();

    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return {
        success: false,
        message: "You are already registered. Please log in instead.",
      };
    }

    const newUser = { firstName, lastName, email, password, role, enrolledCourses: [] };
    users.push(newUser);
    writeUsers(users);

    const sessionUser = { firstName, lastName, email, role, enrolledCourses: [] };
    persistSession(sessionUser);
    return { success: true, user: sessionUser };
  }

  /** Returns { success, message?, user? } */
  function login({ email, password, role }) {
    const users = readUsers();
    const match = findUser(users, email, role);

    if (!match) {
      return {
        success: false,
        message: "No account found with these details. Please register first.",
      };
    }
    if (match.password !== password) {
      return { success: false, message: "Incorrect email or password." };
    }

    const sessionUser = {
      firstName: match.firstName,
      lastName: match.lastName,
      email: match.email,
      role: match.role,
      enrolledCourses: match.enrolledCourses || [],
    };
    persistSession(sessionUser);
    return { success: true, user: sessionUser };
  }

  function logout() {
    persistSession(null);
  }

  function enrollInCourse(courseId) {
    if (!user) return false;
    const users = readUsers();
    const idx = users.findIndex(
      (u) => u.email.toLowerCase() === user.email.toLowerCase() && u.role === user.role
    );
    if (idx === -1) return false;

    const enrolled = new Set(users[idx].enrolledCourses || []);
    enrolled.add(courseId);
    users[idx].enrolledCourses = Array.from(enrolled);
    writeUsers(users);

    persistSession({ ...user, enrolledCourses: users[idx].enrolledCourses });
    return true;
  }

  function unenrollFromCourse(courseId) {
    if (!user) return false;
    const users = readUsers();
    const idx = users.findIndex(
      (u) => u.email.toLowerCase() === user.email.toLowerCase() && u.role === user.role
    );
    if (idx === -1) return false;

    users[idx].enrolledCourses = (users[idx].enrolledCourses || []).filter((id) => id !== courseId);
    const completedModules = { ...(users[idx].completedModules || {}) };
    delete completedModules[courseId];
    users[idx].completedModules = completedModules;
    writeUsers(users);

    persistSession({
      ...user,
      enrolledCourses: users[idx].enrolledCourses,
      completedModules: users[idx].completedModules,
    });
    return true;
  }

  function toggleModuleComplete(courseId, moduleIndex) {
    if (!user) return false;
    const users = readUsers();
    const idx = users.findIndex(
      (u) => u.email.toLowerCase() === user.email.toLowerCase() && u.role === user.role
    );
    if (idx === -1) return false;

    const completedModules = { ...(users[idx].completedModules || {}) };
    const forCourse = new Set(completedModules[courseId] || []);
    if (forCourse.has(moduleIndex)) forCourse.delete(moduleIndex);
    else forCourse.add(moduleIndex);
    completedModules[courseId] = Array.from(forCourse);
    users[idx].completedModules = completedModules;
    writeUsers(users);

    persistSession({ ...user, completedModules });
    return true;
  }

  function emailExists(email) {
    const users = readUsers();
    return users.some((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  function resetPasswordForEmail(email, newPassword) {
    const users = readUsers();
    const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (idx === -1) {
      return { success: false, message: "No account found with that email." };
    }
    users[idx].password = newPassword;
    writeUsers(users);
    return { success: true };
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        enrollInCourse,
        unenrollFromCourse,
        toggleModuleComplete,
        emailExists,
        resetPasswordForEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
