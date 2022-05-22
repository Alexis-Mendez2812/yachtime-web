import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;


