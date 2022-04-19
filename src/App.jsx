import React from 'react'
import Router from './routes'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import { GlobalStyle } from "./styles/Global";
import ContextProvider from './contexts/useProductContext';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <GlobalStyle/>
        <div className="site-content">
          <Navbar />
          <Router/> 
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;