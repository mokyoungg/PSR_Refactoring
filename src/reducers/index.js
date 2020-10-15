import { combineReducers } from "redux";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
});
