import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
// import Routes from './Routes'; 

import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <div > 
     < Navbar/>
       

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="singup" element={<Singup />} />
        <Route path="dashboard" element={<Dashboard />} />
       </Routes>
    </div>
  );
}

export default App;
