import React from 'react'
import './search.css'

function Search() {
  return (
    <div className='search__container section__padding'>
      <input className='searchInput' type="text" placeholder="Search for a subredit" />
      <button className='searchButton' type="button">Search</button>
    </div>
  )
}

export default Search