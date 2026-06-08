import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
