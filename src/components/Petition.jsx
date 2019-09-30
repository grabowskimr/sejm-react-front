import React, { Component } from 'react'

class Petition extends Component {
  render() {
    return (
      <div className="box">
        petycja 
        <div>
          <form>
            <input type="email" placeholder="E-mail" name="email"/>
            <input type="test" placeholder="Imię" name="imie"/>
            <button type="submit">Podpisz</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Petition;