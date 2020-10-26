import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { filterRequest } from "../../actions";

const Filter = ({ category, product, filterRequest }) => {
  return (
    <Wrap>
      <CheckBox
        type="checkbox"
        onClick={() => filterRequest(category, product)}
      />
      <Label>{product}</Label>
    </Wrap>
  );
};

export default connect(null, { filterRequest })(Filter);

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  margin-top: -3px;
  padding-left: 10px;
  font-size: 15px;
`;
