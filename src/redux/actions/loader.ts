import { LOADER } from "./constants";

export const setLoader = (payload: boolean) => ({
  type: LOADER.SET_LOADER,
  payload,
});
