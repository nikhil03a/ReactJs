import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchText}) => {
    function handleChange(e){
        handleSearchText(e.target.value);
    }
    return (
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em' />
            <input type='text' onChange={handleChange} placeholder="Type to Search "></input>
        </div>
    )
}

export default Search
