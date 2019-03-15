import React, { Component } from 'react';
import NameForm from './Components/NameForm'; 
import { Link } from 'react-router-dom';
import firebase from './firebase';
import { Button } from 'react-bootstrap';
import NavbarPag from'./Components/Navbar'; 


class App extends Component {

  render() {
    return (
      <div class="container">
      <div class="panel-heading">
      <NavbarPag/>
      </div>
      <div class="panel-body">
      <NameForm />
      <Button variant="info">Info</Button>
      </div>
      </div>
    );
  }
}

export default App;
