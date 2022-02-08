import { AUTH } from "./constants";

type Credentials = {
  email: string;
  password: string;
};

export const userLogin =
  ({ email }: Credentials) =>
  (dispatch: any, getState: any) => {
    dispatch({
      type: AUTH.SUCCESS,
      payload: { email },
    });
    console.log(email);
  };
