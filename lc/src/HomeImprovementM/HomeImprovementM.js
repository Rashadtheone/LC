import React, { Component } from 'react';
import Navi from '../Nav/Navi';
import { Container, Row, Col } from 'reactstrap';
import './homei.css'
class LandscapingM extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Container>
                <Row className='drywall'>
                    <Col md='8'>
                        <img src = "https://diy.sndimg.com/content/dam/images/diy/fullset/2005/2/11/0/dadh206_1fb.jpg.rend.hgtvcom.1280.960.suffix/1420774271472.jpeg"/>
                    </Col>
                    <Col md='4'>
                        <h1 className='textEdges'>I offer Dry Wall replacement</h1>
                    </Col>
                </Row>
                <Row className='floor'>
                <Col md='4'>
                        <h1 className='textEdges'>I offer floor replacement</h1>
                    </Col>
                <Col md='8'>
                        <img src = "https://silverflooring.com/wp-content/uploads/2017/03/Water-Damage-Floor-Replacement-5.jpg" />
                    </Col>
                </Row>
                <Row className='painting'>
                <Col md='8'>
                        <img src = "http://o.b5z.net/i/u/10221858/i/bigstock-One-male-house-painter-worker--38818072.jpg" />
                    </Col>
                <Col md='4'>
                        <h1 className='textEdges'>I offer painting services.</h1>
                    </Col>
                </Row>

            </Container>
            </div>
        );
    }
}

export default LandscapingM;