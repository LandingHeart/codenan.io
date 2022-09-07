import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CommunityPage from "./pages/CommunityPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import TutorialPage from "./pages/TutorialPage";
import NavBar from "./components/NavBar";
export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/blog" element={<BlogPage />} exact />
        <Route path="/tutorial" element={<TutorialPage />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
      </Routes>
    </Router>
  );
}
