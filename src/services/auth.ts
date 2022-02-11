import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../firebase";

export type UserCreds = {
  email: string;
  password: string;
};

const auth = getAuth();
const user = auth.currentUser;

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
export const signUp = () => ({});

export const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
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
