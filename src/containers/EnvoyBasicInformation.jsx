import React from 'react';

const EnvoyBasicInformation = ({envoy}) => (
    <div className="envoy-basic-information">
        <h3>{envoy.name} {envoy.surname}</h3>
        <div className="envoy-points-img">
            <img src={envoy.points < 0 ? "/images/red.png" : envoy.points > 0 ? "/images/green.png" : "/images/yellow.png"} alt="icon"/>
        </div>
        <div className="envoy-basic-information-list">
            <ul>
                <li><span>Klub/kolo: </span>{envoy.party}</li>
                <li><span>Okręg wyborczy: </span>{envoy.constituency}</li>
                <li><span>Pełnione stanowisko: </span>{envoy.position}</li>
            </ul>
        </div>
    </div>
);

export default EnvoyBasicInformation;