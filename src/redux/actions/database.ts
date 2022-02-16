import { getRecipes } from "services/database";
import { DB } from "./constants";

const getAllSuccess = (payload: any) => ({
  type: DB.GET_ALL,
  payload,
});

export const getAllRecipes = async (dispatch: any) => {
  const recipes = await getRecipes();
  if (recipes) {
    dispatch(getAllSuccess(recipes));
  }
};
