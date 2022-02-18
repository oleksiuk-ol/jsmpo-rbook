import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createRecipeAction } from "redux/actions/database";

const CreateRecipe: React.FC = () => {
  const dispatch = useDispatch();

  const create = () => {
    const testObj = createTestObj();
    dispatch(createRecipeAction(testObj));
  };

  const createTestObj = () => {
    return { title: "Sandwich", id: "rcp_1", desc: "Some desc" };
  };
  return (
    <Box>
      <Typography> a </Typography>
      <Button color="inherit" onClick={create}>
        Create
      </Button>
    </Box>
  );
};

export default CreateRecipe;
