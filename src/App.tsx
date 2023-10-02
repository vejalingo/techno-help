import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BoardPage from './board';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/board" />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/board/issues/:issueId" element={<BoardPage />} />
      <Route path="/board/issues/create" element={<BoardPage />} />
    </Routes>
  );
};

export default App;
