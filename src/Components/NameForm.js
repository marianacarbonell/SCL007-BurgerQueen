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
            <div className="app">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.name} placeHolder="Nombre del Cliente" className="form-control form-control-lg mt-2" onChange={this.handleChange} />
                        </form>
                    </div>
                    <div className="container">
                    <div className="btn-lg col-md-6">
                        <input type="submit" value="Desayuno" onClick={this.handleSubmit} />
                        <input type="submit" value="Almuerzo / Cena" onClick={this.handleSubmit} />
                    </div>
                    <div className="col-md-6">
                        <input type="submit" className="btn btn-info mt-2" value="Enviar" onClick={this.handleSubmit} />
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default NameForm;