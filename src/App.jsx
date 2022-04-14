import React from 'react'
import Router from './routes'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <div className="site-content">
        <Navbar />
        <Router/> 
      </div>
    </BrowserRouter>
  );
}

export default App;