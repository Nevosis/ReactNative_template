import { combineReducers } from "redux";
import appReducer from "./appReducer";
import navReducer from "./navReducer";

// Combine Reducers
const reducers = combineReducers({
	appState: appReducer,
	nav: navReducer
});

export default reducers;
