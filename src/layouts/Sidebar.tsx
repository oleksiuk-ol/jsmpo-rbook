import { Box, Button, Drawer } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "redux/actions/auth";

type SidebarProps = {
  userData: {
    email?: string;
  };
};

const Sidebar: React.FC<SidebarProps> = ({ userData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickSignOut = () => {
    setOpen(false);
    dispatch(signOut);
  };

  const conditionalProps = userData?.email
    ? { onClick: handleClickOpen }
    : { component: Link, to: "/auth" };

  return (
    <Box display="flex">
      <Drawer anchor="right" open={open} variant="persistent">
        <Box width="20vw" display="flex" flexDirection="column">
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
          <Button component={Link} to={"/create"} color="inherit">
            Create
          </Button>
          <Button color="inherit" onClick={handleClickSignOut}>
            Log out
          </Button>
        </Box>
      </Drawer>

      <Button {...conditionalProps} color="inherit">
        {userData?.email ?? "Log In"}
      </Button>
    </Box>
  );
};

export default Sidebar;
