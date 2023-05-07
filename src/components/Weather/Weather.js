import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Weather.css';

class Weather extends Component {
  render() {
    let weatherData = this.props.weatherData;
    return (
      <div className='weather'>
        <h2>Weather data</h2>
        <section className='cards'>
          {weatherData.map(day =>
            <Card key={day.date}>
              <Card.Title>{day.date}</Card.Title>
              <Card.Text>Weather: {day.description}</Card.Text>
            </Card>
          )}
        </section>
      </div>
    );
  }
}

export default Weather;
