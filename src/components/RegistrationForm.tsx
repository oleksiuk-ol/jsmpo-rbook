import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const RegistrationForm: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Typography textAlign="center" variant="h5">
        Sign up
      </Typography>
      <TextField label="Email" variant="standard" />
      <TextField label="Password" type="password" variant="standard" />
      <TextField label="Confirm password" type="password" variant="standard" />
      <Button variant="contained">Sign up</Button>
    </Box>
  );
};
export default RegistrationForm;
