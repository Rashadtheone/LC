import React, { Component } from 'react';
import {Col, Container, Row, CardTitle, 
    CardSubtitle, CardText, Button, CardBody,
    Card, CardImg, ListGroup, ListGroupItem} from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                    <Col md='6'>
                    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Home Improvement</CardTitle>
          <CardSubtitle>Total Care</CardSubtitle>
              <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
          <Button>Set Appointment</Button>
        </CardBody>
      </Card>
                    </Col>
                    <Col md='6'>
                    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Landscaping </CardTitle>
          <CardSubtitle>Quaility Improvements</CardSubtitle>
          <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
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
