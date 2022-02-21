import { ref, get, child, set, update, remove } from "firebase/database";
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

export const getIngredients = async () => {
  try {
    const snapshot = await get(child(dbRef, "/ingredients"));
    const val = snapshot.val();
    console.log("service ingr = ", val);
    return val;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getRecipe = async (id: string) => {
  try {
    const snapshot = await get(child(dbRef, `/recipes/${id}`));
    const val = snapshot.val();

    return val;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteRecipe = async (id: string) => {
  try {
    await remove(ref(database, `/recipes/${id}`));
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createRecipe = async (obj: any) => {
  const id = `r_${Date.now()}`;
  try {
    await set(ref(database, `/recipes/${id}`), { ...obj, id });
  } catch (err) {
    console.log(err);
  }
};

export const updateRecipe = async (obj: any) => {
  const id = obj.id;
  try {
    await update(ref(database, `/recipes/${id}`), { ...obj, id });
  } catch (err) {
    console.log(err);
  }
};
