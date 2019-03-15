import React, { Component } from 'react';
import PropTypes from 'prop-types';
import db from '../firebase';


class NameForm extends Component {
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} placeHolder= "Nombre del Cliente" onChange={this.handleChange} />
                <input type="submit" value="Enviar" onClick={this.handleSubmit} />
                <input type="submit" value="Desayuno" onClick={this.handleSubmit} />
                <input type="submit" value="Almuerzo / Cena" onClick={this.handleSubmit} />
            </form>
        );
    }

}
export default NameForm;