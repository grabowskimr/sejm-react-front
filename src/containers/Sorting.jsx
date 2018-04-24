import React from 'react';

const Sorting = (props) => (
    <div className="sorting-container">
        <button className="sorting-toggler" onClick={props.onClick} >Sortuj <img src="/images/arrow-down-green.png" /></button>
        <div className={props.show ? "sorting-menu show" : "sorting-menu"}>
            <ul>
                {props.children}
            </ul>
        </div>
    </div>
);

export default Sorting;