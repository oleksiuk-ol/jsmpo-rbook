import {
  Box,
  Typography,
  ListItemText,
  List,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipeById,
  getAllIngredients,
  getAllRecipes,
} from "redux/actions/database";
import { ingredientsSelector, recipesSelector } from "redux/selectors";
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
    dispatch(getAllIngredients);
  }, []);
  const recipesData = useSelector(recipesSelector);
  const ingredientsData = useSelector(ingredientsSelector);

  const [filterField, setFilterField] = useState("");
  const ingredientsList = Object.values(ingredientsData);
  const [ingredientList, setIngredientList] = React.useState([]);

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setFilterField(event.target.value);
  };

  return (
    <Box marginTop="50px">
      <Select
        displayEmpty
        multiple
        value={ingredientsList}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }

          return selected.join(", ");
        }}
      >
        {/* {Object.values(ingredientsData).map(
          (field: any) =>
          <MenuItem key = {}>
          </MenuItem>
        )

      } */}

        {ingredientsList.map((ingredient: any) => (
          <MenuItem key={ingredient}>{ingredient}</MenuItem>
        ))}
      </Select>
      <TextField
        label="Filter"
        variant="standard"
        name="filter"
        onChange={handleFilterInputChange}
      />
      {console.log("List: " + ingredientsList)}
      {console.log("Data: " + ingredientsData)}
      <List>
        {Object.values(recipesData).map(
          (field: any) =>
            field.title.includes(filterField) && (
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
            )
        )}
      </List>
    </Box>
  );
};

export default Home;
