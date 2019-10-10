import React from 'react';
import LazyLoad from 'react-lazyload';

import Envoy from '../containers/Envoy';

const EnvoyList = ({list, letter, worst}) => (
    <LazyLoad height={200} offset={100}>
        <div className="envoy-list" id={"letter-" + letter}>
            <h3 className={worst || parseInt(letter) < 0 ? "danger" : letter.length > 8 ? " long-title" : null}>{(letter.length <= 8 && letter.slice(-1) === 'p') ? letter.slice(0,-1) : letter}</h3>
            {list.map(item => (
                <Envoy envoy={item} key={item.id} />
            ))}
        </div>
    </LazyLoad>
)

export default EnvoyList;