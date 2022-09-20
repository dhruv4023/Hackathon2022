import React, { useEffect } from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Home from './pages/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './Components/AllRoutes';

function App() {
  
  return (
    <Router className="App">
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
