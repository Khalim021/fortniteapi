import React from 'react'
import FortniteItems from './FortniteItems'

const FortniteList = ({fortnite = [], addToCart}) => {
  return (
    <div className='cards'>
      {fortnite.map(fort => (
        <FortniteItems key={fort.id} {...fort} addToCart={addToCart}/>
      ))}
    </div>
  )
}

export default FortniteList