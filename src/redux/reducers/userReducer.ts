const userReducer = (state = {}, { type, payload }: any) => {
  switch (type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        email: payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
