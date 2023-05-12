/* Image from Unsplash - https://unsplash.com/photos/PhYq704ffdA */

import React, { Component } from 'react';
import { Form, Button} from "react-bootstrap";
import cityPhoto from "../../assets/imgs/city-hero-image.jpg"
import './CityForm.css';

class CityForm extends Component {
  render() {
    let handleSubmit = this.props.handleSubmit;
    let updateCity = this.props.updateCity;
    return (
      <section className="hero-image">
      <img className="hero-poster" alt="City" src={cityPhoto}/>
    
      <div className="container">
        <h1>
          <span className="top hero-text" style={{"fontSize": "65px"}}><b className="top-decoration">Search for a</b></span>
          <span className="bottom hero-text" style={{"fontSize": "140px"}}>city</span>
        </h1>
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
      </div>
      <div className="hero-decoration">
        <div className="side-l"></div>
        <div className="arrow"><img src="//d3krjgdh5n3zsi.cloudfront.net/assets/hero-triangle-96c387325f2a019be63ae3b4d443537f14714daf535a47c3c33b4332c15f55dd.png" alt="Hero triangle"/></div>
        <div className="side-r"></div>
      </div>
    </section>
    );
  }
}

export default CityForm;
