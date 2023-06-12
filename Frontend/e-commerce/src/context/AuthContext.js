import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const register = async (firstname, lastname, email, username, password) => {
    try {
      const response = await fetch('https://alimama.onrender.com/users/add_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, username, password }),
      });

      const data = await response.json();

      console.log(data);

      if (data.error) {
        Swal.fire('Error', data.error, 'error');
      } else if (data.success) {
        await Swal.fire({
          title: 'Success',
          text: data.success,
          icon: 'success',
        });
        navigate('/products', { replace: true });
        setOnChange(!onChange);
      } else {
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("https://alimama.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);

      if (data.error) {
        Swal.fire("Error", data.error, "error");
      } else if (data.success) {
        await Swal.fire("Success", data.success, "success");
        navigate("/");
        setOnChange(!onChange);
      } else {
        Swal.fire("Error", "Something went wrong", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };
  const logout = () => {
    fetch("https://alimama.onrender.com/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire("Success", "Logout success", "success");
        navigate("/");
        setCurrentUser(null);
        setOnChange(!onChange);
      });
  };
  useEffect(() => {
    getCurrentUser();
  }, [onChange]);
  
  const getCurrentUser = () => {
    fetch("https://alimama.onrender.com/current_user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.currentUser) {
          setCurrentUser(response.currentUser);
        }
      });
  };
  const contextData = {
    register,
    login,
    logout,
    getCurrentUser,
    current_user: currentUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}