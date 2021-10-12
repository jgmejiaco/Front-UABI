import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import { reducer as exampleReducer } from "./modules/example_module/redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // example: exampleReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
export type AppDispatch = typeof store.dispatch;
