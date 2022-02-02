import { Box, Button, Drawer } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar(this: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex">
      <Drawer anchor="right" open={open} variant="persistent">
        <Box width="250px" display="flex" flexDirection="column">
          <Box
            position="sticky"
            top="0px"
            height="64px"
            boxShadow="0px -4px 10px 0px #c9c9c9"
            display="flex"
            justifyContent="center"
          >
            <Button color="inherit" onClick={handleClickClose}>
              Close
            </Button>
          </Box>
          <Button component={Link} to={"/userProfile/1"} color="inherit">
            Profile
          </Button>
          <Button
            component={Link}
            to={"/create"}
            color="inherit"
            onClick={handleClickClose}
          >
            Create
          </Button>
          <Button component={Link} to={"/userProfile/1"} color="inherit">
            Log out
          </Button>
        </Box>
      </Drawer>
      <Button onClick={handleClickOpen} color="inherit">
        Open
      </Button>
    </Box>
  );
}

export default Sidebar;
