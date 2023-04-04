import React from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Content from 'pages/Content';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </Layout>
  );
}

export default App;
