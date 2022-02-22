import { LOADER } from "redux/actions/constants";

const initState = false;
const loaderReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case LOADER.SET_LOADER:
      return payload;
    default:
      return state;
  }
};

export default loaderReducer;
