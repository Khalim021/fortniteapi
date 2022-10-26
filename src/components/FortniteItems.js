import React from 'react'
import { Link } from "react-router-dom";

const FortniteItems = ({id, name, description, price, full_background, interest, addToCart}) => {
  return (
    <div className='card' id={id}>
      <div className="card">
        <img src={full_background} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title"><Link to={`/detail/${id}`}>{name}</Link></h5>
          <p className="card-text">{description}</p>
          <p className='interests'>Interest: {interest}</p>
          <button className='btn btn-primary btn-sm' onClick={() => addToCart({id, name, price, interest})}>Buy Now</button>
          <span className='price-right' style={{fontSize: '1.6rem'}}>${price}</span>
        </div>
      </div>
    </div>
  )
}

export default FortniteItems