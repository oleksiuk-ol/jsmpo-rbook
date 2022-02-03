import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box height="100vh" display="flex">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
