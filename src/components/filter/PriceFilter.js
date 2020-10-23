import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { useSelector, useDispatch } from "react-redux";
import { filterPrice } from "../../actions";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

function valuetext(value) {
  return `${value}원`;
}

export default function PriceFilter() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const priceRange = useSelector((state) => state.data.priceRange);
  const filterRange = useSelector((state) => state.data.filterRange);

  console.log("state :", state);
  console.log("priceRange :", priceRange);
  console.log("filterRange :", filterRange);

  const [filterValue, setFilter] = useState();
  const [defaultValue, setDefault] = useState(priceRange);

  useEffect(() => {
    setDefault(priceRange);
  }, [priceRange, state]);

  const handleChange = (event, newValue) => {
    setFilter(newValue);
    dispatch(filterPrice(newValue));
    // setTimeout(() => {
    //   dispatch(filterPrice(newValue));
    // }, 2000);

    // clearTimeout();
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature rangel
      </Typography>
      {state && priceRange && defaultValue.length > 0 ? (
        <Slider
          value={filterValue}
          defaultValue={defaultValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          max={defaultValue[1]}
          min={defaultValue[0]}
          step="10000"
        />
      ) : (
        <div>'load'</div>
      )}
    </div>
  );
}
