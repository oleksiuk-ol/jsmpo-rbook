import { DB } from "redux/actions/constants";

const initState = {};
const recipesReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case DB.GET_ALL_RECIPES:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
