import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
    // console.log(auth.currentUser);
    return null;
  }
};
export const signUp = () => ({});

export const logOut = () => ({});

export const getUser = (callback: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      callback(user);
      console.log("User here");
      console.log(user);
      return user.email;
    } else {
      // User is signed out
      // ...
      console.log("no User here");
      console.log(user);
      return null;
    }
  });
  console.log("getUser");
  return null;
};

// export const getUser = () => {
// //   if (user) {
// //     // User is signed in, see docs for a list of available properties
// //     // https://firebase.google.com/docs/reference/js/firebase.User
// //     // ...
// //     console.log("User here");
// //     console.log(user);
// //   } else {
// //     // No user is signed in.
// //     console.log("no User here");
// //     console.log(user);
// //     // console.log(auth.currentUser);

//   }
// };
