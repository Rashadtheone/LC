import React, { Component } from 'react';
import Navi from '../Nav/Navi';
import { Container, Row, Col } from 'reactstrap';
// import '../homei.css'

class LandscapingM extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Container>
                <Row className='drywall'>
                    <Col md='8'>
                        <img src = "https://media.bizj.us/view/img/6950102/howtomowlawn*750xx2125-1197-0-57.jpg"/>
                    </Col>
                    <Col md='4'>
                        <h1 className='textEdges'>I offer Lawn maintenance</h1>
                    </Col>
                </Row>
                <Row className='floor'>
                <Col md='4'>
                        <h1 className='textEdges'>I offer hedge & bush maintenance</h1>
                    </Col>
                <Col md='8'>
                        <img src = "https://janedata.files.wordpress.com/2008/11/img_1368.jpg" />
                    </Col>
                </Row>
                <Row className='painting'>
                <Col md='8'>
                        <img src = "https://i.ytimg.com/vi/dN8LBey17O8/maxresdefault.jpg" />
                    </Col>
                <Col md='4'>
                        <h1 className='textEdges'>Any type of Landscaping I can do it. </h1>
                    </Col>
                </Row>

            </Container>
            </div>
        );
    }
}

export default LandscapingM;