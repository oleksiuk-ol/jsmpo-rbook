import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createRecipeAction, updateRecipeAction } from "redux/actions/database";

const CreateRecipe: React.FC = () => {
  const dispatch = useDispatch();

  const create = () => {
    const testObj = createTestObj();
    dispatch(createRecipeAction(testObj));
  };

  const update = () => {
    const updatedObj = updateTestObj();
    dispatch(updateRecipeAction(updatedObj));
  };

  const createTestObj = () => {
    return { title: "Sandwich", desc: "Some desc" };
  };

  const updateTestObj = () => {
    return { title: "Fries", id: "r_1645192638979", desc: "Some desc1" };
  };
  return (
    <Box>
      <Typography> a </Typography>
      <Button color="inherit" onClick={create}>
        Create
      </Button>
      <Button color="inherit" onClick={update}>
        Update
      </Button>
    </Box>
  );
};

export default CreateRecipe;
