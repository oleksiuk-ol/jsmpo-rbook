import React from "react";
import { Box } from "@mui/material";
import AuthForm from "components/AuthForm";

const Authorization: React.FC = () => {
  return (
    <Box
      sx={{ border: 1, borderColor: "grey.500" }}
      width="400px"
      bgcolor="#F0F8FF"
      marginTop="30px"
      height="auto"
      padding="20px"
    >
      <AuthForm />
    </Box>
  );
};
export default Authorization;
