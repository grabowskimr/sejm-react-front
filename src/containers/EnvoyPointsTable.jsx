import React from 'react';

const EnvoyPointsTable = ({criterions, criterionsNames, envoy}) => (
    <React.Fragment>
        <table className="envoy-points-table">
            <tbody>
                {criterions.map((criterion, index) => (
                    <tr key={index}>
                        <td>{criterionsNames[Object.keys(criterion)[0]]}</td>
                        <td>{criterion[Object.keys(criterion)[0]].value}</td>
                        <td className={criterion[Object.keys(criterion)[0]].status < 0 ? "bad" : criterion[Object.keys(criterion)[0]].status > 0 ? "good" : "medium"}>{criterion[Object.keys(criterion)[0]].status > 0 ? criterion[Object.keys(criterion)[0]].status : criterion[Object.keys(criterion)[0]].status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="summary-points">
            <h3>Suma punktów</h3>
            <span className={envoy.points < 0 ? "bad" : envoy.points > 0 ? "good" : "medium"}>{envoy.points > 0 ? envoy.points : envoy.points}</span>
        </div>
    </React.Fragment>
);

export default EnvoyPointsTable;