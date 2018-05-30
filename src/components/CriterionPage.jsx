import React from 'react';
import axios from 'axios';

const CriterionContent = ({content}) => {
    return (
        <div className="criterions-content" dangerouslySetInnerHTML={{ __html: content }} />
    )
}

class CriterionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: ''
        }
    }

    componentDidMount() {
        axios.get('/nasze-kryteria')
            .then(response => {
                var html = document.createElement('html'),
                    content;
                html.innerHTML = response.data;
                content = html.querySelector('.uk-margin-medium');
                this.setState({
                    html: content.innerHTML
                })
            })
    }

    render() {
        return (
            <div className="criterions-container">
                {this.state.html.length ?
                    <div>
                        <h3 className="subpage-title">Nasze kryteria</h3>
                        <CriterionContent content={this.state.html} />
                    </div>
                : null}
            </div>
        )
    }
}

export default CriterionPage;