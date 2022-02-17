import { Box, Typography, ListItemText, List } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "redux/actions/database";
import { recipesSelector } from "redux/selectors";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
  }, []);
  const recipesData = useSelector(recipesSelector);

  return (
    <Box>
      <List>
        {Object.values(recipesData).map((field: any) => (
          <ListItemText key={field.id}>
            <Typography component={Link} to={`/recipe/${field.id}`}>
              {field.title}
            </Typography>
          </ListItemText>
        ))}
        {console.log("home page: ", recipesData)}
      </List>
    </Box>
  );
};

export default Home;
