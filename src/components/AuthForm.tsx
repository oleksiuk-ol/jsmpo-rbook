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

type UserCreds = {
  email: string;
  password: string;
};

const AuthForm: React.FC = () => {
  const [isNew, setIsNew] = React.useState(false);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNew(event.target.checked);
  };

  const handleClickLogin = () => {
    dispatch(userLogin(userCreds));
  };

  const conditionalProps = isNew
    ? {} //Sign up props will be here
    : { onClick: handleClickLogin, component: Link, to: "/" };

  const [userCreds, setUserCreds] = useState({
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
      <Button variant="contained" {...conditionalProps}>
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
