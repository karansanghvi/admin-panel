import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

function App() {
  const [items, setItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage items={items} />} />
        <Route path="/admin" element={<AdminPage items={items} setItems={setItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
