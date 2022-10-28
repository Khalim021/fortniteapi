import './App.css';
import React from 'react'
import Footer from './components/Footer';
import Fortnite from './components/Fortnite';
import Header from './components/Header';
import Details from "./components/Details";
import { ContextProvider } from './contextapi';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div>
      <Header />
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Fortnite/>}/>
          <Route path='/details/:id' element={<Details /> }/>
        </Routes>
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;

