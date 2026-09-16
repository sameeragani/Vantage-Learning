import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("vantageUser") || "null");
    } catch {
      return null;
    }
  });

  function login(userData) {
    setUser(userData);
    localStorage.setItem("vantageUser", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("vantageUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
