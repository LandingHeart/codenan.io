import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CommunityPage from "./pages/CommunityPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import TutorialPage from "./pages/Tutorial/TutorialPage";
import NavBar from "./components/NavBar";
import TwoPointer from "./pages/Tutorial/TwoPointer";
export default function AppRouter() {
  // const leetcodeNumId = [1, 2, 3];
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index path="/" element={<MainPage />} exact />
        <Route path="/blog" element={<BlogPage />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />

        <Route path="/tutorial" element={<TutorialPage />} exact />
        {/* {leetcodeNumId.map((id, index) => (
          <Route
            key={index}
            path={`/tutorial/${id}`}
            element={<Tutorials />}
            exact
          />
        ))} */}
        <Route path="/tutorial/twopointer" element={<TwoPointer />} exact />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
