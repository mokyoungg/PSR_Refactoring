import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

function valuetext(value) {
  return `${value}원`;
}

export default function RangeSlider({ price }) {
  console.log("price :", price);
  const classes = useStyles();
  const [value, setValue] = useState([]);
  const [curVal, setCurVal] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurVal(newValue);
  };

  console.log("value :", value);
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={price}
        defaultValue={[price[0], price[1]]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={price[1]}
        min={price[0]}
        stpe="10000"
      />
    </div>
  );
}
