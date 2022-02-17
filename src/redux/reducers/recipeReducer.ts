import { DB } from "redux/actions/constants";

const initState = {};

const recipeReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case DB.GET_BY_ID:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
