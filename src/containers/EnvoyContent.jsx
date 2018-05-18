import React from 'react';

import EnvoyInformation from './EnvoyInformation';
import EnvoyDescription from './EnvoyDescription';

const EnvoyContent = ({envoy, criterions, criterionsNames}) => (
    <div className="envoy-content">
        <div className="envoy-content-top">
            <div className="envoy-image-container">
                <img src={envoy.image} alt="image"/>
            </div>
            <EnvoyInformation envoy={envoy} criterions={criterions} criterionsNames={criterionsNames} />
            <EnvoyDescription envoy={envoy} />
        </div>
    </div>
);

export default EnvoyContent;