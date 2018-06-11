import React, { Component } from 'react';
import {Col, Container, Row} from 'reactstrap' 
import Navi from '../Nav/Navi';
import Main from '../Main/Main';

class Home extends Component {
    render() {
        return (
            <div>
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
          Lawn Care Slide     
          </Row>
          <Row>
          Home Care Slide 
          </Row>
          </Col>
          
        </Row>
        <Row>
          <Col md="12">footer</Col>
        </Row>
      </Container>
            </div>
        );
    }
}

export default Home;