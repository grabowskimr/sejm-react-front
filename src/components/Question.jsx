import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAnswer } from '../actions/actions';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'none',
      more: false
    }
    this.chooseYes = this.chooseYes.bind(this);
    this.chooseNo = this.chooseNo.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
  }

  chooseYes(e) {
    e.preventDefault();
    this.setState({
      selected: 'Yes'
    });
    this.props.setAnswer({
      id: this.props.id,
      answer: 'Yes',
      point: this.props.pointon === 'Yes' ? 0.5 : -0.5,
      label: this.props.label
    });
  }

  chooseNo(e) {
    e.preventDefault();
    this.setState({
      selected: 'No'
    });
    this.props.setAnswer({
      id: this.props.id,
      answer: 'No',
      point: this.props.pointon === 'No' ? 0.5 : -0.5,
      label: this.props.label
    });
  }

  toggleMore(e) {
    e.preventDefault();
    this.setState({
      more: !this.state.more
    })
  }

  render() {
    return (
      <div className="question">
        <label>{this.props.label}</label>
        {this.props.sublabel ? <span className="sublabel">{this.props.sublabel}</span> : null}
        {this.props.children ? <button className="see-more" onClick={this.toggleMore}>{!this.state.more ? 'Dowiedz się więcej' : 'Ukryj'}</button> : null}
        {this.props.children ? <p className={`more-content ${this.state.more ? 'show' : ''}`}>{this.props.children}</p> : null}
        <div className="buttons">
          <button className={this.state.selected === 'Yes' ? 'selected' : ''} onClick={this.chooseYes}>Tak</button>
          <button className={this.state.selected === 'No' ? 'selected' : ''} onClick={this.chooseNo}>Nie</button>
        </div>
      </div>
    )
  }
}

export default connect(null, {setAnswer})(Question);