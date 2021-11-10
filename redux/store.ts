import {createStore, combineReducers} from 'redux';
import partnersState from './reducers/partnersReducer';
import DistanceState from './reducers/distanceReducer';

const rootReducer = combineReducers({
    partnersState,
    DistanceState
});

const store = createStore(rootReducer);

export default store;