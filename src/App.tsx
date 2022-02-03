import React from "react";
import "App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import RecipePage from "pages/RecipePage";
import UserProfile from "pages/UserProfile";
import CreateRecipe from "pages/CreateRecipe";
import Layout from "layouts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="userProfile/:id" element={<UserProfile />} />
        <Route path="create" element={<CreateRecipe />} />
      </Routes>
    </Layout>
  );
}

export default App;
