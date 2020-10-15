import React from "react";
import styled from "styled-components";

import ProductList from "./product/ProductList";
import FilterList from "./filter/FilterList";

const App = () => {
  return (
    <Wrap>
      <LeftSection>
        <FilterList />
      </LeftSection>
      <RightSection>
        <ProductList />
      </RightSection>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const LeftSection = styled.div`
  width: 20%;
`;

const RightSection = styled.div`
  width: 80%;
`;
