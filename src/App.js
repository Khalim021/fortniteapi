import './App.css';
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Fortnite from './components/Fortnite';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Details from './components/Details';
import axios from 'axios';
import { api_key, api_url } from "./config";
import Search from './components/Search';

function App() {
  const [fortnite, setFortnite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const searchFilter = fortnite.filter((fort) => {
    if(search === "") {
      return fort
    } else if(fort.name.toLowerCase().includes(search.toLowerCase())) {
      return fort
    }
  })

  useEffect(() => {
    axios.get(api_url, {
      headers: {
        Authorization: api_key
      }
    }).then(res => {
        setFortnite(res.data?.featured)
        console.log(res.data)
        setLoading(false)
    }).catch(error => {
      console.log(error)
    })
  }, []);
  
  return (
    <div>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Fortnite 
        fortnite={searchFilter} 
        setFortnite={setFortnite} 
        loading={loading} setLoading={setLoading} />} />
        <Route path='/detail/:id' element={<Details fortnite={fortnite}/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
