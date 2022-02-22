import React from 'react';
import { Routes, Route } from 'react-router-dom' 
import Calculator from './Components/Calculator';
import Header from './Components/Header'
import Home from './Components/Home'
import Quote from './Components/Quote'

const App = () => (
  <div className="App">
    <BrowserRouter>
    <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/calculator" element={<Calculator />} />
           <Route path="/quote" element={<Quote />} />
        </Routes>
    </BrowserRouter>
  </div>
);

export default App;
