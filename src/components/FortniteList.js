import React from 'react'
import FortniteItems from './FortniteItems'

const FortniteList = ({searchFilter}) => {
  return (
    <div className='cards'>
      {searchFilter.map(fort => (
        <FortniteItems key={fort.id} {...fort}/>
      ))}
    </div>
  )
}

export default FortniteList