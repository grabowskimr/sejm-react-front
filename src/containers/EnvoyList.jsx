import React from 'react';

import Envoy from '../containers/Envoy';

const EnvoyList = ({list, letter}) => (
    <div className="envoy-list" id={"letter-" + letter}>
        <h3>{letter}</h3>
        {list.map(item => (
            <Envoy envoy={item} key={item.id} />
        ))}
    </div>
)

export default EnvoyList;