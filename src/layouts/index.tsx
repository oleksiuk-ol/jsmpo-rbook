import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/selectors";
import { authSuccess, getUserEmail } from "redux/actions/auth";

const Layout: React.FC = ({ children }) => {
  const userData = useSelector(userSelector);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // // inside useEffect dispatch(authSuccess({email}))

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
    </Box>
  );
};

export default Layout;
