import { SET_DISTANCE } from '../types';

const initialState = {
  distance: 0,
};

const DistanceState = (state = initialState, action: any) => {
 
  switch (action.type) {
    case SET_DISTANCE:
      return {
        ...state,
        distance: action.payload,
      };

    default:
      return state;
  }
};

export default DistanceState;