import React, { Component } from 'react';
import NameForm from './Components/NameForm'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';
import NavbarPag from'./Components/Navbar';
import MenuBreakfast from './Components/menuBreakfast'; 
import MenuDinner from './Components/menuDinner';



class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         termino: ''
//     };

// clientName = (termino) => {

// }
 

  render() {
    return (
      <div className="app">
      <div className="panel-heading">
      <NavbarPag/>
      </div>
      <NameForm 
      // clientName={this.clientName}
      />
      {/* {this.state.termino} */}
      <MenuBreakfast/>
      <MenuDinner/>
      </div>
    );
  }
}


export default App;
