import { combineReducers } from "redux";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    /*case "FILTER_REQUEST":
      return action.payload;
    return state.filter(
        (state) => state[action.payload.category] === action.payload.value
      );*/
    default:
      return state;
  }
};

const filterReducer = (state = [], action) => {
  switch (action.type) {
    case "FILTER_REQUEST":
      if (state.includes(action.payload.value)) {
        return state.filter((el) => el !== action.payload.value);
      } else {
        return [...state, action.payload.value];
      }
    default:
      return state;
  }
};

export default combineReducers({
  data: productReducer,
  filter: filterReducer,
});
