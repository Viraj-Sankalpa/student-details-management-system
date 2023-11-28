import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

