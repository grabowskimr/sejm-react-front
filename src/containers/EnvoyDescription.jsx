import React from 'react';

const EnvoyDescription = ({envoy}) => (
    <div className="envoy-desc">
        <h4>Dodatkowe informacje</h4>
        <div>{envoy.description}</div>
    </div>
);

export default EnvoyDescription;