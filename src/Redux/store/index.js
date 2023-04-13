import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducer/index";
import thunkMiddleware from "redux-thunk";

const composeEnhancer= window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store= createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;