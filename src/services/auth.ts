import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../firebase";

export type UserCreds = {
  email: string;
  password: string;
};

const auth = getAuth();

export const signIn = async ({ email, password }: UserCreds) => {
  try {
    const {
      user: { email: userEmail },
    } = await signInWithEmailAndPassword(auth, email, password);
    return userEmail;
  } catch (err) {
    console.log("signIn ERROR:", err);
    return null;
  }
};
export const signUp = async ({ email, password }: UserCreds) => {
  try {
    const {
      user: { email: userEmail },
    } = await createUserWithEmailAndPassword(auth, email, password);
    return userEmail;
  } catch (err) {
    console.log("signIn ERROR:", err);
    return null;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    console.log("SIGN_OUT ERROR:", err);
    return false;
  }
};

export const getUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};
