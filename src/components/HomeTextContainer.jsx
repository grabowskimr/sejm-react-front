import React from 'react';
import { Link } from 'react-router-dom';

class HomeTextContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-text-container">
                <h3></h3>
                <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. 
                    Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. 
                    Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. 
                    Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, 
                    a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, 
                    jak Aldus PageMaker</p>
                <p className="criteria-link-container">
                    <Link to="#">Nasze kryteria <img src="/images/arror-right-green.png" /></Link>
                </p>
            </div>
        )
    }
}

export default HomeTextContainer;