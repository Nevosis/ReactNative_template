import * as types from "../actions/actionsTypes";

const initialState = {
	status: "Not clicked"
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_APP_STATUS: {
			return { ...state, status: action.status };
		}
		default:
			return state;
	}
};

export default appReducer;
