import {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
} from "services/database";
import { DB } from "./constants";

const getAllSuccess = (payload: any) => ({
  type: DB.GET_ALL,
  payload,
});

const getByIdSuccess = (payload: any) => ({
  type: DB.GET_BY_ID,
  payload,
});

export const getAllRecipes = async (dispatch: any) => {
  const recipes = await getRecipes();
  if (recipes) {
    dispatch(getAllSuccess(recipes));
  }
};

export const getRecipeById = (id: any) => async (dispatch: any) => {
  const recipe = await getRecipe(id);
  console.log("getRecipeById: ", recipe);
  if (recipe) {
    dispatch(getByIdSuccess(recipe));
  }
};

export const createRecipeAction = (obj: any) => async (dispatch: any) => {
  console.log("Create action");
  await createRecipe(obj);
};

export const updateRecipeAction = (obj: any) => async (dispatch: any) => {
  console.log("Update action");
  await updateRecipe(obj);
};
