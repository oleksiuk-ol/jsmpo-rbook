import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loaderSelector, userSelector } from "redux/selectors";
import { getUserEmail } from "redux/actions/auth";

const Layout: React.FC = ({ children }) => {
  const userData = useSelector(userSelector);
  const loading = useSelector(loaderSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserEmail);
  }, []);

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
      {loading && (
        <Box position="absolute" top="40%" width="100%" textAlign="center">
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
