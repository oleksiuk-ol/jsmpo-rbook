import React from "react";
import { Box, Button } from "@mui/material";

import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <Box display="flex">
      <Button component={Link} to={"/"} color="inherit">
        Home
      </Button>
      <Button component={Link} to={"/recipe/1"} color="inherit">
        Recipe
      </Button>
    </Box>
  );
}

export default HeaderNav;
