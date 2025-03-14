import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./navbar.jsx";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import ProtectedRoute

const LoginForm = lazy(() => import("./pages/loginpage/loginform.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          {/* ✅ Protect the main app */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<App />} />
          </Route>

          {/* Login & Signup Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<LoginForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
