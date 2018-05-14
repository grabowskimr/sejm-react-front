import React from 'react';


const Alphabet = (props) => (
    <ul className="alphabet-list">
        { props.alphabet.map(letter => (
            <li key={letter}><a href="#" name={letter}>{letter}</a></li>
        ))}
    </ul>
)

export default Alphabet;