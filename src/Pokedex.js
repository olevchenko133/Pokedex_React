import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component{

render(){
    return (
      <div className="Pokedex"> 
                 <h1 className={this.props.isWinner ? "Pokegame-winner" : "Pokegame-loser"}> {this.props.isWinner ? "Winner hand" : "Loser hand"}</h1>
<h4>Total experience {this.props.exp} </h4>

    <div className="Pokedex-card"> 
      {this.props.pokemon.map((p) => (
    <Pokecard id={p.id} name={p.name} type={p.type} exp= {p.base_experience}/>
      )      )}
      </div>
      </div>
    );
  }
}

export default Pokedex;
