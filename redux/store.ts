import {createStore, combineReducers} from 'redux';
import partnersState from './reducers/partnersReducer';
import DistanceState from './reducers/distanceReducer';
import LoaderState from './reducers/changeLoader';

const rootReducer = combineReducers({
    partnersState,
    DistanceState,
    LoaderState,
});

const store = createStore(rootReducer);

export default store;