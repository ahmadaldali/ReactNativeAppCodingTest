import { FILTER_PARTNERS} from '../types';

const initialState = {
  partners: [],
};

const partnersState = (state = initialState, action: any) => {
 
  switch (action.type) {
    case FILTER_PARTNERS:
      return {
        ...state,
        partners: action.payload,
      };

    default:
      return state;
  }
};

export default partnersState;