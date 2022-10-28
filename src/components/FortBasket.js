import React, { useContext } from 'react'
import { FaShopify } from "react-icons/fa";
import { FortniteContext } from "../contextapi";

const FortBasket = () => {
  const {orderSkin, handleBasketShow } = useContext(FortniteContext);
  const total = orderSkin.length;
  return (
    <div className='basket-style' onClick={handleBasketShow}>
      <FaShopify />
      {total ? <span className='cart-quantity'> | {total}</span> : null}
    </div>
  )
}

export default FortBasket