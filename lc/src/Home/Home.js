import React, { Component } from 'react';
import {Col, Container, Row,
    Jumbotron, ListGroup, ListGroupItem } from 'reactstrap' 
import Navi from '../Nav/Navi';
import Main from '../Main/Main';
import HomeGallary from '../Gallaries/HomeGallary';
import LawnGallary from '../Gallaries/LawnGallary';



class Home extends Component {
    render() {
        return (
            <div>      
            <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Home Care</h1>
              <p className="lead">Improving a home? Need some Landscaping? You're in the right place for quaility services. </p>
            </Container>
          </Jumbotron>
                <Navi></Navi>
                <Container>

        <Row>
            {/* Create Home App holding slideshow, quick facts about company */}
          <Col md="9">
          <Main />
          </Col>
          {/* slideshow modules  */}
          <Col md="3">
          <Row>
          <LawnGallary />    
          </Row>
          <Row>
          <HomeGallary /> 
          </Row>
          </Col>
          
        </Row>
        <Row>
          <Col md="6">
          Contacts
          <Row>
              Phone #: 
          </Row>
          <Row>
              Email:
          </Row>
          </Col>         
          <Col md="6">
          Social Media
          <Row>
              Instagram: 
          </Row>
          <Row>
              Facebook:
          </Row>
          </Col>
        </Row>
      </Container>
            </div>
        );
    }
}

export default Home;