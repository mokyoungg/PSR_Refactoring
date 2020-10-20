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
    const { products } = this.props;
    if (!products) {
      return null;
    } else {
      return products.map((product) => {
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
  console.log(state);
  return {
    products: state.data.filterData,
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
