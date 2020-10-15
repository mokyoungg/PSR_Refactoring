import data from "../apis/data";

export const fetchData = () => async (dispatch) => {
  const response = await data.get();

  dispatch({ type: "FETCH_DATA", payload: response.data });
};

export const filterRequest = (category, value) => {
  return {
    type: "FILTER_REQUEST",
    payload: {
      category: category,
      value: value,
    },
  };
};
