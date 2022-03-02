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

  const checkRecipeIngredients = (object: any) => {
    console.log("Проверка ключей");
    let a = true;
    if (keys.length === 0) {
      return true;
    } else {
      // keys.forEach((element) => {
      //   console.log("Проверка ключей: ", element);
      //   console.log(
      //     "Есть ключ? ",
      //     element,
      //     " в ",
      //     object.title,
      //     "? ",
      //     object.ingredients.hasOwnProperty(element)
      //   );
      //   if (!object.ingredients.hasOwnProperty(element)) {
      //     console.log(object.title, " Не прошел проверку ", element);
      //     a = false;
      //     return true;
      //   }
      // });
      for (let i = 0; i < keys.length; i++) {
        console.log("Проверка ключей: ", keys[i]);
        console.log(
          "Есть ключ? ",
          keys[i],
          " в ",
          object.title,
          "? ",
          object.ingredients.hasOwnProperty(keys[i])
        );
        if (!object.ingredients.hasOwnProperty(keys[i])) {
          console.log(object.title, " Не прошел проверку ", keys[i]);
          return false;
        }
      }
    }
    return true;
  };

  const handleCheckboxChange = (event: SelectChangeEvent<typeof keys>) => {
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
      {console.log("Check " + keys)}
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
                      src={field.img}
                      alt={field.title}
                    ></img>
                  </Box>
                  <Box display="flex" flexDirection="column" marginLeft="10px">
                    {checkRecipeIngredients(field)}
                    {console.log("Ключи рендер", keys)}
                    {console.log("Ключи рендер первый", keys[0])}
                    {console.log(
                      "Проверка: ",
                      field.title,
                      " Результат: ",
                      checkRecipeIngredients(field),
                      " Ключи: ",
                      keys
                    )}
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
