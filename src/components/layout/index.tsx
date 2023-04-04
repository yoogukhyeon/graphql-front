import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { Container } from 'styles/common';

interface IProps {
  children: React.ReactNode;
}
export default function index({ children }: IProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  ${Container};
  height: calc(100% - 100px);
`;
