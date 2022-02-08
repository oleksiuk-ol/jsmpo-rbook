type Credentials = {
  email: string;
  password: string;
};

export const userLogin =
  ({ email }: Credentials) =>
  (dispatch: any, getState: any) => {
    dispatch({
      type: "AUTH_SUCCESS",
      payload: { email },
    });
    console.log(email);
  };
