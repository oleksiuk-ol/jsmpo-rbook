import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

const dbRef = ref(database);

export const getRecipes = async () => {
  try {
    const snapshot = await get(child(dbRef, "/recipes"));
    const val = snapshot.val();
    console.log(val);
    return val;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getRecipe = async (id: any) => {
  try {
    const snapshot = await get(child(dbRef, `/recipes/${id}`));
    const val = snapshot.val();
    console.log("getRecipe: ", val);
    return val;
  } catch (err) {
    console.log(err);
    return null;
  }
};
