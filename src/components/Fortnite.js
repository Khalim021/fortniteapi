import React, { useEffect, useContext, useState } from 'react';
import {FortniteContext} from "../contextapi"
import FortBasket from './FortBasket';
import FortBasketList from './FortBasketList';
import FortniteList from './FortniteList';
import Loading from './Loading';
import axios from 'axios';
import { api_key, api_url } from "../config";
import Search from "../components/Search";

const Fortnite = () => {
  const {fortnite, setFortnite, loading, orderSkin, showBasket} = useContext(FortniteContext);
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
    }).catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="content container">
        <FortBasket total={orderSkin.length}/>
        {loading ? <Loading /> : <FortniteList searchFilter={searchFilter} />}
        {showBasket && <FortBasketList />}
      </div>
    </>
  )
}

export default Fortnite