import { ref, get, child, set, getDatabase } from "firebase/database";
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

export const getRecipe = async (id: string) => {
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

export const createRecipe = async (obj: any) => {
  console.log("create service");
  const db = getDatabase();
  const id = `r_${Date.now()}`;
  try {
    await set(ref(db, `/recipes/${id}`), { ...obj, id });
  } catch (err) {
    console.log(err);
  }
};
