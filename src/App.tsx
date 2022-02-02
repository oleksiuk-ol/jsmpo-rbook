import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import Header from "./layouts/Header";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="userProfile/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
