import { createContext, useState, useEffect } from "react";
import { useNavigate } from "@reach/router";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setonChange] = useState(false);
  const [current_user, set_currentUser] = useState(null);

  // Login
  const login = (email, password) => {
    fetch("https://alimama.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error)
        {
          Swal.fire("Error", response.error, "error");
        } 
        else if (response.success) 
        {
          nav("/");
          Swal.fire("Success", response.success, "success");
          setonChange(!onChange);
        } 
        else 
        {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };
  // Logout
  const logout = () => {
    fetch("https://alimama.onrender.com/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire("Success", "Logout success", "success");
        nav("/login");
        set_currentUser();
        setonChange(!onChange);
      });
  };

  // Fetch current user
  useEffect(() => {
    fetch("https://alimama.onrender.com/current_user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response); 
        if (response.currentUser) {
          set_currentUser(response.currentUser);
        }
      });
  }, []);

  const contextData = {
    login,
    logout,
    current_user,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}