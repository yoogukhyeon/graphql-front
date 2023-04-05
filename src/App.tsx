import React from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Content from 'pages/Content';
import Write from 'pages/Write';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Layout>
  );
}

export default App;
