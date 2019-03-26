import React, { Component } from 'react';
import NameForm from './Components/NameForm'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';
import NavbarPag from'./Components/Navbar';
import MenuBreakfast from './Components/menuBreakfast'; 



class App extends Component {

  render() {
    return (
      <div class="app">
      <div class="panel-heading">
      <NavbarPag/>
      </div>
      <NameForm />
      <MenuBreakfast/>
      </div>
    );
  }
}


export default App;
