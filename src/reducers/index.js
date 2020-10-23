import { combineReducers } from "redux";

const INITIAL_STATE = {
  data: [],
  filterData: [],
  priceRange: [],
  filterRange: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        priceRange: action.priceRange,
        filterRange: action.filterRange,
      };
    case "FILTER_REQUEST":
      return { ...state, filterData: action.payload };
    case "FILTER_PRICE":
      return { ...state, filterData: action.payload };
    default:
      return state;
  }
};
/*
const priceReducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER_PRICE":
      return action.payload;
    default:
      return state;
  }
};
*/
export default combineReducers({
  data: productReducer,
  //price: priceReducer,
});
