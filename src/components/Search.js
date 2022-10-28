import React from 'react'

const Search = ({search, setSearch}) => {
  

  return (
    <div className='search'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text" 
        value={search} 
        placeholder="Search Lists..." 
        className='searchInput'
        onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search