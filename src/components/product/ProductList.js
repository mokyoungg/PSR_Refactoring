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
    const { datas } = this.props;
    if (!datas) {
      return null;
    } else {
      return datas.map((data) => {
        return (
          <ListWrap>
            <Product data={data} />
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
  //console.log(state);
  return {
    datas: state.data.data,
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
