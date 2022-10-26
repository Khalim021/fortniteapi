import React from 'react'
import { FaShopify } from "react-icons/fa";

const FortBasket = ({total = 0, handleBasketShow}) => {
  return (
    <div className='basket-style' onClick={handleBasketShow}>
      <FaShopify />
      {total ? <span className='cart-quantity'> | {total}</span> : null}
    </div>
  )
}

export default FortBasket