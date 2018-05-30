import React from 'react';


const Alphabet = (props) => (
    <ul className="alphabet-list">
        { props.alphabet.map(letter => (
            <li key={letter}><button onClick={props.scrollToLetter} name={letter}>{(letter.length <= 3 && letter.slice(-1) === 'p') ? letter.slice(0,-1) : letter}</button></li>
        ))}
    </ul>
)

export default Alphabet;