import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Filter from "./Filter";

class FilterList extends React.Component {
  handleArray = (array, key) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i][key]);
    }
    return Array.from(new Set(result));
  };

  renderList = (key) => {
    const { products } = this.props;

    return (
      <div>
        <p>{key}</p>
        {this.handleArray(products, key).map((product) => {
          return <Filter id={product} category={key} product={product} />;
        })}
      </div>
    );
  };

  render() {
    const { products } = this.props;
    if (!products) {
      return null;
    } else {
      return (
        <Wrap>
          <div>{this.renderList("category")}</div>
          <div>{this.renderList("brand")}</div>
          <div>{this.renderList("color")}</div>
        </Wrap>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data,
  };
};

export default connect(mapStateToProps)(FilterList);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
