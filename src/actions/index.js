import data from "../apis/data";

export const fetchData = () => async (dispatch) => {
  const response = await data.get();

  dispatch({ type: "FETCH_DATA", payload: response.data });
};
