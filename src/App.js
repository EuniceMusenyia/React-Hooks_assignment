import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Products from './Product';
import Login from './Login';
import React from 'react';
import  './App.css';


const App = () =>{
  return (
   <Router>

    <div className= 'navbar'>
      <nav className='nav'>
        <ul >
          <li> <Link to = "/Login" > Login</Link> </li>
        </ul>

        <ul >
          <li> <Link to = "/Product" > Products</Link> </li>
        </ul>
      </nav>
    </div>

    <Routes>
      <Route path = "/loginpage" element = {<Login/>} />
      <Route path = "/productspage" element = {<Products/>} />
      <Route path="*" element={<Navigate to="/products" />} />

    </Routes>
   </Router>
  );
};

export default App;
