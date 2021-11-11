import { CHANGE_LOADER } from "../types";

const initialState = {
  loader: false,
};

const LoaderState = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LOADER:
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
};

export default LoaderState;
