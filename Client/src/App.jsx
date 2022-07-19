// import logo from './logo.svg';
import './App.css';
import {
  
  Routes, 
  Route,
} from "react-router-dom";


import Home from './pages/home';
import Create from './pages/createMeetup';
import Home from './pages/home';
import AppLayout from './layouts/appLayout';

function App() {
  return (
  <div>
    
    <AppLayout>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/create" element={<Contact/>} />

        <Route path="/projects" element={<Projects/>} />

      </Routes>
    
    </AppLayout>
    


  </div>
  );
}

export default App;
