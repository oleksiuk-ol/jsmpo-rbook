import React from "react";
import { Box, Toolbar, AppBar, Button } from "@mui/material";

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex">
          <Button component={Link} to={"/"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/recipe/1"} color="inherit">
            Recipe
          </Button>
        </Box>
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
