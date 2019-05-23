import React from 'react';

import EnvoyInformation from './EnvoyInformation';
import EnvoyDescription from './EnvoyDescription';
import EnvoyPagination from '../components/EnvoyPagination';

const EnvoyContent = ({envoy, criterions, criterionsNames}) => (
    <div className="envoy-content-page">
        <div className="envoy-content-inner">
            <div className="envoy-content-top">
                <div className="envoy-image-container">
                    <img src={envoy.image} alt="image"/>
                </div>
                <EnvoyInformation envoy={envoy} criterions={criterions} criterionsNames={criterionsNames} />
            </div>
            {envoy.type != 'Europoseł' ? <EnvoyDescription envoy={envoy} /> : null}
        </div>
        <EnvoyPagination />
    </div>
);

export default EnvoyContent;