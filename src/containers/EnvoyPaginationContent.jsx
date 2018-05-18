import React from 'react';
import { Link } from 'react-router-dom';

const EnvoyPaginationContent = (props) => (
    <div className="envoy-pagination">
        {props.prev != 0 ? 
            <Link to={"/envoy/" + props.prev} onClick={props.onPrevClick} className="prev-pagination">Poprzedni</Link> 
            : <span className="prev-pagination">Poprzedni</span>}
        <p>
            <Link to="/">Powrót do listy</Link>
        </p>
        {props.next != 0 ? 
            <Link to={"/envoy/" + props.next} onClick={props.onNextClick} className="next-pagination">Następny</Link> 
            : <span className="next-pagination">Następny</span>}
    </div>
);

export default EnvoyPaginationContent;