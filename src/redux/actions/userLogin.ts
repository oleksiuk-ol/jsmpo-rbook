import { signIn } from "services/auth";
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
