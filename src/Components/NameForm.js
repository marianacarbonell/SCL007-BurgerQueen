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
        }).catch(() => {
        })
    }
    nameRef = React.createRef();
    handleName = (e) => {
     e.preventDefault();
     const termino = (this.nameRef.current.value);
     this.props.clientName(termino);
    }

    render() {
        return (
            // <form onSubmit={this.handleName}>
                <div onSubmit={this.handleName} className="app">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.handleSubmit}>
                                <input ref={this.nameRef} type="text" value={this.state.name} placeholder="Nombre del Cliente" className="form-control form-control-lg mt-2" onChange={this.handleChange} />
                                <input type="submit" className="btn btn-lg col-md-6 btn-info mt-2" value="Enviar" onClick={this.handleSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            // </form>
        );
    }

}
export default NameForm;