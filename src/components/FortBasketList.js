import React, { useContext } from 'react'
import FortBasketItems from './FortBasketItems'
import { FiXSquare } from "react-icons/fi";
import {FortniteContext} from "../contextapi";

const FortBasketList = () => {
  const {orderSkin, handleBasketShow} = useContext(FortniteContext);

  const totalPrice = orderSkin.reduce((sumEl, el) => {
    return sumEl + el.price * el.total
  }, 0)

  return (
    <div className="card basket_style bg-dark text-white mb-3">
      <div className="card-header">Header</div>
        {orderSkin.length ? orderSkin.map(skins => {
          return (
           <div className='basket-itemss'><FortBasketItems key={skins.id} {...skins} /></div>
          )
        }) : <div className='empty-info'>Cart is empty</div>}
        <div className='total-cost'>Total price: {totalPrice}</div>
        <span className="x-mark"><FiXSquare onClick={handleBasketShow}/></span>
  </div>
  )
}

export default FortBasketList





