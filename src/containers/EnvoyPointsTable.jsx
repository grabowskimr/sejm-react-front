import React from 'react';

const EnvoyPointsTable = ({criterions, criterionsNames, envoy}) => {
    var answers = envoy.answers && Object.keys(envoy.answers).length > 0 ? JSON.parse(envoy.answers) : {};
    return (
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
            <h2 className="table-title">Odpowiedzi w ankiecie</h2>
            <table className="envoy-points-table">
                <tbody>
                    {Object.keys(answers).map((answer, index) => {
                        return (
                            <tr key={index}>
                                <td>{answers[answer].label}</td>
                                <td>{answers[answer].answer === 'No' ? 'Nie' : 'Tak'}</td>
                                <td className={answers[answer].point < 0 ? "bad" : answers[answer].point > 0 ? "good" : "medium"}>{answers[answer].point > 0 ? answers[answer].point : answers[answer].point}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="summary-points">
                <h3>Suma punktów</h3>
                <span className={envoy.points < 0 ? "bad" : envoy.points > 0 ? "good" : "medium"}>{envoy.points > 0 ? envoy.points : envoy.points}</span>
            </div>
        </React.Fragment>
    );
}

export default EnvoyPointsTable;