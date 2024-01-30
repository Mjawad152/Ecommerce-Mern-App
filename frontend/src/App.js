import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import Signp from "./Components/Signp";
import Landing from "./Components/Landing"; // Import the Landing component
import Products from './Components/Products';
import UserAdd from './Components/UserAdd';



function App() {
  return (
    <>
  

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signp' element={<Signp />} />
          <Route path='/Products' element={<Products />} /> 
          <Route path='/UserAdd' element={<UserAdd />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
