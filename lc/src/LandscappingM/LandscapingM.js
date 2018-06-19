import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navi from '../Nav/Navi';

class LandscapingM extends Component {
    render() {
        return (
            <div>
                <Navi />
            <Container>
                <Row>
                    <Col md='8'>
                        <img src='https://media.bizj.us/view/img/6950102/howtomowlawn*750xx2125-1197-0-57.jpg'/>
                    </Col>
                    <Col md='4'>
                        I offer Lawn Maintenance services 
                    </Col>
                </Row>
                <Row>
                <Col md='4'>
                        I offer path setting services 
                    </Col>
                <Col md='8'>
                        <img src='https://janedata.files.wordpress.com/2008/11/img_1368.jpg'/>
                    </Col>
                </Row>
                <Row>
                <Col md='8'>
                        <img src = 'https://i.ytimg.com/vi/dN8LBey17O8/maxresdefault.jpg'/>
                    </Col>
                <Col md='4'>
                        I offer landscaping services
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