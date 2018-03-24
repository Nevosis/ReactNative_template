export const loggerMiddleware = store => next => action => {
	// action type is function when thunk is used
	if (typeof action.type === "string") {
		//	console.warn("dispatching", action);
	}
	let result = next(action);
	return result;
};
