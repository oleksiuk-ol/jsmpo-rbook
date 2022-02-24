import { Box, Typography, ListItemText, List, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeById, getAllRecipes } from "redux/actions/database";
import { recipesSelector } from "redux/selectors";
import { Link } from "react-router-dom";
import { getStorage, ref } from "firebase/storage";
import { palette } from "@mui/system";

const Home: React.FC = () => {
  const storage = getStorage();
  const imagesRef = ref(storage, "images");
  const spaceRef = ref(storage, "images/54659021.gif");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
  }, []);
  const recipesData = useSelector(recipesSelector);

  // const deleteRecipe = (id: any) => {
  //   dispatch(deleteRecipeById(id));
  // };

  return (
    <Box marginTop="50px">
      <List>
        {Object.values(recipesData).map((field: any) => (
          <ListItemText key={field.id}>
            <Box
              margin="20px"
              height="100px"
              width="800px"
              display="flex"
              flexDirection="row"
              sx={{ border: 1, borderColor: "grey.500" }}
            >
              <Box height="100px" width="100px">
                <img
                  height="100px"
                  width="100px"
                  src={field.img}
                  alt={field.title}
                ></img>
              </Box>
              <Box display="flex" flexDirection="column" marginLeft="10px">
                <Typography
                  component={Link}
                  to={`/recipe/${field.id}`}
                  style={{ textDecoration: "none" }}
                  variant="h6"
                  color="grey.900"
                >
                  {field.title}
                </Typography>
                <Typography>{field.desc}</Typography>
              </Box>
            </Box>
            {console.log(spaceRef)}
          </ListItemText>
        ))}
      </List>
    </Box>
  );
};

export default Home;
