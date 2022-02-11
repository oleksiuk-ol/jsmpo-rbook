import { useDispatch } from "react-redux";
import { signIn, getUser } from "services/auth";
import { AUTH } from "./constants";

type Credentials = {
  email: string;
  password: string;
};

// const dispatch = useDispatch();

export const authSuccess = (payload: Partial<Credentials>) => ({
  type: AUTH.SUCCESS,
  payload,
});

export const userLogin =
  ({ email, password }: Credentials) =>
  async (dispatch: any, getState: any) => {
    const userEmail = await signIn({ email, password });
    if (userEmail) {
      dispatch(authSuccess({ email: userEmail }));
    }
  };

// export const getUserEmail = () => {
//   console.log("a");
//   const email = getUser();
//   console.log(email);
// };

export const getUserEmail = (dispatch: any) => {
  console.log("getUserEmail");
  const userEmail = getUser((user: any) => {
    // console.log({ user });
    dispatch(authSuccess({ email: user.email }));
  });
  if (userEmail) {
    console.log(userEmail);
  } else console.log("no email");
};

// export const signUp = () => ({});

// export const logOut = () => ({});
