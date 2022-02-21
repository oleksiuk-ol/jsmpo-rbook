import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import {
  createRecipeAction,
  getAllIngredients,
  updateRecipeAction,
} from "redux/actions/database";
import { ingredientsSelector } from "redux/selectors";

const CreateRecipe: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllIngredients);
  }, []);
  const ingredients = useSelector(ingredientsSelector);

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
    return { title: "Fries", id: "r_1645199372746", desc: "Some desc1" };
  };
  return (
    <Box>
      <Typography> a </Typography>
      {console.log("Page ingr:", ingredients)}
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
