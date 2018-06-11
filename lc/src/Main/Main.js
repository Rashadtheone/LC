import React, { Component } from 'react';
import {Col, Container, Row} from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                    <Col md='6'>
landscaping Services
                    </Col>
                    <Col md='6'>
home imporvement Services
                    </Col>
                    </Row>
                    <Row>
                    <Col md = '12'>
                    Quick facts / Brand Statement
                    </Col>
                    </Row>
                    
                    {/* <Row>
                        <Col md = '12'>
                        <Row>
                        <Col md = '6'>
                        Landscaping button
                        </Col>
                        <Col md = '6'>
                        Home improvement Button
                        </Col>
                        </Row>
                        </Col>
                  </Row> */}
                </Container>    
            </div>
        );
    }
}

export default Main;
