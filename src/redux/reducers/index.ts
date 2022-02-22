import { combineReducers } from "redux";

import user from "./userReducer";
import recipes from "./recipesReducer";
import recipe from "./recipeReducer";
import ingredients from "./ingredientsReducer";
import loader from "./loaderReducer";

const rootReducer = combineReducers({
  user,
  recipes,
  recipe,
  ingredients,
  loader,
});

export default rootReducer;
