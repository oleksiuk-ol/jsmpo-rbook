import React from "react";
import { Toolbar, AppBar } from "@mui/material";
import Sidebar from "./Sidebar";
import HeaderNav from "./HeaderNav";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <HeaderNav />
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
