import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Filter from "./Filter";
import PriceFilter from "./PriceFilter";

class FilterList extends React.Component {
  handleArray = (array, category) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i][category]);
    }
    return Array.from(new Set(result));
  };

  renderList = (category) => {
    const { products } = this.props;

    return (
      <div>
        <p>{category}</p>
        {this.handleArray(products, category).map((product) => {
          return <Filter category={category} product={product} />;
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
          <div>
            <PriceFilter />
          </div>
        </Wrap>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data.data,
  };
};

export default connect(mapStateToProps)(FilterList);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
