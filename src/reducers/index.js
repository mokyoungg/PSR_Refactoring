import { combineReducers } from "redux";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case "FILTER_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: productReducer,
  filter: filterReducer,
});
