import React from 'react';


const SearchInput = (props) => (
    <form className="search-input-container" {...props}>
        <input type="text" {...props}/>
        <button type="submit">
            <img src="/images/search.png" />
        </button>
    </form>
);

export default SearchInput;