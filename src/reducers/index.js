import { combineReducers } from "redux";

const initialState = {
  data: [],
  filterData: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload, filterData: action.payload };
    case "FILTER_REQUEST":
      return { ...state, filterData: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  data: productReducer,
});
