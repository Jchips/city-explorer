import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      city: ''
    }
  }

  updateCity = (e) => {
    console.log(e.target.value); // delete later
    this.setState({city: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let url =  `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    const response =  await axios.get(url);
    console.log(response.data);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>City name</Form.Label>
            <Form.Control onChange={this.updateCity} name="cityName" type="text" placeholder="enter city" />
          </Form.Group>
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
      </div>
    );
  }
}

export default App;

