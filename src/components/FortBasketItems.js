import React, { useContext } from 'react'
import { FiXSquare } from "react-icons/fi";
import { FortniteContext } from "../contextapi";

const FortBasketItems = ({id, name, price, total }) => {
  const {incrementTotal, decrementTotal, removeOrderFromBasket} = useContext(FortniteContext)

  return (
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{name} x{total} = ${price * total}</p>
      <button className='btn btn-primary btn-sm btn-s' onClick={() => incrementTotal(id)}>Add</button>
      <button className='btn btn-danger btn-sm btn-s' onClick={() => decrementTotal(id)}>Remove</button>
      <span className='trash'>
        <FiXSquare onClick={() => removeOrderFromBasket(id)}/>        
      </span>
    </div>
  )
}

export default FortBasketItems





