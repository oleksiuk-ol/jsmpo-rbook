import React from "react";
import { Box, Toolbar, AppBar, Button } from "@mui/material";

import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button component={Link} to={"/"} color="inherit">
            Home
          </Button>
          <Button component={Link} to={"/recipe/1"} color="inherit">
            Recipe
          </Button>
        </Box>
        <Button component={Link} to={"/userProfile/1"} color="inherit">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
