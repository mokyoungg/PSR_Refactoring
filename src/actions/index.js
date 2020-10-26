import data from "../apis/data";

const initialState = {
  data: [],
  filterData: [],
  priceRange: [],
};

const collected = {
  brand: [],
  color: [],
  category: [],
};

export const fetchData = () => async (dispatch) => {
  const response = await data.get();
  const priceRange = await response.data.map((data) => data.price);

  initialState.data = response.data;
  initialState.filterData = response.data;

  const getValue = (array) => {
    let result = [];
    const max = Math.max.apply(null, array);
    const min = Math.min.apply(null, array);
    result = [min, max];
    return result;
  };
  const range = getValue(priceRange);

  initialState.priceRange = range;

  dispatch({
    type: "FETCH_DATA",
    payload: response.data,
    priceRange: range,
    filterRange: range,
  });
};

export const filterRequest = (key, value) => {
  const { data } = initialState;

  //데이터 필터하는 함수
  const multiFilter = (arr, filters) => {
    const filterKeys = Object.keys(filters);
    return arr.filter((eachObj) => {
      return filterKeys.every((eachKey) => {
        if (!filters[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
  };

  //필터
  if (!collected[key].includes(value)) {
    collected[key] = collected[key].concat(value);

    return {
      type: "FILTER_REQUEST",
      payload: multiFilter(data, collected),
    };
  }
  //필터 해제
  else {
    collected[key] = collected[key].filter((el) => el !== value);

    return {
      type: "FILTER_REQUEST",
      payload: multiFilter(data, collected),
    };
  }
};

export const filterPrice = (array) => {
  const { filterData } = initialState;

  const filteredData = filterData.filter(
    (el) => el.price > array[0] && el.price < array[1]
  );

  return {
    type: "FILTER_PRICE",
    payload: filteredData,
  };
};
