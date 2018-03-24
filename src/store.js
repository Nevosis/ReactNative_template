import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loggerMiddleware } from "./middleware";

const store = createStore(reducers, applyMiddleware(loggerMiddleware, thunk));

export default store;
