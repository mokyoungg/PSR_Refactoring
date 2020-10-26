import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { useSelector, useDispatch } from "react-redux";
import { filterPrice } from "../../actions";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}원`;
}

export default function PriceFilter() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const priceRange = useSelector((state) => state.data.priceRange);

  const [filterValue, setFilter] = useState();
  const [defaultValue, setDefault] = useState(priceRange);

  useEffect(() => {
    setDefault(priceRange);
  }, [priceRange]);

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  const filterRequest = () => {
    dispatch(filterPrice(filterValue));
  };

  return (
    <Wrap>
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          PriceRange
        </Typography>
        {priceRange && defaultValue.length > 0 ? (
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
      <button onClick={filterRequest}>가격대 보기</button>
    </Wrap>
  );
}

const Wrap = styled.div``;
