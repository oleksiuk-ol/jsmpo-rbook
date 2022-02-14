import { AUTH } from "redux/actions/constants";

const initState = {};
const userReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case AUTH.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case AUTH.LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default userReducer;
