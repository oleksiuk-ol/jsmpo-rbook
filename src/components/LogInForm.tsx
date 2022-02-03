import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const LoginForm: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Typography textAlign="center" variant="h5">
        Log in
      </Typography>
      <TextField label="email" variant="standard" />
      <TextField label="password" type="password" variant="standard" />
      <Button variant="contained">Log in</Button>
    </Box>
  );
};
export default LoginForm;
