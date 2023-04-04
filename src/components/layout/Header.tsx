import React from 'react';
import styled from 'styled-components';
import { Container } from 'styles/common';
export default function Header() {
  return (
    <HeaderWrap>
      <div>Header</div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  > div {
    ${Container};
    background-color: #222;
    height: 50px;
  }
`;
