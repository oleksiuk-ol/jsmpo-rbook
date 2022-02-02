import React from "react";
import "App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import RecipePage from "pages/RecipePage";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import UserProfile from "pages/UserProfile";
import { Box } from "@mui/material";

function App() {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box height="100vh">
        <Routes>
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<RecipePage />} />
          <Route path="userProfile/:id" element={<UserProfile />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
