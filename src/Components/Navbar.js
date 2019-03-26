import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavbarPag extends Component {
    constructor(props) {
        super(props);
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