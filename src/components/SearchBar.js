import React from 'react';

const SearchBar = ({ searchfield,SearchChange}) =>{
    return (
        <div className='pad2'>
            <input
            className='pa3 ba b--light-blue bg-light-green'
            type='search' 
            placeholder='Search robo'
            onChange={SearchChange}
            />
        </div>
    );
}
export default SearchBar;