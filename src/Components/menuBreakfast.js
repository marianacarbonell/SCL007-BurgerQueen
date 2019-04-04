import React, { Component } from 'react';
import { breakfast } from '../Components/JSON/breakfast.json'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


class MenuBreakfast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast,
            breakfastArr: []
        }

        this.food = this.food.bind(this);
    }

    food() {

        this.setState({
            ...this.state,
            breakfastArr: this.state.breakfast.map((breakfast, i) => {
                return (
                    <Container>
                    <Row className="cardBreakfast">
                        <Col sm="8">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> {breakfast.name} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {breakfast.price} </Card.Subtitle>
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
                <Button type="button" variant="outline-primary" onClick={this.food}>Desayuno</Button>
                {this.state.breakfastArr}
            </div>

        )
    }
}
export default MenuBreakfast;