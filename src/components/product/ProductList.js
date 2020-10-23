import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchData } from "../../actions";
import Product from "./Product";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderList = () => {
    const { products, filter } = this.props;
    if (!products) {
      return null;
    } else if (products && filter.length === 0) {
      return products.map((product) => {
        return (
          <ListWrap>
            <Product product={product} />
          </ListWrap>
        );
      });
    } else if (products && filter.length > 0) {
      return filter.map((product) => {
        return (
          <ListWrap>
            <Product product={product} />
          </ListWrap>
        );
      });
    }
  };

  render() {
    return <Wrap>{this.renderList()}</Wrap>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { fetchData })(ProductList);

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ListWrap = styled.div`
  display: flex;
`;
