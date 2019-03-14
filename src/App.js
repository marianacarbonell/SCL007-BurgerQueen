import React, { Component } from 'react';
import Buscador from './Components/Buscador'; 
import './App.css';
import { Link } from 'react-router-dom';
import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BurgerQueen
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Entrar</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Pedido</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


class app extends Component {

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

export default app;
