import { combineReducers, createStore , applyMiddleware} from "redux";
import rentReducer from "./reducers/rent-reducer";
import { reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    rentItems: rentReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;