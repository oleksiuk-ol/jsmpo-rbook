import {
  Box,
  Typography,
  ListItemText,
  List,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredients, getAllRecipes } from "redux/actions/database";
import { ingredientsSelector, recipesSelector } from "redux/selectors";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
    dispatch(getAllIngredients);
  }, []);
  const recipesData = useSelector(recipesSelector);
  const ingredientsData = useSelector(ingredientsSelector);

  const [filterField, setFilterField] = useState("");
  const ingredientsList = Object.values(ingredientsData);
  const [keys, setKeys] = React.useState<string[]>([]);

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterField(event.target.value);
  };

  function getKeyByValue(value: any) {
    return Object.keys(ingredientsData).find(
      (key) => ingredientsData[key] === value
    );
  }

  const checkRecipeIngredients = (object: any) => {
    if (keys.length === 0) {
      return true;
    } else {
      for (let i = 0; i < keys.length; i++) {
        if (!object.ingredients.hasOwnProperty(keys[i])) {
          return false;
        }
      }
    }
    return true;
  };

  const handleCheckboxChange = (event: SelectChangeEvent<typeof keys>) => {
    const {
      target: { value },
    } = event;
    setKeys(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box marginTop="50px">
      <Box
        display="flex"
        justifyContent="flexStart"
        marginLeft="20px"
        gap="10px"
      >
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Ingredients</InputLabel>
          <Select
            input={<OutlinedInput label="Name" />}
            displayEmpty
            multiple
            value={keys}
            onChange={handleCheckboxChange}
          >
            {ingredientsList.map((ingredient: any) => (
              <MenuItem key={ingredient} value={getKeyByValue(ingredient)}>
                {ingredient}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Search.."
          variant="outlined"
          name="filter"
          onChange={handleFilterInputChange}
        />
      </Box>
      <List>
        {Object.values(recipesData).map(
          (field: any) =>
            field.title.includes(filterField) &&
            checkRecipeIngredients(field) && (
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
                      src={field.thumbnail}
                      alt={field.title}
                    ></img>
                  </Box>
                  <Box display="flex" flexDirection="column" marginLeft="10px">
                    {checkRecipeIngredients(field)}
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
              </ListItemText>
            )
        )}
      </List>
    </Box>
  );
};

export default Home;
