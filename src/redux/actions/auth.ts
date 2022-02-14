import { signIn, signUp, getUser, logOut } from "services/auth";
import { AUTH } from "./constants";

type Credentials = {
  email: string;
  password: string;
};

export const authSuccess = (payload: Partial<Credentials>) => ({
  type: AUTH.SUCCESS,
  payload,
});

export const logout = () => ({
  type: AUTH.LOGOUT,
});

export const userLogin =
  ({ email, password }: Credentials) =>
  async (dispatch: any, getState: any) => {
    const userEmail = await signIn({ email, password });
    if (userEmail) {
      dispatch(authSuccess({ email: userEmail }));
    }
  };

export const userRegistration =
  ({ email, password }: Credentials) =>
  async (dispatch: any, getState: any) => {
    const userEmail = await signUp({ email, password });
    console.log("reg");
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

export const signOut = async (dispatch: any) => {
  if (await logOut()) dispatch(logout());
};
