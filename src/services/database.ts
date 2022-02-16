import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

const dbRef = ref(database);

export const getRecipes = async () => {
  try {
    const snapshot = await get(child(dbRef, "/"));
    const val = snapshot.val();
    console.log(val);
    return val;
  } catch (err) {
    console.log(err);
    return null;
  }
};
