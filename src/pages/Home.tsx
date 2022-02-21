import { Box, Typography, ListItemText, List, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeById, getAllRecipes } from "redux/actions/database";
import { recipesSelector } from "redux/selectors";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
  }, []);
  const recipesData = useSelector(recipesSelector);

  const deleteRecipe = (id: any) => {
    dispatch(deleteRecipeById(id));
  };

  return (
    <Box>
      <List>
        {Object.values(recipesData).map((field: any) => (
          <ListItemText key={field.id}>
            <Box>
              <Button onClick={() => deleteRecipe(field.id)}>Delete</Button>
              <Typography component={Link} to={`/recipe/${field.id}`}>
                {field.title}
              </Typography>
            </Box>
          </ListItemText>
        ))}
        {console.log("home page: ", recipesData)}
      </List>
    </Box>
  );
};

export default Home;
