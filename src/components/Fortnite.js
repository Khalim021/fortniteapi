import React, { useState } from 'react'
import FortBasket from './FortBasket';
import FortBasketList from './FortBasketList';
import FortniteList from './FortniteList';
import Loading from './Loading';

const Fortnite = ({fortnite, setFortnite, loading, setLoading}) => {
  const [orderSkin, setOrderSkin] = useState([]);
  const [showBasket, setShowBasket] = useState(false)

  const addToCart = (fort) => {
    const skinIndex = orderSkin.findIndex(fortItem => fortItem.id === fort.id);
    if(skinIndex < 0) {
      const newSkins = {
          ...fort,
          total: 1,
      }
      setOrderSkin([...orderSkin, newSkins]);
  } else{
     const newSkin = orderSkin.map((fortItem, i) => {
      if(i === skinIndex) {
        return {
          ...fortItem,
          total: fortItem.total + 1
        }
      } else {
        return fort
      }
     });
     setOrderSkin(newSkin);
    }
  }

  const handleBasketShow = () => {
    setShowBasket(!showBasket)
  };

  const incrementTotal = (skinId) => {
    const newSkin = orderSkin.map(element => {
    if(element.id === skinId) {
      const addSkin = element.total + 1
      return{
        ...element,
        total: addSkin,
      }
      } else {
          return element
      }
    })
    setOrderSkin(newSkin);
  }

  const decrementTotal = (skinId) => {
    const newSkin = orderSkin.map(element => {
      if(element.id === skinId) {
        const addSkin = element.total - 1
        return{
          ...element,
          total: addSkin,
        }
        } else {
          return element
        }
    })
    setOrderSkin(newSkin);
  }

  const removeOrderFromBasket = (skin) => {
    const newOrder = orderSkin.filter(item => item.id !== skin);
    setOrderSkin(newOrder)
  }

  return (
    <div className="content container">
      <FortBasket total={orderSkin.length} handleBasketShow={handleBasketShow}/>
      {loading ? <Loading /> : <FortniteList fortnite={fortnite} addToCart={addToCart}/>}
      {showBasket && <FortBasketList
      orderSkin={orderSkin} 
      handleBasketShow={handleBasketShow}
      incrementTotal={incrementTotal}
      decrementTotal={decrementTotal}
      removeOrderFromBasket={removeOrderFromBasket}
      />}
    </div>
  )
}

export default Fortnite