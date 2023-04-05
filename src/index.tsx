import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'styles/GlobalStyles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from 'utill/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </>,
);
