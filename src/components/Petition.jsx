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
        {!this.state.message.length ?
        <div>
          <h1>Petycja o włączenie ochrony zwierząt do Konstytucji RP</h1>
          <h2>Do: SEJM RP</h2>
          <p>My niżej podpisani domagamy się wzmocnienia i podniesienia rangi ochrony zwierząt w Polsce poprzez zagwarantowanie jej w naszej Konstytucji przynajmniej na równi z ochroną środowiska.</p>
          <p>Uważamy, że w dobie obecnej wiedzy na temat cierpienia zwierząt i złożoności ich potrzeb nie możemy ich pomijać w ustawie zasadniczej  definiującej wartości chronione w naszym kraju. </p>
          <p>Zapis w Konstytucji ułatwiłby walkę ze skrajnym okrucieństwem wobec zwierząt takim jak ubój bez ogłuszania czy klatki lub uwiązy nie zaspokajające minimalnych potrzeb ruchu. Narzuciłby też na służby powołane do egzekucji prawa obowiązek traktowania z należytą powagą coraz szerzej ujawnianych przypadków znęcania się nad zwierzętami.</p>
          <div id="petition-form">
            <form onSubmit={this.sign}>
              <input type="text" placeholder="Imię" name="imie" onChange={this.onChange}/>
              <input type="email" placeholder="E-mail" name="email" onChange={this.onChange}/>
              <button type="submit">Podpisz</button>
            </form>
          </div>
        </div> : <h1 className="sign-info">{this.state.message}</h1>}
      </div>
    )
  }
}

export default Petition;