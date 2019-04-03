import React, { Component } from 'react';
import NameForm from './Components/NameForm'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';
import NavbarPag from'./Components/Navbar';
import MenuBreakfast from './Components/menuBreakfast'; 
import MenuDinner from './Components/menuDinner';



class App extends Component {

  render() {
    return (
      <div className="app">
      <div className="panel-heading">
      <NavbarPag/>
      </div>
      <NameForm />
      <MenuBreakfast/>
      <MenuDinner/>
      </div>
    );
  }
}


export default App;
