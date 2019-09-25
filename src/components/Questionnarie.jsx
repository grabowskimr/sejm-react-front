import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import QuestionareForm from '../containers/QuestionareForm';
import { sendAnswers } from '../actions/actions';
import dbActions from '../actions/dbActions';

class Questionnarie extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      hash: this.props.location.search.split('=')[1],
      correct: '',
      envoy: {},
      validationMessage: ''
    }
  }
  
  componentDidMount() {
    dbActions.checkId(this.state.hash).then((data) => {
      if(data.data.length) {
        this.setState({
          correct: 'yes',
          envoy: data.data[0]
        });
      } else {
        this.setState({
          correct: 'no'
        });
      }
    })
  }

  submit(e) {
    e.preventDefault();
    var points = parseFloat(this.state.envoy.points);
    Object.keys(this.props.answers).map(answer => {
      points += this.props.answers[answer].point
    });
    if(Object.keys(this.props.answers).length < 13) {
      this.setState({
        validationMessage: 'Proszę odpowiedzieć na wszystkie pytania'
      });
    } else {
      this.props.sendAnswers(JSON.stringify(this.props.answers), this.state.envoy.id, points);
    }
  }

  render() {
    return (
      <div>
        {this.props.answerMessage.length === 0 ? 
        <div>
          {this.state.correct === 'yes' ? <QuestionareForm validation={this.state.validationMessage} submit={this.submit}/> :  this.state.correct === 'no' ? <p className="no-access">Brak dostępu</p> : null}
        </div> : <p className="no-access">Wysłano</p> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    answers: state.appReducer.answers,
    answerMessage: state.appReducer.answerMessage
  }
}

export default connect(mapStateToProps, {sendAnswers})(withRouter(Questionnarie));