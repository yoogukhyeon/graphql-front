import React from 'react';
import styled from 'styled-components';
import { Container } from 'styles/common';
export default function Footer() {
  return (
    <FooterWrap>
      <div>Footer</div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  > div {
    ${Container};
    background-color: #666;
    height: 50px;
  }
`;
