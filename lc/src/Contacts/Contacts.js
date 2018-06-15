import React, { Component } from 'react';
import Navi from '../Nav/Navi';
import { Jumbotron, Container,Form, FormGroup, Label, Input,
Button, FormText } from 'reactstrap';
class LandscapingM extends Component {
    render() {
        return (
            <div>
                <Navi />
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Contact Me</h1>
          <h3 >Ed Claiborne</h3>
          <h4>Phone # 240-***-****</h4>
          
        </Container>
      </Jumbotron>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Home Improvement</option>
            <option>Landscaping</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Short description of Job</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
 
        <Button>Submit</Button>
      </Form>
            </div>
        );
    }
}

export default LandscapingM;