import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "redux/actions/userLogin";
import { UserCreds } from "services/auth";
import { userRegistration } from "redux/actions/auth";

const AuthForm: React.FC = () => {
  const [isNew, setIsNew] = React.useState(false);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNew(event.target.checked);
  };

  const handleClickAuth = () => {
    if (isNew) {
      dispatch(userRegistration(userCreds));
    } else {
      dispatch(userLogin(userCreds));
    }
  };

  const [userCreds, setUserCreds] = useState<UserCreds>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const credField = event.target.name as keyof UserCreds;
    setUserCreds({
      ...userCreds,
      [credField]: event.target.value,
    });
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
      <TextField
        label="Email"
        variant="standard"
        name="email"
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="standard"
        name="password"
        onChange={handleInputChange}
      />
      {isNew && (
        <TextField
          label="Confirm password"
          type="password"
          variant="standard"
        />
      )}
      <Button
        variant="contained"
        onClick={handleClickAuth}
        component={Link}
        to="/"
      >
        {isNew ? "Log in" : "Sign up"}
      </Button>
      <FormControlLabel
        control={<Checkbox checked={isNew} onChange={handleChange} />}
        label="New user?"
      />
    </Box>
  );
};
export default AuthForm;
