import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeEn } from './pages/HomeEn';
import { HomeAr } from './pages/HomeAr';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeEn />} />
        <Route path="/ar" element={<HomeAr />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
