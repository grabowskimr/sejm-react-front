import React from 'react';

const SearchContainer = (props) => {
    const AlphabetList = props.alphabet;
    return (
        <div className="search-container">
            <div className="main-search">
                {props.children}
            </div>
            <div className="alphabet-container">
                <AlphabetList />
            </div>
        </div>
    )
};

export default SearchContainer;