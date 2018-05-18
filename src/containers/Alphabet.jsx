import React from 'react';


const Alphabet = (props) => (
    <ul className="alphabet-list">
        { props.alphabet.map(letter => (
            <li key={letter}><button onClick={props.scrollToLetter} name={letter}>{letter}</button></li>
        ))}
    </ul>
)

export default Alphabet;