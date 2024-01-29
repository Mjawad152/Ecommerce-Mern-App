import Login from "./Components/Login";
import Signp from "./Components/Signp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>

  <Router>
   <Routes>
   <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
   <Route path='/Signp' element={<Signp/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
