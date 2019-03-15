import React, { Component } from 'react';
import NameForm from './Components/NameForm'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';

class App extends Component {

state = {
  termino : ' '
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
      <div class="container">
      <div class="panel-heading">
        <h3 class="panel-title">
          Burguer Queen
        </h3>
      </div>
      <div class="panel-body">
      <NameForm />
      </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
