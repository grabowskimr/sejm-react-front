import React from 'react';

const EnvoyPointsTable = ({criterions, criterionsNames, envoy}) => (
    <React.Fragment>
        <table className="envoy-points-table">
            <tbody>
                {criterions.map((criterion, index) => (
                    <tr key={index}>
                        <td>{criterionsNames[Object.keys(criterion)[0]]}</td>
                        <td>{criterion[Object.keys(criterion)[0]].value}</td>
                        <td>{criterion[Object.keys(criterion)[0]].status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
            <h3>Suma punktów</h3>
            <span>{envoy.points}</span>
        </div>
    </React.Fragment>
);

export default EnvoyPointsTable;