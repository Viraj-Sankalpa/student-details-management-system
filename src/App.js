import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Read from './Read';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

