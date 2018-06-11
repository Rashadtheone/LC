import React, { Component } from 'react';
import Navi from '../Nav/Navi';
import { Container, Row, Col } from 'reactstrap';

class LandscapingM extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Container>
                <Row>
                    <Col md='8'>
                        picture area
                    </Col>
                    <Col md='4'>
                        text area
                    </Col>
                </Row>
                <Row>
                <Col md='4'>
                        Text area
                    </Col>
                <Col md='8'>
                        picture area
                    </Col>
                </Row>
                <Row>
                <Col md='8'>
                        picture area
                    </Col>
                <Col md='4'>
                        text area
                    </Col>
                </Row>
                <Row>
                <Col md='4'>
                        Text area
                    </Col>
                <Col md='8'>
                        picture area
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default LandscapingM;