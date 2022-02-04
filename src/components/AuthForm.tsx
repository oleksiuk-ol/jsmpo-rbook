import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AuthForm: React.FC = () => {
  const [isNew, setIsNew] = React.useState(false);

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsNew(event.target.checked);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Typography textAlign="center" variant="h5">
        {isNew ? "Log in" : "Sign up"}
      </Typography>
      <TextField label="Email" variant="standard" />
      <TextField label="Password" type="password" variant="standard" />
      {isNew && (
        <TextField
          label="Confirm password"
          type="password"
          variant="standard"
        />
      )}
      <Button variant="contained">{isNew ? "Log in" : "Sign up"} </Button>
      <FormControlLabel
        control={<Checkbox checked={isNew} onChange={handleChange} />}
        label="New user?"
      />
    </Box>
  );
};
export default AuthForm;
