import React from 'react';

import Envoy from '../containers/Envoy';

const EnvoyList = ({list, letter, worst}) => (
    <div className="envoy-list" id={"letter-" + letter}>
        <h3 className={worst || parseInt(letter) < 0 ? "danger" : letter.length > 3 ? " long-title" : null}>{(letter.length <= 3 && letter.slice(-1) === 'p') ? letter.slice(0,-1) : letter}</h3>
        {list.map(item => (
            <Envoy envoy={item} key={item.id} />
        ))}
    </div>
)

export default EnvoyList;