import React, { Component } from 'react';
import PropTypes from 'prop-types';
import db from '../firebase';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavbarPag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    };


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: ''
        })

        db.collection('Pedidos').add({
            Cliente: this.state.name
        }).then(() => {
            console.log('enviado')
        }).catch(() => {
            console.log('error');
        })
    }
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg bg-light">
                <Navbar.Brand href="#home">BurgerQueen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>
            </nav>
        );
    }

}
export default NavbarPag;