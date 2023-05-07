import React, { Component } from 'react';
import { Form, Button} from "react-bootstrap";

class CityForm extends Component {
  render() {
    let handleSubmit = this.props.handleSubmit;
    let updateCity = this.props.updateCity;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>City name: </Form.Label>
          <Form.Control
            onChange={updateCity}
            name="cityName"
            type="text"
            placeholder="enter city name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    );
  }
}

export default CityForm;
