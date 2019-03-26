import React, { Component } from 'react';
import { breakfast } from '../Components/JSON/breakfast.json';
import { Card, Container, Row, Col, Button} from 'react-bootstrap';


class MenuBreakfast extends Component {
    constructor() {
        super();
        this.state = {
            breakfast,
            breakfastArr: [],
        }

        this.food = this.food.bind(this);
    };

    food() {
        this.state({
            ...this.state,
            breakfastArr: this.state.breakfast.map((breakfast, i) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{breakfast.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{breakfast.price}</Card.Subtitle>
                        </Card.Body>
                    </Card>

                )
            })
        })
    }
    render() {
        return (
            <Button type="button" variant="outline-primary" onClick={this.food}>Desayuno</Button>

                );
            }
        }
export default MenuBreakfast;