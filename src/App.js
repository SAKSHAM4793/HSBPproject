import Header from './Layout/Header/Header';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Footer from './Layout/Footer/footer';
import Services from './component/Services/Services.js';
const App=()=> {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Services/>}/>
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
