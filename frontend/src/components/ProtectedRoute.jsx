import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_BACKENDURL+"/api/auth/check",
          { withCredentials: true }
        );

        setLoggedIn(res.data.loggedIn);
      } catch (err) {
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (loading) return null; // or loader UI

  if (!loggedIn) return <Navigate to="/register" replace />;

  return children; // authenticated → show protected page
};

export default ProtectedRoute;
