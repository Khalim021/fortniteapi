import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <>
        <header className='main__header'>
          <div className='logo'>
            <Link to="/">Fortnite api</Link>
          </div>
        </header> 
      </>
  )
}

export default Header