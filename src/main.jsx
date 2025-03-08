import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./navbar.jsx";

// Lazy load the LoginForm component
const LoginForm = lazy(() => import("./pages/loginform"));

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar outside Routes to make it appear on all pages */}
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          {/* Main route */}
          <Route path="/" element={<App />} />
          {/* Login route */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);