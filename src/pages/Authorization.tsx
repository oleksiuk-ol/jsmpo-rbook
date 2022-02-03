import React from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";
import LoginForm from "components/LogInForm";
import RegistrationForm from "components/RegistrationForm";

const Authorization: React.FC = () => {
  const [isNew, setIsNew] = React.useState(false);

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsNew(event.target.checked);
  };

  return (
    <Box
      sx={{ border: 1, borderColor: "grey.500" }}
      width="400px"
      bgcolor="#F0F8FF"
      marginTop="30px"
      height="auto"
      padding="20px"
    >
      {isNew ? <RegistrationForm /> : <LoginForm />}
      <FormControlLabel
        control={<Checkbox checked={isNew} onChange={handleChange} />}
        label="New user?"
      />
    </Box>
  );
};
export default Authorization;
