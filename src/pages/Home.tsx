import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "redux/actions/database";
import { recipesSelector } from "redux/selectors";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
  }, []);
  const recipesData = useSelector(recipesSelector);

  return (
    <Box>
      <Typography>{recipesData.title}</Typography>
    </Box>
  );
};

export default Home;
