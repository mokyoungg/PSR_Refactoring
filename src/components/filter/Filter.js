import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { filterRequest } from "../../actions";

const Filter = ({ category, product, filterRequest, filter }) => {
  console.log(filter);
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { filterRequest })(Filter);

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
