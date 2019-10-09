import React, { Component } from 'react';

import dbActions from '../actions/dbActions';

class Petition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imie: '',
      email: '',
      message: ''
    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://wiadomosci.viva.org.pl/view_webform_v2.js?u=c0a&webforms_id=HQqc";
    script.async = true;

    let pet = document.querySelector('#pet');
    console.log(pet);
    pet.appendChild(script);
  }
  

  sign = (e) => {
    e.preventDefault();
    dbActions.sign(this.state).then(({data}) => {
      this.setState({
        message: data
      })
    });
  }

  onChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div className="box petition">
        <div>
          <div id="pet"></div>
        </div>
      </div>
    )
  }
}

export default Petition;