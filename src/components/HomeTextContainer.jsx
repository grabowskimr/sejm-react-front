import React from 'react';
import { Link } from 'react-router-dom';

class HomeTextContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-text-container">
                <h3>Czym jest Lorem Ipsum?</h3>
                <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. 
                    Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. 
                    Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. 
                    Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, 
                    a ostatnio z zawierającym różne wersje</p>
                <p className="criteria-link-container">
                    <Link to="/criterions">Nasze kryteria <img src="/images/arror-right-green.png" /></Link>
                </p>
            </div>
        )
    }
}

export default HomeTextContainer;