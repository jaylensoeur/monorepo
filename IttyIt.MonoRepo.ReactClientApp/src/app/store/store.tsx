import * as Redux from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLocalstorage from 'redux-localstorage';
import hotels from './hotel/reducer';
import weather from './weather/reducer';

const enhancer = Redux.compose(
    Redux.applyMiddleware(reduxThunk),
    reduxLocalstorage(),
);

const rootReducer = Redux.combineReducers({hotels, weather});
const store = Redux.createStore(rootReducer, enhancer);

export default store;
