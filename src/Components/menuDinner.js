import React, { Component } from 'react';
import { dinner } from '../Components/JSON/dinner.json'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


class MenuDinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dinner,
            dinnerArr: []
        }

        this.food = this.food.bind(this);
    }

    food() {

        this.setState({
            ...this.state,
            dinnerArr: this.state.dinner.map((dinner, i) => {
                return (
                    <Container>
                        <Row>
                            <Col sm="4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title> {dinner.name} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> {dinner.price} </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                )
            })
        })
    }
    render() {
        return (
            <div>
                <Button type="button" variant="outline-primary" onClick={this.food}>Almuerzo / Cena</Button>
                {this.state.dinnerArr}
            </div>

        )
    }
}
export default MenuDinner;