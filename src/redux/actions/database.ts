import {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  getIngredients,
  deleteRecipe,
} from "services/database";
import { DB } from "./constants";
import { setLoader } from "./loader";

const getAllSuccess = (payload: any) => ({
  type: DB.GET_ALL_RECIPES,
  payload,
});

const getAllIngrSuccess = (payload: any) => ({
  type: DB.GET_ALL_INGREDIENTS,
  payload,
});

const getByIdSuccess = (payload: any) => ({
  type: DB.GET_RECIPE_BY_ID,
  payload,
});

const removeByIdSuccess = () => ({
  type: DB.REMOVE_BY_ID,
});

export const getAllRecipes = async (dispatch: any) => {
  dispatch(setLoader(true));
  const recipes = await getRecipes();

  if (recipes) {
    dispatch(getAllSuccess(recipes));
  }
  dispatch(setLoader(false));
};

export const getAllIngredients = async (dispatch: any) => {
  const ingredients = await getIngredients();
  if (ingredients) {
    dispatch(getAllIngrSuccess(ingredients));
  }
};

export const getRecipeById = (id: any) => async (dispatch: any) => {
  dispatch(setLoader(true));
  const recipe = await getRecipe(id);
  if (recipe) {
    dispatch(getByIdSuccess(recipe));
  }
  dispatch(setLoader(false));
};

export const deleteRecipeById = (id: any) => async (dispatch: any) => {
  await deleteRecipe(id);
  dispatch(removeByIdSuccess);
};

export const createRecipeAction = (obj: any) => async (dispatch: any) => {
  await createRecipe(obj);
};

export const updateRecipeAction = (obj: any) => async (dispatch: any) => {
  await updateRecipe(obj);
};
