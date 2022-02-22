import React, { useEffect } from "react";
import { Box, List, ListItemText, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "redux/actions/database";
import { recipeSelector } from "redux/selectors";

const CreateRecipe: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);

  const recipeData = useSelector(recipeSelector);

  return (
    <Box>
      <List>
        <ListItemText>
          <Typography>{recipeData?.title}</Typography>
        </ListItemText>
      </List>
    </Box>
  );
};

export default CreateRecipe;
