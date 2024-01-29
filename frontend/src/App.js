import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import Signp from "./Components/Signp";
import Landing from "./Components/Landing"; // Import the Landing component
import AddProducts from './Components/AddProducts';

function App() {
  return (
    <>
    <AddProducts/>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signp' element={<Signp />} />
          <Route path='/landing' element={<Landing />} /> 
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
