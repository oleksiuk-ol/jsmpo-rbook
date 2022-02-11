import { signIn, getUser } from "services/auth";
import { AUTH } from "./constants";

type Credentials = {
  email: string;
  password: string;
};

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

export const getUserEmail = async (dispatch: any) => {
  console.log("getUserEmail");
  const user: any = await getUser();
  if (user) {
    console.log(user);
    dispatch(authSuccess({ email: user.email }));
  } else console.log("no email");
};

// export const signUp = () => ({});

// export const logOut = () => ({});
