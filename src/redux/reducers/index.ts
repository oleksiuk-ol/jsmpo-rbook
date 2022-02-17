import { combineReducers } from "redux";

import user from "./userReducer";
import recipes from "./recipesReducer";
import recipe from "./recipeReducer";

const rootReducer = combineReducers({
  user,
  recipes,
  recipe,
});

export default rootReducer;
