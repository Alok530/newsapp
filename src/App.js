import './App.css';
import React from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

import { Routes, Route } from "react-router-dom";

const App = () => {
  let pageSize = 9;
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" pagesize={pageSize} country="in" category="general" />}/>
          <Route path="/home" element={<News key="general" pagesize={pageSize} country="in" category="general" />}/>
          <Route path="/health" element={<News key="health" pagesize={pageSize} country="in" category="health" />}/>
          <Route path="/sports" element={<News key="sports" pagesize={pageSize} country="in" category="sports" />}/>
          <Route path="/science" element={<News key="science" pagesize={pageSize} country="in" category="science" />}/>
          <Route path="/business" element={<News key="business" pagesize={pageSize} country="in" category="business" />}/>
          <Route path="/technology" element={<News key="technology" pagesize={pageSize} country="in" category="technology" />}/>
          <Route path="/entertainment" element={<News key="entertainment" pagesize={pageSize} country="in" category="entertainment" />}/>
        </Routes>
    </>
  )
}

export default App;