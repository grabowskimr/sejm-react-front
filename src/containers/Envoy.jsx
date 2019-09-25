import React from 'react';
import { Link } from 'react-router-dom';

var scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

const Envoy = ({envoy}) => {
    return (
        <Link to={"/envoy/" + envoy.id} className="envoy-item-list" onClick={scrollTop}>
            <div className="envoy-image">
                <img src={envoy.image ? envoy.image : '/images/posel/avatar.jpg'} alt="image"/>
            </div>
            <div className="envoy-content">
                <h3>{envoy.name}<br />{envoy.surname}</h3>
                <span className="envoy-party">{envoy.party}</span>
                <div className="envoy-points">
                    <span className={envoy.points < 0 ? "bad" : envoy.points > 0 ? "good" : "medium"}>{envoy.points > 0 ? "+" + envoy.points : envoy.points}</span>
                    <img src={envoy.points < 0 ? "/images/red.png" : envoy.points > 0 ? "/images/green.png" : "/images/yellow.png"} alt="icon"/>
                </div>
            </div>
        </Link>
    )
}

export default Envoy;