import React from 'react';

import EnvoyBasicInformation from './EnvoyBasicInformation';
import EnvoyPointsTable from './EnvoyPointsTable';
import EnvoyDescription from './EnvoyDescription';

const EnvoyInformation = (props) => (
    <div className="envoy-information">
        <EnvoyBasicInformation envoy={props.envoy}/>
        {props.envoy.type != 'Europoseł' ? 
        <EnvoyPointsTable {...props} /> : <EnvoyDescription envoy={props.envoy} />}
    </div>
);

export default EnvoyInformation;