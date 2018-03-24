import * as types from "./actionsTypes";

export const updateAppStatus = status => {
  return {
    type: types.UPDATE_APP_STATUS,
    status
  };
};
