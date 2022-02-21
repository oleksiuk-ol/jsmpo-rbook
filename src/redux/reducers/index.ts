import { combineReducers } from "redux";

import user from "./userReducer";
import recipes from "./recipesReducer";
import recipe from "./recipeReducer";
import ingredients from "./ingredientsReducer";

const rootReducer = combineReducers({
  user,
  recipes,
  recipe,
  ingredients,
});

export default rootReducer;
