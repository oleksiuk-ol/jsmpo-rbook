import { DB } from "redux/actions/constants";

const initState = {};
const ingredientsReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case DB.GET_ALL_INGREDIENTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
