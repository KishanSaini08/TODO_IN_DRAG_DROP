import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Router>
      <Toaster />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
export default App

