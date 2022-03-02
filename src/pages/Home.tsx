import {
  Box,
  Typography,
  ListItemText,
  List,
  Button,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
  const ingredientKeyList = Object.keys(ingredientsData);
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [keys, setKeys] = React.useState<string[]>([]);

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setFilterField(event.target.value);
  };

  function getKeyByValue(value: any) {
    return Object.keys(ingredientsData).find(
      (key) => ingredientsData[key] === value
    );
  }

  const handleCheckboxChange = (
    event: SelectChangeEvent<typeof ingredients>
  ) => {
    console.log("Event", event.target.value);
    const {
      target: { value },
    } = event;
    setKeys(typeof value === "string" ? value.split(",") : value);
    console.log("Key array: ", keys);
  };

  return (
    <Box marginTop="50px">
      <Select
        displayEmpty
        multiple
        value={keys}
        input={<OutlinedInput label="Ingredient" />}
        onChange={handleCheckboxChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Ingredients</em>;
          }

          return selected.join(", ");
        }}
      >
        {ingredientsList.map((ingredient: any) => (
          <MenuItem key={ingredient} value={getKeyByValue(ingredient)}>
            {ingredient}
          </MenuItem>
        ))}
        {console.log("ingr list:", ingredientsData)}
      </Select>
      <TextField
        label="Filter"
        variant="standard"
        name="filter"
        onChange={handleFilterInputChange}
      />
      {console.log("Ключи: " + ingredientKeyList)}
      {console.log("Ключи 2: " + keys)}
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
