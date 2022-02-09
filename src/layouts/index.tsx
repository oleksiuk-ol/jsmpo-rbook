import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors";

const Layout: React.FC = ({ children }) => {
  const userData = useSelector(userSelector);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header userData={userData} />
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
