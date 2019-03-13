import React, { Component } from 'react';
import Buscador from './Components/Buscador'; 
import './App.css';

class App extends Component {

state = {
  termino : ' '
}
consultarApi= () => {
const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}`;
console.log(url);
}
datosBusqueda = (termino) =>{
this.setState({
  termino
},()=>{
this.consultarApi();
})
}
  render() {
    return (
      <div className="app container">
      <div className="jumbotron">
      <p className="lead text-center">Toma la orden</p>
      <Buscador 
      datosBusqueda ={this.datosBusqueda}
      />
      </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
