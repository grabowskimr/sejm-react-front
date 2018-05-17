import React from 'react';

class EnvoyPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div>envoypage</div>
        )
    }
}

export default EnvoyPage;