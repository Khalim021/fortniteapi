import React from 'react'
import FortBasketItems from './FortBasketItems'
import { FiXSquare } from "react-icons/fi";

const FortBasketList = ({orderSkin, handleBasketShow, incrementTotal, decrementTotal, removeOrderFromBasket}) => {


  const totalPrice = orderSkin.reduce((sumEl, el) => {
    return sumEl + el.price * el.total
  }, 0)

  return (
    <div className="card basket_style bg-dark text-white mb-3">
      <div className="card-header">Header</div>
        {orderSkin.length ? orderSkin.map(skins => {
          return (
           <FortBasketItems 
           key={skins.id} {...skins} 
           incrementTotal={incrementTotal}
           decrementTotal={decrementTotal}
           removeOrderFromBasket={removeOrderFromBasket}
           />
          )
        }) : <div className='empty-info'>Cart is empty</div>}
        <div className='total-cost'>Total price: {totalPrice}</div>
        <span className="x-mark"><FiXSquare onClick={handleBasketShow}/></span>
  </div>
  )
}

export default FortBasketList





