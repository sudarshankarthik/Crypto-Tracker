import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Table from './table/table'
import Coin from './table/coin'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route exact path='/table' element={<Table />} />
      <Route exact path='/coin/:id' element={<Coin />} />
    </Routes>
    </BrowserRouter>

  </div>
      
);

