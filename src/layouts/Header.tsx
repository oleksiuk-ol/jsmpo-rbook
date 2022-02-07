import React from "react";
import { Toolbar, AppBar } from "@mui/material";
import Sidebar from "./Sidebar";
import HeaderNav from "./HeaderNav";

export type HeaderProps = {
  userData: {
    email?: string;
  };
};

const Header: React.FC<HeaderProps> = ({ userData }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <HeaderNav />
        <Sidebar userData={userData} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
