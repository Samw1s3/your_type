// import logo from './logo.svg';
import './App.css';
import {
  
  Routes, 
  Route,
} from "react-router-dom";


import Home from './pages/home';
import Create from './pages/createMeetup';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
// import AppLayout from './layouts/appLayout';

function App() {
  return (
  <div>
    
    

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/create" element={<Create/>} />

        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    
    


  </div>
  );
}

export default App;
