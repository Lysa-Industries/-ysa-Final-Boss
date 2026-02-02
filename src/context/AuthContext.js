import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://api.lysa.euge.gay"
    : "http://localhost:5000";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(`${API_URL}/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            const username =
              data.username || data.sub || (data.claims && data.claims.sub);

            if (username) {
              setUser({ username });
            } else {
              setUser({ username: "Użytkownik" });
            }
          } else {
            localStorage.removeItem("token");
            setUser(null);
          }
        } catch (error) {
          console.error("Session verification failed:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkUserLoggedIn();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Nieprawidłowa nazwa użytkownika lub hasło.");
        }
        throw new Error("Błąd serwera. Spróbuj ponownie później.");
      }

      const data = await response.json();
      const token = data.token;

      localStorage.setItem("token", token);
      setUser({ username });

      return data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          try {
            const errData = await response.json();
            if (errData.message) throw new Error(errData.message);
          } catch (e) {
            if (e.message !== "Unexpected end of JSON input") throw e;
          }
          throw new Error("Nieprawidłowe dane (np. hasło min. 8 znaków).");
        }
        if (response.status === 409) {
          throw new Error("Użytkownik o takiej nazwie już istnieje.");
        }
        throw new Error("Błąd serwera. Spróbuj ponownie później.");
      }

      return login(username, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
