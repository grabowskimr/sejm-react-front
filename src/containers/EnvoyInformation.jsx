import React from 'react';

import EnvoyBasicInformation from './EnvoyBasicInformation';
import EnvoyPointsTable from './EnvoyPointsTable';

const EnvoyInformation = (props) => (
    <div className="envoy-information">
        <EnvoyBasicInformation envoy={props.envoy}/>
        <EnvoyPointsTable {...props} />
    </div>
);

export default EnvoyInformation;