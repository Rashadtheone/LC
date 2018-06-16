import React, { Component } from 'react';
import {Col, Container, Row, CardTitle, 
    CardSubtitle, Button, CardBody,
    Card, CardImg, ListGroup, ListGroupItem} from 'reactstrap'
    import './main.css';
class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                    <Col md='6'>
                    <Card>
        <CardImg top width="100%" src="http://driglo.com.au/wp-content/uploads/2018/04/porch-home-improvement.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Home Improvement</CardTitle>
          <CardSubtitle>Total Care</CardSubtitle>
              <ListGroup>
        <ListGroupItem>Painting</ListGroupItem>
        <ListGroupItem>Pluming</ListGroupItem>
        <ListGroupItem>Fixing/Knocking down walls</ListGroupItem>
        <ListGroupItem>Changing light Fixures</ListGroupItem>
        <ListGroupItem>Etc</ListGroupItem>
      </ListGroup>
          <Button>Set Appointment</Button>
        </CardBody>
      </Card>
                    </Col>
                    <Col md='6'>
                    <Card>
        <CardImg top width="100%" src="https://www.razorsync.com/images/industry-lp-lawncare.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Landscaping </CardTitle>
          <CardSubtitle>Quaility Improvements</CardSubtitle>
          <ListGroup>
        <ListGroupItem>Lawn Care</ListGroupItem>
        <ListGroupItem>Staining Decks</ListGroupItem>
        <ListGroupItem>Repair / Put up gates</ListGroupItem>
        <ListGroupItem>Power Washing</ListGroupItem>
        <ListGroupItem>Etc</ListGroupItem>
      </ListGroup>
          <Button>Set Appointment</Button>
        </CardBody>
      </Card>
                    </Col>
                    </Row>

                </Container>    
            </div>
        );
    }
}

export default Main;
