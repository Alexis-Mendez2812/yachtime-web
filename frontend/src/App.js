import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx"
import Navbar from "./Components/Navbar/Navbar"
import { LoginForm } from "./Components/Login/LoginForm.jsx";
import { RegisterForm } from "./Components/Login/RegisterForm.jsx";
import  Loading  from "./Components/Loading/Loading.jsx";
import { Profile } from "./Components/Login/Profile.jsx";
import  NewProduct  from "./Components/NewProduct/NewProduct.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loginForm' element={<LoginForm />} />
          <Route path='/registerForm' element={<RegisterForm />} />
          <Route exact path='/' element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;


