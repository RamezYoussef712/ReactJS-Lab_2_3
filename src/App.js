import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavbarComponent"
import Home from "./pages/HomeComponent"
import AboutPage from "./pages/AboutComponent";
import ErrorPage from "./pages/ErrorComponent";
import Create from './pages/Create';
import StudentDetails from './pages/StudentDetails';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/students/:id" element={<StudentDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
