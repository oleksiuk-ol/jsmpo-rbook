import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return <Box>{`UserProfile ${id}`}</Box>;
}

export default UserProfile;
